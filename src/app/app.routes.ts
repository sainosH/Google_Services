import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { RegisterComponent } from './pages/register/register.component';
import { EquiposComponent } from './equipos/equipos.component';
import { canActivate } from '@angular/fire/auth-guard'; // si estás usando guard

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
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [isLoggedIn],
  },
  {
    path: 'equipos',
    component: EquiposComponent,
    canActivate: [isLoggedIn], // ⬅️ protege esta ruta también
  },
  { path: '**', redirectTo: 'login' },
];
