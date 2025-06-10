import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EquiposComponent } from './equipos/equipos.component';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const isLoggedIn = () => {
  const auth = inject(Auth);
  return new Promise<boolean>((resolve) => {
    const unsub = auth.onAuthStateChanged((user) => {
      resolve(!!user);
      unsub();
    });
  });
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: '',
    component: AuthLayoutComponent,
    canActivate: [isLoggedIn],
    children: [
      {
        path: 'dashboard', loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent),
      },
      {
        path: 'equipos',component: EquiposComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'login' },
];