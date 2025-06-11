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
import { Apertura } from '../models/equipo.model';


@Injectable({ providedIn: 'root' })
export class EquipoService {
  constructor(private firestore: Firestore) {}

  private mapSnapshotToEquipos(
    snapshot: QuerySnapshot<DocumentData>
  ): Apertura[] {
    return snapshot.docs.map((doc) => {
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
        ultimos5: data['ultimos5'],
      } as Apertura;
    });
  }

  getEquiposApertura(): Observable<Apertura[]> {
    const ref = collection(this.firestore, 'Apertura');
    return from(getDocs(ref)).pipe(map(this.mapSnapshotToEquipos));
  }

  getEquiposClausura(): Observable<Apertura[]> {
    const ref = collection(this.firestore, 'Clausura');
    return from(getDocs(ref)).pipe(map(this.mapSnapshotToEquipos));
  }
}
