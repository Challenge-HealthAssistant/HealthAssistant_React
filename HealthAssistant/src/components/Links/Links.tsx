import { Link } from "react-router-dom";
import home from "../../img/home.png";
import quemSomos from "../../img/quem_somos.png";
import faq from "../../img/faq.png";
import suporte from "../../img/suporte.png";

export default function Links() {
    return (
        <nav className="bottom-links">
        <Link className="bottom-links-item" to='/home'>
            <img src={home} alt="Início" className="bottom-links-icon" />
            Início
        </Link>
        <Link className="bottom-links-item" to='/quemsomos'>
            <img src={quemSomos} alt="Quem somos" className="bottom-links-icon" />
            Quem somos
        </Link>
        <Link className="bottom-links-item" to='/faq'>
            <img src={faq} alt="FAQ" className="bottom-links-icon" />
            FAQ
        </Link>
        <Link className="bottom-links-item" to='/suporte'>
            <img src={suporte} alt="Suporte" className="bottom-links-icon" />
            Suporte
        </Link>
        </nav>
    );
};
