import { Injectable } from '@angular/core';
import { 
  Firestore, 
  collection, 
  collectionData, 
  getDocs,
  QuerySnapshot,
  DocumentData
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Equipo } from '../models/equipo.model';

@Injectable({ providedIn: 'root' })
export class EquipoService {
  constructor(private firestore: Firestore) {}

  getEquipos(): Observable<Equipo[]> {
    const equiposRef = collection(this.firestore, 'equipos');
    
    // Usando from para convertir la Promise en Observable
    return from(getDocs(equiposRef)).pipe(
      map((snapshot: QuerySnapshot<DocumentData>) => {
        return snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            nombre: data['nombre'],
            pj: data['pj'],
            g: data['g'],
            e: data['e'],
            p: data['p'],
            gf: data['gf'],
            gc: data['gc'],
            dg: data['dg'],
            pts: data['pts'],
            ultimos5: data['ultimos5']
          } as Equipo;
        });
      })
    );
  }
}

/*import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Equipo{
  id?: string;
  nombre: string;
  goles: number;
  asistencias: number;
  jugadores: string[];
}

@Injectable({ providedIn: 'root' })
export class EquiposService {
  constructor(private firestore: Firestore) {}

  getEquipos(): Observable<Equipo[]> {
    const equiposRef = collection(
      this.firestore, 'equipos');
    return collectionData(equiposRef, { idField: 'id' }) as Observable<Equipo[]>;
  }
}


  /*
  agregarEquipo(equipo: Equipo) {
    const equiposRef = collection(this.firestore, 'equipos');
    return addDoc(equiposRef, equipo);
  }*/
