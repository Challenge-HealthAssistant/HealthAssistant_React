// src/types/tipoConsulta.ts
export interface tipoConsulta {
  idConsulta: number;
  idPaciente: number;
  tipo: string; // tp_consulta - ex: "Consulta de rotina", "Emergência", etc.
  status: string; // ds_status - ex: "Agendada", "Realizada", "Cancelada"
  dataHora: string; // dt_hora_data - formato: YYYY-MM-DDTHH:MM:SS
}