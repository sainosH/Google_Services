export interface Equipo {
  id?: string;
  nombre: string;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  dg: number;
  pts: number;
  ultimos5: string[]; // Asegúrate que sea un array
}
