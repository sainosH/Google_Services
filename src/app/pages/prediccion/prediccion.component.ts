/*import { Component } from '@angular/core';
import { PrediccionService } from '../../services/prediccion.service';
import { PrediccionRespuesta } from '../../models/prediccion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prediccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prediccion.component.html',
  styleUrl: './prediccion.component.css',
})
export class PrediccionComponent {
  prediccion?: PrediccionRespuesta;
  cargando = false;

  constructor(private prediccionService: PrediccionService) {}

  obtenerPrediccion() {
    this.cargando = true;
    const datos = {
      puntos_ultimos5_local: 9,
      puntos_ultimos5_visitante: 4,
    };
    //Kotlin
    this.prediccionService.predecirPartido(datos).subscribe((res) => {
      this.prediccion = res;
      this.cargando = false;
    });
  }
}

*/


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-prediccion',
imports: [CommonModule, FormsModule ],
templateUrl: './prediccion.component.html',
})

export class PrediccionComponent {
puntosLocal = 0;
puntosVisitante = 0;
resultado: string | null = null;
probabilidades: any = null;
cargando = false;
error: string | null = null;

constructor(private http: HttpClient) {}

predecir() {
  
this.cargando = true;
this.error = null;
this.resultado = null;

//kotlin
this.http
  .post<any>('https://predecirpartido-7velal4t4q-uc.a.run.app', {
    puntos_ultimos5_local: this.puntosLocal,
    puntos_ultimos5_visitante: this.puntosVisitante,
  })
  .subscribe({
    next: (res) => {
      console.log('Respuesta recibida del backend:', res); // <-- Aquí
      this.resultado = res.prediccion;
      this.probabilidades = res.probabilidades;
      this.cargando = false;
    },
    error: (err) => {
      this.error = 'Error al predecir';
      console.error('Error al hacer la petición:', err); // <-- Aquí también
      this.cargando = false;
    },
  });
}
// 👇 Aquí agregas el helper para convertir a número
asNumber(value: unknown): number {
  return typeof value === 'number' ? value : 0;
}
}