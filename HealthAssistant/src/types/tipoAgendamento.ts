// types/tipoAgendamento.ts
export interface tipoAgendamento {
  id: number;
  pacienteId: number; // FK para o paciente
  data: string; // "14/05/2025"
  horario: string; // "14:00"
  tipo: "Teleconsulta" | "Presencial";
  unidade: string; // "IMREA Lirmaliz"
  especialidade?: string; // "Cardiologia", "Pediatria", etc
  medico?: string; // "Dr. João Silva"
  status: "Agendado" | "Concluído" | "Cancelado";
  observacoes?: string;
}