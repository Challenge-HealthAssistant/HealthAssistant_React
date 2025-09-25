import { useNavigate } from "react-router";
import Links from "../../components/Links/Links";

export default function Agendamentos() {

  const navigate = useNavigate();
    
  return (
    <div className="agendamentos">
      <Links />
      <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 className="agendar-title">Agendamentos</h2>
      </div>
      <div className="agendamentos-content">
        <div className="agendamentos-card">
          <div className="agendamentos-card-title">Próximas consultas</div>
          <div className="agendamentos-card-text">
            Data: 14/05/2025<br />
            Horário: 14:00<br />
            Teleconsulta<br />
            Unidade: IMREA Lirmaliz
          </div>
        </div>
        <div className="agendamentos-recent">
          <div className="agendamentos-recent-title">Últimos acessos</div>
          você não possui acessos recentes
        </div>
      </div>
    </div>
  );
}
       