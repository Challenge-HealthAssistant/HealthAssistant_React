import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { listaPacientes } from "../../components/data/Pacientes";

export default function Login() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    setErro("");
    setCarregando(true);
    
    try {
      // Buscar paciente diretamente (sem delay)
      const pacienteEncontrado = listaPacientes.find((paciente: tipoPaciente) => 
        paciente.cpf === cpf && paciente.dataNascimento === dataNascimento
      );
      
      if (pacienteEncontrado) {
        localStorage.setItem('pacienteLogadoId', pacienteEncontrado.id.toString());
        localStorage.setItem('pacienteLogadoNome', pacienteEncontrado.nome);
        navigate("/codigodeverificacao");
      } else {
        setErro("CPF ou data de nascimento incorretos. Tente novamente.");
      }
    } catch (error) {
      setErro("Erro interno. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col items-center">
      {/* Informações para teste - remover em produção */}
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded mt-4 text-xs max-w-[340px]">
        <strong>Dados para teste:</strong><br/>
        <strong>Maria:</strong> CPF: 123.456.789-00, Data: 10/10/2000<br/>
        <strong>João:</strong> CPF: 987.654.321-00, Data: 05/08/1998<br/>
        <strong>Ana:</strong> CPF: 456.789.123-00, Data: 22/03/2002
      </div>
      
      <div
        className="bg-white mt-6 rounded-lg w-[340px] p-6"
      >
        <h2 className="bg-[#1976a5] text-white -mt-6 -mx-6 mb-6 py-4 rounded-t-lg text-center text-lg font-semibold">
          Acessar conta
        </h2>
        <label className="text-[#1976a5] font-semibold block mb-2">
          Coloque seu CPF e data de nascimento
        </label>
        <input
          placeholder="CPF"
          className="w-full mb-3 p-2.5 rounded-md border-none bg-[#eaeaea] outline-none"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          placeholder="Data de nascimento"
          className="w-full mb-1 p-2.5 rounded-md border-none bg-[#eaeaea] outline-none"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <div className="text-xs text-[#888] mb-4">Digite apenas números</div>
        
        {erro && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
            {erro}
          </div>
        )}
        
        <button
          type="button"
          onClick={handleLogin}
          disabled={carregando}
          className={`w-full p-2.5 rounded-md border-none font-semibold mb-4 ${
            carregando 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-[#1976a5] text-white hover:bg-[#155a8a]'
          }`}
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
        <div className="flex items-center my-2">
          <hr className="flex-1 border-[#1976a5]" />
          <span className="mx-2 text-[#1976a5] font-semibold">ou</span>
          <hr className="flex-1 border-[#1976a5]" />
        </div>
        <button
          type="button"
          className="w-full p-2.5 rounded-md border-none bg-[#eaeaea] text-[#1976a5] font-semibold mb-2"
          onClick={() => navigate("/loginsenha")}
        >
          Entrar com senha
        </button>
        <div className="text-center mt-2">
          <button
            type="button"
            className="text-[#1976a5] font-semibold no-underline"
            onClick={() => navigate("/cadastro")}
          >
            Fazer cadastro
          </button>
        </div>
      </div>
    </div>
  );
}