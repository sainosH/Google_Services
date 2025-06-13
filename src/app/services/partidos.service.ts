/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor() { }
}*/
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Partido {
  local: string;
  visita: string;
  fecha: string;
  hora: string;
  marcadorLocal?: number;
  marcadorVisita?: number;
}

export interface Jornada {
  id?: string;
  numero: string;
  inicio_jornada: string;
  fin_jornada: string;
  partidos: Partido[];
}

@Injectable({ providedIn: 'root' })
export class PartidosService {
  constructor(private firestore: Firestore) {}

  private mapSnapshotToJornadas(snapshot: QuerySnapshot<DocumentData>): Jornada[] {
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        numero: data['numero'],
        inicio_jornada: data['inicio_jornada'],
        fin_jornada: data['fin_jornada'],
        partidos: data['partidos'] || []
      } as Jornada;
    });
  }

  getJornadas(): Observable<Jornada[]> {
    const ref = collection(this.firestore, 'Partidos');
    return from(getDocs(ref)).pipe(map(this.mapSnapshotToJornadas));
  }
}