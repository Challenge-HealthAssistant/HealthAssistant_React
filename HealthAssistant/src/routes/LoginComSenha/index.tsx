import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { listaPacientes } from "../../components/data/Pacientes";

export default function LoginSenha() {

  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    setErro("");
    setCarregando(true);
    
    try {
      // Buscar paciente diretamente (sem delay)
      const pacienteEncontrado = listaPacientes.find((paciente: tipoPaciente) => 
        paciente.cpf === cpf && paciente.senha === senha
      );
      
      if (pacienteEncontrado) {
        localStorage.setItem('pacienteLogadoId', pacienteEncontrado.id.toString());
        localStorage.setItem('pacienteLogadoNome', pacienteEncontrado.nome);
        navigate("/");
      } else {
        setErro("CPF ou senha incorretos. Tente novamente.");
      }
    } catch (error) {
      setErro("Erro interno. Tente novamente.");
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
          Coloque seu CPF e senha
        </label>
        <input
          placeholder="CPF"
          className="login-input"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          placeholder="Data de nascimento"
          className="login-input-date"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <div className="login-hint">Digite sua senha</div>
        
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

        <button type="button" className="login-btn-secondary" onClick={() => navigate("/login")}>Entrar com Data de Nascimento</button>

        <div className="login-signup-container">
          <button type="button" className="login-signup-btn" onClick={() => navigate("/cadastro")}>Fazer cadastro</button>
        </div>
        
      </div>
    </div>
  );
}