import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../services/equipos.service';
import { CommonModule } from '@angular/common';
import { Apertura } from '../models/equipo.model';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit {
  activeTab: 'apertura' | 'clausura' = 'apertura';
  Apertura: Apertura[] = [];
  Clausura: Apertura[] = [];

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    console.log('Inicializando componente...');

    this.equipoService.getEquiposApertura().subscribe({
      next: (data) => {
        console.log('Datos de Apertura recibidos:', data);
        this.Apertura = data.sort((a, b) => b.pts - a.pts);
      },
      error: (error) => console.error('Error al cargar Apertura:', error),
    });

    this.equipoService.getEquiposClausura().subscribe({
      next: (data) => {
        console.log('Datos de Clausura recibidos:', data);
        this.Clausura = data.sort((a, b) => {
          // Primero por puntos (descendente)
          if (b.pts !== a.pts) return b.pts - a.pts;

          // Si hay empate en puntos, por diferencia de goles (descendente)
          if (b.gf !== a.gf) return b.gf - a.gf;

          // Si persiste el empate, por goles a favor (descendente)
          return b.gf - a.gf;
        });
      },
      error: (error) => console.error('Error al cargar Clausura:', error),
    });
  }

  get equiposActuales(): Apertura[] {
    return this.activeTab === 'apertura' ? this.Apertura : this.Clausura;
  }
}