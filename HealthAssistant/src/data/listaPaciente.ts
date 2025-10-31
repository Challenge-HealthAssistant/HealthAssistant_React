import type { tipoPaciente } from "../types/tipoPaciente";

export const listaPacientes: tipoPaciente[] = [
  {
    idPaciente: 1,
    nome: "Maria Silva",
    dataNascimento: "10/10/2000",
    cpf: "12345678900",
    telefone: "(11) 91234-5678",
    senha: "senha123",
    email: "maria.silva@email.com",
    
  },
  {
    idPaciente: 2,
    nome: "João Souza",
    dataNascimento: "05/08/1998",
    cpf: "98765432100",
    telefone: "(11) 99876-5432",
    senha: "senha456",
    email: "joao.souza@email.com",
    
  },
  {
    idPaciente: 3,
    nome: "Ana Pereira",
    dataNascimento: "22/03/2002",
    cpf: "45678912300",
    telefone: "(11) 93456-7890",
    senha: "senha789",
    email: "ana.pereira@email.com",
  },
];
