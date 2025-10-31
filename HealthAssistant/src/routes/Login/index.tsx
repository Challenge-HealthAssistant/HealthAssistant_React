import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { listaPacientes } from "../../data/listaPaciente";

export default function Login() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function formatarCPF(value: string) {
    // Remove tudo que não é dígito
    const apenasNumeros = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    const limitado = apenasNumeros.slice(0, 11);
    
    // Aplica a máscara
    return limitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  function formatarData(value: string) {
    // Remove tudo que não é dígito
    const apenasNumeros = value.replace(/\D/g, '');
    
    // Limita a 8 dígitos
    const limitado = apenasNumeros.slice(0, 8);
    
    // Aplica a máscara
    if (limitado.length >= 5) {
      return limitado.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    } else if (limitado.length >= 3) {
      return limitado.replace(/(\d{2})(\d{2})/, '$1/$2/');
    } else {
      return limitado;
    }
  }

  function handleCPFChange(value: string) {
    const cpfFormatado = formatarCPF(value);
    setCpf(cpfFormatado);
  }

  function handleDataChange(value: string) {
    const dataFormatada = formatarData(value);
    setDataNascimento(dataFormatada);
  }

  async function handleLogin() {
  setErro("");
  setCarregando(true);

  try {
    const response = await fetch("http://localhost:8080/pacientes/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpf: cpf.replace(/\D/g, ""), // remove pontos e traços
        dataNascimento: dataNascimento.split("/").reverse().join("-"), // de DD/MM/AAAA para AAAA-MM-DD
      }),
    });

    if (response.ok) {
      const paciente = await response.json();
      localStorage.setItem("pacienteLogadoId", paciente.idPaciente.toString());
      localStorage.setItem("pacienteLogadoNome", paciente.nome);
      navigate("/codigodeverificacao");
    } else {
      setErro("CPF ou data de nascimento incorretos. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro ao conectar à API:", error);
    setErro("Erro de conexão com o servidor.");
  } finally {
    setCarregando(false);
  }
}

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-header">
          Acessar conta
        </h2>
        <label className="login-label">
          Coloque seu CPF e data de nascimento
        </label>
        <input
          placeholder="CPF"
          className="login-input"
          value={cpf}
          onChange={(e) => handleCPFChange(e.target.value)}
          maxLength={14}
        />
        <input
          placeholder="Data de nascimento (DD/MM/AAAA)"
          className="login-input-date"
          value={dataNascimento}
          onChange={(e) => handleDataChange(e.target.value)}
          maxLength={10}
        />
        <div className="login-hint">Digite apenas números</div>
        
        {erro && (
          <div className="login-error">
            {erro}
          </div>
        )}
        
        <button
          type="button"
          onClick={handleLogin}
          disabled={carregando}
          className={`login-btn-primary ${
            carregando 
              ? 'login-btn-loading' 
              : 'login-btn-active'
          }`}
        >
          {carregando ? 'Entrando...' : 'Entrar'}
        </button>
        <div className="login-divider">
          <hr className="login-divider-line" />
          <span className="login-divider-text">ou</span>
          <hr className="login-divider-line" />
        </div>
        <button
          type="button"
          className="login-btn-secondary"
          onClick={() => navigate("/logincomsenha")}
        >
          Entrar com senha
        </button>
        <div className="login-signup-container">
          <button
            type="button"
            className="login-signup-btn"
            onClick={() => navigate("/cadastro")}
          >
            Fazer cadastro
          </button>
        </div>
      </div>
    </div>
  );
}