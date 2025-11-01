import Links from "../../components/Links/Links";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { getPacienteById, getCuidadorByPacienteId } from "../../data/api"; 

export default function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [perfil, setPerfil] = useState<tipoPaciente | null>(null);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cuidadorDetalhes, setCuidadorDetalhes] = useState<{ nome?: string; telefone?: string } | null>(null);

  // Converter data de ISO (YYYY-MM-DD) para formato brasileiro (DD/MM/YYYY)
  const converterDataISOParaBR = (dataISO: string) => {
    if (!dataISO) return "";
    
    // Se já está no formato brasileiro, retorna como está
    if (dataISO.includes('/')) return dataISO;
    
    // Converter de YYYY-MM-DD para DD/MM/YYYY
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  };

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

        // Buscar cuidador associado ao paciente pelo ID do paciente
        (async () => {
          try {
            const cuidadorDoPaciente = await getCuidadorByPacienteId(data.idPaciente);
            
            if (cuidadorDoPaciente) {
              const detalhes = {
                nome: cuidadorDoPaciente.nome || "",
                telefone: cuidadorDoPaciente.telefone || "",
              };
              setCuidadorDetalhes(detalhes);
            } else if (data.cuidador) {
              // Fallback: usar dados do paciente (se existirem)
              setCuidadorDetalhes({ 
                nome: data.cuidador, 
                telefone: data.telefoneCuidador || "" 
              });
            } else {
              setCuidadorDetalhes(null);
            }
          } catch (err) {
            // Em caso de erro, usar dados do paciente como fallback
            if (data.cuidador) {
              setCuidadorDetalhes({ 
                nome: data.cuidador, 
                telefone: data.telefoneCuidador || "" 
              });
            } else {
              setCuidadorDetalhes(null);
            }
          }
        })();
      })
      .catch(() => {
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
    if (perfil) {
      navigate(`/editar-perfil/${perfil.idPaciente}`);
    } else {
      navigate("/editar-perfil");
    }
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
              <div className="perfil-value">{converterDataISOParaBR(perfil.dataNascimento)}</div>
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
              <label className="perfil-label">E-mail</label>
              <div className="perfil-value">{perfil.email}</div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Cuidador</label>
              <div className="perfil-value">
                {cuidadorDetalhes && cuidadorDetalhes.nome
                  ? cuidadorDetalhes.nome
                  : (perfil.cuidador || <span style={{ color: '#999', fontStyle: 'italic' }}>Não informado</span>)}
              </div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Telefone do Cuidador</label>
              <div className="perfil-value">
                {cuidadorDetalhes && cuidadorDetalhes.telefone
                  ? cuidadorDetalhes.telefone
                  : (perfil.telefoneCuidador || <span style={{ color: '#999', fontStyle: 'italic' }}>Não informado</span>)}
              </div>
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