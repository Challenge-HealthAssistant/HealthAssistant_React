import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/agendamentos">Agendamentos</Link>|
            <Link to="/cadastro">Cadastro</Link>|
            <Link to="/faq">FAQ</Link>|
            <Link to="/login">Login</Link>|
            <Link to="/quemsomos">Quem Somos</Link>
        </nav>
    );
}    