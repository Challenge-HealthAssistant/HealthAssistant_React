// src/data/api.ts
import type { tipoCuidador } from "../types/tipoCuidador";
import type { tipoConsulta } from "../types/tipoConsulta";
import type { tipoResultadoExame } from "../types/tipoResultadoExame";

export const API_BASE_URL = "https://hc-assistant.onrender.com"; 

export async function getPacienteById(id: number) {
  const response = await fetch(`${API_BASE_URL}/pacientes/${id}`);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar paciente (status ${response.status})`);
  }

  return await response.json();
}

export async function updatePaciente(id: number, paciente: any) {
  const response = await fetch(`${API_BASE_URL}/pacientes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paciente),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao atualizar paciente (status ${response.status}): ${errorText}`);
  }

  return await response.json();
}

export async function getCuidadorById(id: number): Promise<tipoCuidador> {
  const response = await fetch(`${API_BASE_URL}/cuidadores/${id}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar cuidador (status ${response.status})`);
  }

  return await response.json();
}

export async function getAllCuidadores(): Promise<tipoCuidador[]> {
  const response = await fetch(`${API_BASE_URL}/cuidadores`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar cuidadores (status ${response.status})`);
  }

  return await response.json();
}

export async function getCuidadorByPacienteId(idPaciente: number): Promise<tipoCuidador | null> {
  try {
    
    try {
      const response = await fetch(`${API_BASE_URL}/cuidadores/paciente/${idPaciente}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (endpointError) {
      // Endpoint direto não disponível, usando método alternativo
    }
    
    // Fallback: buscar todos e filtrar
    const todosCuidadores = await getAllCuidadores();
    const cuidadorDoPaciente = todosCuidadores.find(c => c.idPaciente === idPaciente);
    return cuidadorDoPaciente || null;
  } catch (error) {
    return null;
  }
}

export async function createCuidador(cuidador: Omit<tipoCuidador, 'idCuidador'>): Promise<tipoCuidador> {
  const response = await fetch(`${API_BASE_URL}/cuidadores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cuidador),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao criar cuidador (status ${response.status}): ${errorText}`);
  }

  return await response.json();
}

export async function updateCuidador(id: number, cuidador: Omit<tipoCuidador, 'idCuidador'>): Promise<tipoCuidador> {
  const response = await fetch(`${API_BASE_URL}/cuidadores/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cuidador),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao atualizar cuidador (status ${response.status}): ${errorText}`);
  }

  return await response.json();
}

// =====================
// CONSULTAS FUNCTIONS
// =====================

// Buscar consultas por paciente ID (função principal)
export async function getConsultasByPacienteId(idPaciente: number): Promise<tipoConsulta[]> {
  // Buscar todas as consultas e filtrar pelo paciente
  const response = await fetch(`${API_BASE_URL}/consultas`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar consultas (status ${response.status})`);
  }

  const todasConsultas = await response.json();
  
  // Filtrar consultas do paciente específico
  return todasConsultas.filter((consulta: tipoConsulta) => consulta.idPaciente === idPaciente);
}

// Criar nova consulta
export async function createConsulta(consulta: Omit<tipoConsulta, 'idConsulta'>): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/consultas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(consulta),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao criar consulta (status ${response.status}): ${errorText}`);
  }

  return await response.text(); // Retorna mensagem de sucesso
}

// Atualizar consulta
export async function updateConsulta(id: number, consulta: Partial<tipoConsulta>): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/consultas/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(consulta),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao atualizar consulta (status ${response.status}): ${errorText}`);
  }

  return await response.text(); // Retorna mensagem de sucesso
}

// Deletar consulta
export async function deleteConsulta(id: number): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/consultas/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao deletar consulta (status ${response.status}): ${errorText}`);
  }

  return true; // Retorna true se deletou com sucesso (204 No Content)
}

// ========================================
// RESULTADOS DE EXAMES
// ========================================

// Buscar resultados de exames por ID do paciente
export async function getResultadosByPacienteId(idPaciente: number): Promise<tipoResultadoExame[]> {
  const response = await fetch(`${API_BASE_URL}/resultadoExame/paciente/${idPaciente}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar resultados de exames (status ${response.status})`);
  }

  return await response.json();
}

// ========================================
// AUTENTICAÇÃO E CADASTRO
// ========================================

// Login de paciente
export async function loginPaciente(cpf: string, dataNascimento: string) {
  const response = await fetch(`${API_BASE_URL}/pacientes/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cpf: cpf.replace(/\D/g, ""), // remove pontos e traços
      dataNascimento: dataNascimento.split("/").reverse().join("-"), // DD/MM/YYYY -> YYYY-MM-DD
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro no login (status ${response.status}): ${errorText}`);
  }

  return await response.json();
}

// Cadastro de paciente
export async function cadastrarPaciente(pacienteData: {
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  possuiCuidador?: boolean;
}) {
  const response = await fetch(`${API_BASE_URL}/pacientes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(pacienteData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro no cadastro (status ${response.status}): ${errorText}`);
  }

  return await response.json();
}
