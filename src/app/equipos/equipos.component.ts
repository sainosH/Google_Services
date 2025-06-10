import { Component, OnInit } from '@angular/core';
import { Equipo } from '../models/equipo.model';
import { EquipoService } from '../services/equipos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
})
export class EquiposComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    console.log('Inicializando componente de equipos...');
    this.equipoService.getEquipos().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.equipos = data.sort((a, b) => b.pts - a.pts);
      },
      error: (error) => {
        console.error('Error al obtener equipos:', error);
      },
    });
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { EquiposService, Equipo } from '../services/equipos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css',
})
export class EquiposComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equiposService: EquiposService) {}

  ngOnInit() {
    this.equiposService.getEquipos().subscribe((data) => {
      console.log('Equipos recibidos:', data);
      this.equipos = data;
    });
  }
}

*/
