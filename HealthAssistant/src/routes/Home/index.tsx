import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import Links from "../../components/Links/Links";
import teleconsultaIcon from "../../img/teleconsulta.png";
import agendarIcon from "../../img/agendar.png";
import agendaIcon from "../../img/agenda.png";
import resultadosIcon from "../../img/resultados.png";

export default function Home() {

  
  return (
    <div className="home-bg">
      <Links />
      <div className="agendar-banner">
        <h2 className="agendar-title">Tela Inicial</h2>
      </div>

      <div className="home-content">
        <Link className="home-link" to="/teleconsulta">
          <span className="home-icon-container">
            <img src={teleconsultaIcon} alt="Teleconsulta" className="home-icon" />
          </span>
          <span className="home-text">Teleconsulta</span>
        </Link>

        <Link className="home-link" to="/agendar" >
          <span className="home-icon-container">
            <img src={agendarIcon} alt="Agendar" className="home-icon" />
          </span>
          <span className="home-text">Agendar</span>
        </Link>

        <Link className="home-link" to="/agendamentos" >
          <span className="home-icon-container">
            <img src={agendaIcon} alt="Agendamentos" className="home-icon" />
          </span>
          <span className="home-text">Agendamentos</span>
        </Link>

        <Link className="home-link" to="/resultados">
          <span className="home-icon-container">
            <img src={resultadosIcon} alt="Resultados" className="home-icon" />
          </span>
          <span className="home-text">Resultados</span>
        </Link>
      </div>      
    </div>
  );
}