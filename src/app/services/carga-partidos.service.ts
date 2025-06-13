import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import partidosData from '../../assets/partidos.json';

@Injectable({
  providedIn: 'root',
})
export class CargaPartidosService {
  constructor(private firestore: Firestore) {}

  async subirPartidos(): Promise<void> {
    const partidosRef = collection(this.firestore, 'Partidos');
    const jornadas = partidosData.jornadas;

    for (const jornada of jornadas) {
      await addDoc(partidosRef, jornada);
    }

    console.log('✅ Partidos cargados correctamente');
  }
}