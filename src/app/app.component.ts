import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgIf, AsyncPipe } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe],
  template: `<div style="padding: 1rem;">
    <p *ngIf="authService.currentUser$ | async as user">
      Sesión iniciada como: {{ user.email }}
      <button (click)="logout()">Cerrar sesión</button>
    </p>

    <router-outlet></router-outlet>
  </div>`,
})


export class AppComponent {
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    effect(() => {
      this.authService.currentUser$.subscribe((user) => {
        const currentUrl = this.router.url;
        if (user && currentUrl === '/login') {
          this.router.navigateByUrl('/dashboard');
        }
      });
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}