// src/data/api.ts
export const API_BASE_URL = "http://localhost:8080"; 

export async function getPacienteById(id: number) {
  const response = await fetch(`${API_BASE_URL}/pacientes/${id}`);
  
  if (!response.ok) {
    throw new Error(`Erro ao buscar paciente (status ${response.status})`);
  }

  return await response.json();
}
