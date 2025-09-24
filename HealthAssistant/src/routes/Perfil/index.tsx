import Links from "../../components/Links/Links";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { listaPacientes } from "../../data/Pacientes";

export default function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams(); // useParams para pegar ID da URL - Exemplo: /perfil/2
  
  const [perfil, setPerfil] = useState<tipoPaciente | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    // Usar ID da URL se disponível, senão usar localStorage
    let pacienteLogadoId: number;
    
    if (id) {
      // Se há ID na URL, usar ele
      pacienteLogadoId = Number(id);
    } else {
      // Senão, pegar do localStorage (comportamento atual)
      const pacienteLogadoIdStr = localStorage.getItem('pacienteLogadoId');
      
      if (!pacienteLogadoIdStr) {
        // Se não há paciente logado, redirecionar para login
        navigate('/login');
        return;
      }
      
      pacienteLogadoId = Number(pacienteLogadoIdStr);
    }
    
    // Simular delay de carregamento 
    setTimeout(() => {
      const pacienteLogado = listaPacientes.find((paciente: tipoPaciente) => paciente.id === pacienteLogadoId);
      
      if (pacienteLogado) {
        setPerfil(pacienteLogado);
      } else {
        // Se paciente não encontrado, limpar dados e ir para login
        localStorage.removeItem('pacienteLogadoId');
        localStorage.removeItem('pacienteLogadoNome');
        navigate('/login');
      }
      setLoading(false);
    }, 600);
  }, [navigate, id]); // Adicionar id como dependência

  function handleSair() {
    // Limpar dados do usuário logado
    localStorage.removeItem('pacienteLogadoId');
    localStorage.removeItem('pacienteLogadoNome');
    
    // Redirecionar para login
    navigate("/login");
  }

  function handleEditar() {
    alert("Funcionalidade de edição será implementada");
  }

  return (
    <div className="perfil-bg">
        <Links />
      <div className="perfil-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="perfil-back-btn" 
          aria-label="Voltar"
        >
          ←
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
              <label className="perfil-label">Endereço</label>
              <div className="perfil-value">{perfil.endereco}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Bairro</label>
              <div className="perfil-value">{perfil.bairro}</div>
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
    </div>
  );
}