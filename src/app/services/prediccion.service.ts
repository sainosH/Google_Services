/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrediccionService {
  private functionUrl =
    'https://us-central1-reforma-7.cloudfunctions.net/predecirPartido';

  constructor(private http: HttpClient) {}

  predecir(datosEntrada: any): Observable<any> {
    return this.http.post(this.functionUrl, datosEntrada);
  }
}

*/

/*
// src/app/services/prediccion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PrediccionService {
  private apiUrl = 'https://us-central1-reforma-7.cloudfunctions.net/predecirPartido';

  constructor(private http: HttpClient) {}

  predecirPartido(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
}
*/ 

// prediction.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PredictionService {
  private url = 'https://predecirpartido-7velal4t4q-uc.a.run.app';

  constructor(private http: HttpClient) {}

  predecir(local: number, visitante: number) {
    return this.http.post(this.url, {
      puntos_ultimos5_local: local,
      puntos_ultimos5_visitante: visitante
    });
  }
}
