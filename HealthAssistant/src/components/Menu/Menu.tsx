import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/agendamentos">Agendamentos</Link>|
            <Link to="/cadastro">Cadastro</Link>|
            <Link to="/faq">FAQ</Link>|
            <Link to="/login">Login</Link>|
            <Link to="/quemsomos">Quem Somos</Link>|
            <Link to="/agendar">Agendar</Link>|
            <Link to="/suporte">Suporte</Link>|
            <Link to="/teleconsulta">Teleconsulta</Link>|
            <Link to="/perfil">Perfil</Link>|
            <Link to="/resultados">Resultados</Link>
        </nav>
    );
}    