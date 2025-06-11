import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import equiposData from '../../assets/clausura.json'; 
import AperturaData from '../../assets/apertura.json'; 


@Injectable({
  providedIn: 'root',
})
export class CargaEquiposService {
  constructor(private firestore: Firestore) {}

  async subirEquiposClausura(): Promise<void> {
    const equiposRef = collection(this.firestore, 'Clausura');

    for (const equipo of equiposData) {
      await addDoc(equiposRef, equipo);
    }

    console.log('✅ Equipos cargados correctamente');
  }

  async subirEquiposApertura(): Promise<void> {
    const aperturaRef = collection(this.firestore, 'Apertura');

    for (const apertura of AperturaData) {
      await addDoc(aperturaRef, apertura);
    }

    console.log('✅ Equipos cargados correctamente de Apertura');
  }
}
