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

  ngOnInit(): void {
    this.partidosService.getJornadas().subscribe({
      next: (data) => {
      // Ordena jornadas por número
        this.jornadas = data.sort((a, b) => {
          const numA = parseInt(a.numero.replace(/\D/g, ''), 10);
          const numB = parseInt(b.numero.replace(/\D/g, ''), 10);
          return numA - numB;
        }).map(jornada => {
          // Ordena partidos por fecha y hora ascendente
          const partidosOrdenados = [...jornada.partidos].sort((a, b) => {
            // Combina fecha y hora en un solo Date para comparar
            const fechaA = new Date(`${a.fecha}T${a.hora}`);
            const fechaB = new Date(`${b.fecha}T${b.hora}`);
            return fechaA.getTime() - fechaB.getTime();
          });
          return { ...jornada, partidos: partidosOrdenados };
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