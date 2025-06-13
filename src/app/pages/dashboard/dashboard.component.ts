import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, AsyncPipe, CommonModule } from '@angular/common';
import { CargaEquiposService } from '../../services/carga-equipos.service';
import { CargaPartidosService } from '../../services/carga-partidos.service';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink ],
  templateUrl: './dashboard.component.html',
  standalone: true,
})
export class DashboardComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    private cargaEquiposService: CargaEquiposService,
    private cargaPartidosService: CargaPartidosService
  ) {}

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
  cargarClausura() {
    this.cargaEquiposService.subirEquiposClausura();
  }

  cargarApertura() {
    this.cargaEquiposService.subirEquiposApertura();
  }

  cargarPartidos(){
    this.cargaPartidosService.subirPartidos();
  }
}


