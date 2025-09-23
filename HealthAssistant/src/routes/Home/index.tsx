import { Link } from "react-router-dom";
import Links from "../../components/Links/Links";
import teleconsultaIcon from "../../img/teleconsulta.png";
import agendarIcon from "../../img/agendar.png";
import agendaIcon from "../../img/agenda.png";
import resultadosIcon from "../../img/resultados.png";

export default function Home() {
  
  return (
    <div className="home-bg">
      <div className="home-content">
        <Link className="home-link" to="/teleconsulta">
          <img src={teleconsultaIcon} alt="Teleconsulta" className="home-icon" />
          Teleconsulta
        </Link>

        <Link className="home-link" to="/agendar">
          <img src={agendarIcon} alt="Agendar" className="home-icon" />
          Agendar
        </Link>

        <Link className="home-link" to="/agendamentos">
          <img src={agendaIcon} alt="Agendamentos" className="home-icon" />
          Agendamentos
        </Link>

        <Link className="home-link" to="/resultados">
          <img src={resultadosIcon} alt="Resultados" className="home-icon" />
          Resultados
        </Link>
      </div>
      <Links />
    </div>
  );
}