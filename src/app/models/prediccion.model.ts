export interface ResultadoProbabilidad {
  label: string;
  prob: number;
}

export interface PrediccionRespuesta {
  predicted_resultado: string;
  predicted_resultado_probs: ResultadoProbabilidad[];
  puntos_ultimos5_local: number;
  puntos_ultimos5_visitante: number;
}
