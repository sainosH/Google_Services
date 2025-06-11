import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import equiposData from '../../assets/equipos.json'; // ⚠️ TS configurará esto abajo

@Injectable({
  providedIn: 'root',
})
export class CargaEquiposService {
  constructor(private firestore: Firestore) {}

  async subirEquipos(): Promise<void> {
    const equiposRef = collection(this.firestore, 'equipos');

    for (const equipo of equiposData) {
      await addDoc(equiposRef, equipo);
    }

    console.log('✅ Equipos cargados correctamente');
  }
}
