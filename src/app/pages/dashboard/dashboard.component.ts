import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';
import { CargaEquiposService } from '../../services/carga-equipos.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
})
export class DashboardComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    private cargaEquiposService: CargaEquiposService
  ) {}

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
  cargar() {
    this.cargaEquiposService.subirEquipos();
  }
}


