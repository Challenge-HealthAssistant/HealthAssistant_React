import { useNavigate } from "react-router";
import Links from "../../components/Links/Links";
import { useState, useEffect } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoConsulta } from "../../types/tipoConsulta";
import { getConsultasByPacienteId } from "../../data/api";

export default function Agendamentos() {
  const navigate = useNavigate();
  const [proximasConsultas, setProximasConsultas] = useState<tipoConsulta[]>([]);
  const [historicoConsultas, setHistoricoConsultas] = useState<tipoConsulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);

  // Buscar consultas do paciente
  const carregarConsultas = async () => {
    setLoading(true);
    setError("");
    
    try {
      const pacienteId = localStorage.getItem('pacienteLogadoId');
      if (!pacienteId) {
        setError("ID do paciente não encontrado. Faça login novamente.");
        return;
      }

      const consultas = await getConsultasByPacienteId(parseInt(pacienteId));
      
      // Separar consultas futuras e passadas
      const agora = new Date();
      
      const futuras = consultas.filter((consulta: tipoConsulta) => {
        const dataConsulta = new Date(consulta.dataHora);
        return dataConsulta >= agora && (consulta.status === 'Agendada' || consulta.status === 'Confirmada');
      }).sort((a: tipoConsulta, b: tipoConsulta) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime());
      
      const passadas = consultas.filter((consulta: tipoConsulta) => {
        const dataConsulta = new Date(consulta.dataHora);
        return dataConsulta < agora || consulta.status === 'Realizada' || consulta.status === 'Cancelada';
      }).sort((a: tipoConsulta, b: tipoConsulta) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime());
      
      setProximasConsultas(futuras);
      setHistoricoConsultas(passadas.slice(0, 10)); // Limitar histórico a 10 itens
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar consultas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarConsultas();
  }, []);

  return (
    <div className="agendamentos">
      <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
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
        <h2 className="agendar-title">Agendamentos</h2>
      </div>
      
      <div className="agendamentos-content">
        {loading && (
          <div className="perfil-loading">
            Carregando consultas...
          </div>
        )}

        {error && (
          <div className="perfil-error-message">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Próximas Consultas */}
            <div className="agendamentos-card">
              <div className="agendamentos-card-title">Próximas consultas</div>
              {proximasConsultas.length > 0 ? (
                proximasConsultas.map(consulta => (
                  <div key={consulta.idConsulta} className="agendamentos-card-text">
                    Data: {new Date(consulta.dataHora).toLocaleDateString('pt-BR')}<br />
                    Horário: {new Date(consulta.dataHora).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}<br />
                    Tipo: {consulta.tipo}<br />
                    Status: {consulta.status}
                  </div>
                ))
              ) : (
                <div className="agendamentos-card-text">
                  Você não possui consultas agendadas
                </div>
              )}
            </div>

            {/* Histórico */}
            <div className="agendamentos-recent">
              <div className="agendamentos-recent-title">Histórico de consultas</div>
              {historicoConsultas.length > 0 ? (
                <div className="agendamentos-card-text">
                  {historicoConsultas.slice(0, 3).map(consulta => (
                    <div key={consulta.idConsulta} className="agendamentos-card-text">
                      {new Date(consulta.dataHora).toLocaleDateString('pt-BR')} - {consulta.tipo} ({consulta.status})
                    </div>
                  ))}
                </div>
              ) : (
                "Você não possui histórico de consultas"
              )}
            </div>
          </>
        )}
      </div>
      <Links />
    </div>
  );
}


