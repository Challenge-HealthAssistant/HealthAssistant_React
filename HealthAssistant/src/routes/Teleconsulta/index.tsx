import Links from "../../components/Links/Links";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoConsulta } from "../../types/tipoConsulta";
import { getConsultasByPacienteId, getPacienteById } from "../../data/api";
import { IoMdVideocam as VideoIcon, IoMdTime as ClockIcon, IoMdCalendar as CalendarIcon,  IoMdPerson as PersonIcon, IoMdInformationCircle as InfoIcon, IoMdCheckmarkCircle as StatusIcon } 
from "react-icons/io";
import {  MdAccessTime as TimerIcon,MdSchedule as ScheduleIcon,} 
from "react-icons/md"; import { FaUser as UserIcon} from "react-icons/fa";

export default function Teleconsulta() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [teleconsultas, setTeleconsultas] = useState<tipoConsulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [pacienteNome, setPacienteNome] = useState<string>("");


  // Carregar teleconsultas do paciente
  const carregarTeleconsultas = async () => {
    setLoading(true);
    setError("");
    
    try {
      const pacienteId = localStorage.getItem('pacienteLogadoId');
      if (!pacienteId) {
        setError("ID do paciente não encontrado. Faça login novamente.");
        return;
      }

      // Buscar dados do paciente e consultas em paralelo
      const [consultas, pacienteData] = await Promise.all([
        getConsultasByPacienteId(parseInt(pacienteId)),
        getPacienteById(parseInt(pacienteId))
      ]);

      // Definir nome do paciente
      setPacienteNome(pacienteData.nome || `Paciente ${pacienteId}`);
      
      // Filtrar apenas consultas online futuras e agendadas
      const agora = new Date();
      const teleconsultasOnline = consultas.filter((consulta: tipoConsulta) => {
        const dataConsulta = new Date(consulta.dataHora);
        return consulta.tipo === 'online' && 
               dataConsulta >= agora && 
               consulta.status === 'agendada';
      }).sort((a: tipoConsulta, b: tipoConsulta) => 
        new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime()
      );
      
      setTeleconsultas(teleconsultasOnline);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar teleconsultas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarTeleconsultas();
  }, []);

  // Verificar se pode entrar na teleconsulta (15 min antes até 1h depois)
  const podeEntrarNaTeleconsulta = (dataHora: string): boolean => {
    const agora = new Date();
    const consultaTime = new Date(dataHora);
    const diffMinutos = (consultaTime.getTime() - agora.getTime()) / (1000 * 60);
    
    // Pode entrar de 15 min antes até 60 min depois
    return diffMinutos <= 15 && diffMinutos >= -60;
  };

  // Função para entrar na teleconsulta
  function handleEntrarTeleconsulta(consulta: tipoConsulta) {
    if (!podeEntrarNaTeleconsulta(consulta.dataHora)) {
      alert("A teleconsulta só pode ser acessada 15 minutos antes até 1 hora após o horário agendado.");
      return;
    }
    
    // Entrar diretamente na teleconsulta
    alert("Conectando à Teleconsulta...\nVocê será redirecionado para a plataforma de video chamada.");
    window.open('https://meet.google.com', '_blank');
  }

  return (
    <div className="agendar-bg">

      {/* Banner */}
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
        <h2 className="agendar-title">Teleconsulta</h2>
      </div>

      {/* Conteúdo */}
      <div className="agendar-content">
        {loading && (
          <div className="agendar-loading">
            <p>Carregando teleconsultas...</p>
          </div>
        )}

        {error && (
          <div className="agendar-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <h3 className="agendar-subtitle">Teleconsultas Agendadas</h3>
            
            {teleconsultas.length > 0 ? (
              <div className="agendar-cards-container">
                {teleconsultas.map(consulta => {
                  const dataConsulta = new Date(consulta.dataHora);
                  const podeEntrar = podeEntrarNaTeleconsulta(consulta.dataHora);
                  const agora = new Date();
                  const diffMinutos = Math.round((dataConsulta.getTime() - agora.getTime()) / (1000 * 60));

                  return (
                    <div key={consulta.idConsulta} className="teleconsulta-card">
                      <div className="teleconsulta-header">
                        <VideoIcon className="teleconsulta-icon" />
                        <div className="teleconsulta-title-section">
                          <h4 className="agendar-card-title">Teleconsulta #{consulta.idConsulta}</h4>
                          <span className="consulta-tipo-badge">Consulta Online</span>
                        </div>
                      </div>
                      
                      <div className="teleconsulta-info">
                        <div className="info-section">
                          <h5 className="info-section-title">
                            <ScheduleIcon className="section-icon" />
                            Agendamento
                          </h5>
                          <div className="info-item">
                            <CalendarIcon className="info-icon" />
                            <span>Data: <strong>{dataConsulta.toLocaleDateString('pt-BR', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</strong></span>
                          </div>
                          <div className="info-item">
                            <ClockIcon className="info-icon" />
                            <span>Horário: <strong>{dataConsulta.toLocaleTimeString('pt-BR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}</strong></span>
                          </div>
                          <div className="info-item">
                            <TimerIcon className="info-icon" />
                            <span>Duração estimada: <strong>30-45 minutos</strong></span>
                          </div>
                        </div>

                        <div className="info-section">
                          <h5 className="info-section-title">
                            <UserIcon className="section-icon" />
                            Informações do Paciente
                          </h5>
                          <div className="info-item">
                            <PersonIcon className="info-icon" />
                            <span>Nome: <strong>{pacienteNome}</strong></span>
                          </div>
                          <div className="info-item">
                            <StatusIcon className="info-icon" />
                            <span>Status: <span className="status-badge">{consulta.status.toUpperCase()}</span></span>
                          </div>
                          <div className="info-item">
                            <InfoIcon className="info-icon" />
                            <span>Modalidade: <strong>Teleconsulta</strong></span>
                          </div>
                        </div>

      
            
                      </div>

                      {diffMinutos > 15 && (
                        <div className="teleconsulta-countdown">
                          <p>Teleconsulta disponível em {Math.floor(diffMinutos / 60)}h {diffMinutos % 60}min</p>
                        </div>
                      )}

                      {diffMinutos <= 15 && diffMinutos > 0 && (
                        <div className="teleconsulta-ready">
                          <p>Teleconsulta disponível em {diffMinutos} minutos</p>
                        </div>
                      )}

              
                      {diffMinutos <= 0 && diffMinutos >= -60 && (
                        <div className="teleconsulta-active">
                          <p>Teleconsulta ativa - Entre agora!</p>
                        </div>
                      )}

                      <div className="teleconsulta-actions">
                        <button 
                          className={`teleconsulta-btn ${podeEntrar ? '' : 'disabled'}`}
                          onClick={() => handleEntrarTeleconsulta(consulta)}
                          disabled={!podeEntrar}
                        >
                          {podeEntrar ? 'Entrar na Teleconsulta' : 'Aguardar Horário'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-teleconsultas">
                <VideoIcon className="no-teleconsultas-icon" />
                <h4>Nenhuma teleconsulta agendada</h4>
                <p>Você não possui teleconsultas agendadas no momento.</p>
                <p>Agende uma consulta online na seção "Agendar".</p>
              </div>
            )}
          </>
        )}
      </div>

      <Links />
    </div>
  );
}