// src/data/api.ts
import type { tipoCuidador } from "../types/tipoCuidador";

export const API_BASE_URL = "http://localhost:8080"; 

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
