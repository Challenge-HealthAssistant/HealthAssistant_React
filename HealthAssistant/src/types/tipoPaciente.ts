export interface tipoPaciente {
  idPaciente: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  idCuidador?: number; // Referência ao ID do cuidador
  cuidador?: string; // Nome do cuidador (fallback)
  telefoneCuidador?: string; // Telefone do cuidador (fallback)
  email: string;
}
