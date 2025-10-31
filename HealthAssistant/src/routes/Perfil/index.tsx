import Links from "../../components/Links/Links";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { getPacienteById } from "../../data/api"; // 👈 novo import

export default function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [perfil, setPerfil] = useState<tipoPaciente | null>(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let pacienteId: number;

    if (id) {
      pacienteId = Number(id);
    } else {
      const pacienteIdStr = localStorage.getItem("pacienteLogadoId");
      if (!pacienteIdStr) {
        navigate("/login");
        return;
      }
      pacienteId = Number(pacienteIdStr);
    }

    // Chama a API real do Quarkus
    getPacienteById(pacienteId)
      .then((data) => {
        setPerfil(data);
      })
      .catch((error) => {
        console.error("Erro ao carregar paciente:", error);
        localStorage.removeItem("pacienteLogadoId");
        localStorage.removeItem("pacienteLogadoNome");
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate, id]);

  function handleSair() {
    localStorage.removeItem("pacienteLogadoId");
    localStorage.removeItem("pacienteLogadoNome");
    navigate("/login");
  }

  function handleEditar() {
    alert("Funcionalidade de edição será implementada");
  }

  // Resto do JSX permanece igual

  return (
    <div className="perfil-bg">
      <div className="perfil-banner">
        <button 
          onClick={() => navigate('/home')} 
          className="perfil-back-btn" 
          aria-label="Voltar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={isHovered ? voltarVerde : voltar} 
            alt="Voltar" 
            className="back-btn-icon" 
          />
        </button>
        <h2 className="perfil-title">Perfil</h2>
      </div>
      
      <div className="perfil-content">
        {loading ? (
          <div className="perfil-card">
            <div className="perfil-loading">Carregando perfil...</div>
          </div>
        ) : !perfil ? (
          <div className="perfil-card">
            <div className="perfil-error">Erro ao carregar perfil do usuário</div>
          </div>
        ) : (
          <div className="perfil-card">
            <div className="perfil-field">
              <label className="perfil-label">Nome Completo</label>
              <div className="perfil-value">{perfil.nome}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Data de Nascimento</label>
              <div className="perfil-value">{perfil.dataNascimento}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">CPF</label>
              <div className="perfil-value">{perfil.cpf}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Telefone</label>
              <div className="perfil-value">{perfil.telefone}</div>
            </div>

            <div className="perfil-field">
                <label className="perfil-label">Senha</label>
                <div className="perfil-value">{perfil.senha}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">E-mail</label>
              <div className="perfil-value">{perfil.email}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">cuidador</label>
              <div className="perfil-value">{perfil.cuidador}</div>
            </div>

            
            <div className="perfil-buttons">
              <button 
                className="perfil-btn-editar"
                onClick={handleEditar}
              >
                Editar Perfil
              </button>
              
              <button 
                className="perfil-btn-sair"
                onClick={handleSair}
              >
                Sair
              </button>
            </div>
          </div>
        )}
      </div>
      <Links />
    </div>
  );
}