// data/Agendamentos.ts
import type { tipoAgendamento } from "../types/tipoAgendamento";

export const listaAgendamentos: tipoAgendamento[] = [
  {
    id: 1,
    pacienteId: 1, // Maria Silva
    data: "14/05/2025",
    horario: "14:00",
    tipo: "Teleconsulta",
    unidade: "IMREA Lirmaliz",
    especialidade: "Cardiologia",
    medico: "Dr. João Silva",
    status: "Agendado"
  },
  {
    id: 2,
    pacienteId: 1, // Maria Silva
    data: "20/05/2025",
    horario: "10:30",
    tipo: "Presencial",
    unidade: "Hospital das Clínicas",
    especialidade: "Dermatologia",
    medico: "Dra. Ana Costa",
    status: "Agendado"
  },
  {
    id: 3,
    pacienteId: 3, // Ana Pereira
    data: "16/05/2025",
    horario: "16:00",
    tipo: "Teleconsulta",
    unidade: "IMREA Central",
    especialidade: "Pediatria",
    medico: "Dr. Carlos Lima",
    status: "Agendado"
  }
  // João (pacienteId: 2) não tem agendamentos
];