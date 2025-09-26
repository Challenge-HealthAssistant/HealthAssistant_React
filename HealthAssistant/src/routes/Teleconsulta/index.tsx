import Links from "../../components/Links/Links";
import { useNavigate } from "react-router";
import { useState } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";

export default function Teleconsulta() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  function handleEntrarTeleconsulta() {
    alert("Conectando à Teleconsulta...\nAguarde, você será redirecionado.");
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
            className="w-6 h-6 inline-block transition-all duration-200" 
          />
        </button>
        <h2 className="agendar-title">Teleconsulta</h2>
      </div>

      {/* Conteúdo */}
      <div className="agendar-content">
        <h3 className="agendar-subtitle">Próximas Consultas</h3>
        <div className="agendar-cards-container">
          {/* Card da próxima consulta */}
          <div className="agendar-card">
            <h4 className="agendar-card-title">Agendamento: 126249284</h4>
            <p className="agendar-card-subtitle">Fisioterapia</p>
            <div className="agendar-card-location">
              <span className="agendar-card-location-text">Data: 14/05/2025 | Horário: 14:00</span>
            </div>
            <div className="agendar-card-location">
              <span className="agendar-card-location-text">Unidade: IMREA UMARIZAL</span>
            </div>
          </div>

          {/* Card com detalhes */}
          <div className="agendar-card">
            <h4 className="agendar-card-title">Detalhes da Teleconsulta</h4>
            <p className="agendar-card-subtitle">Agendamento: 126249284</p>
            <p className="agendar-card-subtitle">Data: 05/03/2025 | 14:00</p>
            <p className="agendar-card-subtitle">Instituto: IMREA UMARIZAL</p>
          </div>
        </div>

        {/* Botão para entrar na teleconsulta */}
        <div className="agendar-buttons mt-6">
          <button 
            className="agendar-btn"
            onClick={handleEntrarTeleconsulta}
          >
            Entrar na Teleconsulta
          </button>
        </div>
      </div>
      <Links />
    </div>
  );
}
