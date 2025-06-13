/*import { Component } from '@angular/core';

@Component({
  selector: 'app-partidos',
  imports: [],
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css'
})
export class PartidosComponent {

}*/
import { Component, OnInit } from '@angular/core';
import { PartidosService, Jornada } from '../services/partidos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  jornadas: Jornada[] = [];
  loading = true;

  constructor(private partidosService: PartidosService) {}

  /*ngOnInit(): void {
    this.partidosService.getJornadas().subscribe({
      next: (data) => {
        this.jornadas = data.sort((a, b) => a.numero.localeCompare(b.numero));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar jornadas:', err);
        this.loading = false;
      }
    });
  }*/
  ngOnInit(): void {
    this.partidosService.getJornadas().subscribe({
      next: (data) => {
        this.jornadas = data.sort((a, b) => {
          // Extrae el número después de la 'J' y convierte a entero
          const numA = parseInt(a.numero.replace(/\D/g, ''), 10);
          const numB = parseInt(b.numero.replace(/\D/g, ''), 10);
          return numA - numB;
        });
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar jornadas:', err);
        this.loading = false;
      }
    });
  }
}