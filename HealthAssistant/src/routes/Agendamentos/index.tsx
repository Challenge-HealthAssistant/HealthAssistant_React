import { useNavigate } from "react-router";
import Links from "../../components/Links/Links";
import { useState, useEffect } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoAgendamento } from "../../types/tipoAgendamento";
import { listaAgendamentos } from "../../data/listaAgendamento";

export default function Agendamentos() {
  const navigate = useNavigate();
  const [proximosAgendamentos, setProximosAgendamentos] = useState<tipoAgendamento[]>([]);
  const [historico, setHistorico] = useState<tipoAgendamento[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const getAgendamentosPorPaciente = (pacienteId: number) => {
    return listaAgendamentos.filter(
      agendamento => agendamento.pacienteId === pacienteId
    );
  };

  const getProximosAgendamentos = (pacienteId: number) => {
    const hoje = new Date();
    return getAgendamentosPorPaciente(pacienteId)
      .filter(agendamento => {
        const dataAgendamento = new Date(agendamento.data.split('/').reverse().join('-'));
        return dataAgendamento >= hoje && agendamento.status === 'Agendado';
      })
      .sort((a, b) => {
        const dataA = new Date(a.data.split('/').reverse().join('-'));
        const dataB = new Date(b.data.split('/').reverse().join('-'));
        return dataA.getTime() - dataB.getTime();
      });
  };

  const getHistoricoAgendamentos = (pacienteId: number) => {
    const hoje = new Date();
    return getAgendamentosPorPaciente(pacienteId)
      .filter(agendamento => {
        const dataAgendamento = new Date(agendamento.data.split('/').reverse().join('-'));
        return dataAgendamento < hoje || agendamento.status === 'Concluído';
      });
  };

  useEffect(() => {
    // Pegar ID do paciente logado
    const pacienteId = localStorage.getItem('pacienteLogadoId');
    
    if (pacienteId) {
      const proximos = getProximosAgendamentos(parseInt(pacienteId));
      const hist = getHistoricoAgendamentos(parseInt(pacienteId));
      
      setProximosAgendamentos(proximos);
      setHistorico(hist);
    }
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
        {/* Próximos Agendamentos */}
        <div className="agendamentos-card">
          <div className="agendamentos-card-title">Próximas consultas</div>
          {proximosAgendamentos.length > 0 ? (
            proximosAgendamentos.map(agendamento => (
              <div key={agendamento.id} className="agendamentos-card-text">
                Data: {agendamento.data}<br />
                Horário: {agendamento.horario}<br />
                {agendamento.tipo}<br />
                Unidade: {agendamento.unidade}<br />
                {agendamento.especialidade && `Especialidade: ${agendamento.especialidade}`}<br />
                {agendamento.medico && `Médico: ${agendamento.medico}`}
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
          <div className="agendamentos-recent-title">Últimos acessos</div>
          {historico.length > 0 ? (
            <div className="agendamentos-card-text">
              {historico.slice(0, 3).map(agendamento => (
                <div key={agendamento.id} className="agendamentos-card-text">
                  {agendamento.data} - {agendamento.especialidade}
                </div>
              ))}
            </div>
          ) : (
            "Você não possui acessos recentes"
          )}
        </div>
      </div>
      <Links />
    </div>
  );
}


