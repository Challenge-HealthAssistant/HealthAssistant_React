export interface tipoResultadoExame {
  idResultado: number;
  dataResultado: string; // LocalDate do Java será string no frontend
  descricaoResultado: string; // 'positivo', 'negativo', 'inconclusivo'
  fichaMedica: string;
  instituicao: string;
  idPaciente: number;
}