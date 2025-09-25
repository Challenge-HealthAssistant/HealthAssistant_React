// data/Agendamentos.ts
import type { tipoAgendamento } from "../types/tipoAgendamento";

export const listaAgendamentos: tipoAgendamento[] = [
  {
    id: 1,
    pacienteId: 1, // Maria Silva
    data: "02/10/2025",
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
    data: "15/10/2025",
    horario: "10:30",
    tipo: "Presencial",
    unidade: "Hospital das Clínicas",
    especialidade: "Dermatologia",
    medico: "Dra. Ana Costa",
    status: "Agendado"
  },
  {
    id: 3,
    pacienteId: 1, // Maria Silva (histórico)
    data: "20/08/2025",
    horario: "09:00",
    tipo: "Presencial",
    unidade: "IMREA Central",
    especialidade: "Clínico Geral",
    medico: "Dr. Pedro Santos",
    status: "Concluído"
  },
  {
    id: 4,
    pacienteId: 2, // João Souza
    data: "28/09/2025",
    horario: "16:00",
    tipo: "Teleconsulta",
    unidade: "IMREA Central",
    especialidade: "Psicologia",
    medico: "Dra. Luciana Reis",
    status: "Agendado"
  },
  {
    id: 5,
    pacienteId: 3, // Ana Pereira
    data: "05/10/2025",
    horario: "11:00",
    tipo: "Presencial",
    unidade: "Hospital das Clínicas",
    especialidade: "Pediatria",
    medico: "Dr. Carlos Lima",
    status: "Agendado"
  },
  {
    id: 6,
    pacienteId: 3, // Ana Pereira (histórico)
    data: "15/07/2025",
    horario: "14:30",
    tipo: "Teleconsulta",
    unidade: "IMREA Lirmaliz",
    especialidade: "Dermatologia",
    medico: "Dra. Marina Oliveira",
    status: "Concluído"
  }
];