import type { tipoPaciente } from "../types/tipoPaciente";

export const listaPacientes: tipoPaciente[] = [
  {
    id: 1,
    nome: "Maria Silva",
    dataNascimento: "10/10/2000",
    cpf: "123.456.789-00",
    telefone: "(11) 91234-5678",
    senha: "senha123",
    email: "maria.silva@email.com",
    endereco: "Rua Doutor Alfredo de Castro, 189",
    bairro: "Barra Funda",
  },
  {
    id: 2,
    nome: "João Souza",
    dataNascimento: "05/08/1998",
    cpf: "987.654.321-00",
    telefone: "(11) 99876-5432",
    senha: "senha456",
    email: "joao.souza@email.com",
    endereco: "Av. Paulista, 1500",
    bairro: "Bela Vista",
  },
  {
    id: 3,
    nome: "Ana Pereira",
    dataNascimento: "22/03/2002",
    cpf: "456.789.123-00",
    telefone: "(11) 93456-7890",
    senha: "senha789",
    email: "ana.pereira@email.com",
    endereco: "Rua das Flores, 45",
    bairro: "Pinheiros",
  },
];
