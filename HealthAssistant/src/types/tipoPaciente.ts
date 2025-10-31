export interface tipoPaciente {
  idPaciente: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  cuidador?: string;
  email: string;
  senha?: string;
}
