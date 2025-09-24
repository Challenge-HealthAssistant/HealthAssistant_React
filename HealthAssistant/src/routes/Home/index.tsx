import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import Links from "../../components/Links/Links";
import teleconsultaIcon from "../../img/teleconsulta.png";
import agendarIcon from "../../img/agendar.png";
import agendaIcon from "../../img/agenda.png";
import resultadosIcon from "../../img/resultados.png";

export default function Home() {

    const navigate = useNavigate();
  
  return (
    <div className="home-bg">
      <Links />

        <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 className="agendar-title">Tela Inicial</h2>
      </div>

      <div className="home-content">
        <Link className="home-link" to="/teleconsulta" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
          <span style={{display: 'flex', alignItems: 'center', marginLeft: '8px', marginRight: '12px'}}>
            <img src={teleconsultaIcon} alt="Teleconsulta" className="home-icon" />
          </span>
          <span style={{flex: 1, textAlign: 'center'}}>Teleconsulta</span>
        </Link>

        <Link className="home-link" to="/agendar" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
          <span style={{display: 'flex', alignItems: 'center', marginLeft: '8px', marginRight: '12px'}}>
            <img src={agendarIcon} alt="Agendar" className="home-icon" />
          </span>
          <span style={{flex: 1, textAlign: 'center'}}>Agendar</span>
        </Link>

        <Link className="home-link" to="/agendamentos" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
          <span style={{display: 'flex', alignItems: 'center', marginLeft: '8px', marginRight: '12px'}}>
            <img src={agendaIcon} alt="Agendamentos" className="home-icon" />
          </span>
          <span style={{flex: 1, textAlign: 'center'}}>Agendamentos</span>
        </Link>

        <Link className="home-link" to="/resultados" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
          <span style={{display: 'flex', alignItems: 'center', marginLeft: '8px', marginRight: '12px'}}>
            <img src={resultadosIcon} alt="Resultados" className="home-icon" />
          </span>
          <span style={{flex: 1, textAlign: 'center'}}>Resultados</span>
        </Link>
      </div>      
    </div>
  );
}