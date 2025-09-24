import Links from "../../components/Links/Links";
import { useNavigate } from "react-router";


export default function Suporte() {

      const navigate = useNavigate();

    return (
        <nav>
            <Links />       

            <div className="agendar-banner">
                <button 
                onClick={() => navigate(-1)} 
                className="agendar-back-btn" 
                aria-label="Voltar"
                >
                ←
                </button>
                <h2 className="agendar-title">Resultados</h2>
             </div>     

        </nav>
    );
}