
import { useNavigate } from "react-router-dom";
import Links from "../../components/Links/Links";

export default function Agendar() {

  const navigate = useNavigate();



  return (
    <div className="agendar-bg">
      <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 className="agendar-title">Agendar</h2>
      </div>
      <div className="agendar-content">
        <div className="agendar-subtitle">
          Consulte a cobertura convênio ou agende particular
        </div>
        <div className="agendar-cards-container">
          {/* Card 1 */}
          <div className="agendar-card">
            <div className="agendar-card-title">Psicologia</div>
            <div className="agendar-card-subtitle">
              Outros nomes: Psicoterapia, Psicanálise, Psciociência
            </div>
            <div className="agendar-card-location">
              <span className="agendar-card-location-text">Na unidade</span>
            </div>
            <div className="agendar-buttons">
              <button
                className="agendar-btn"
               
              >
                Ver detalhes
              </button>
              <button
                className="agendar-btn"
                
              >
                Agendar
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="agendar-card">
            <div className="agendar-card-title">Hemograma, sangue total</div>
            <div className="agendar-card-subtitle">
              Outros nomes: Hemograma, Hemograma completo, Hemograma Sangue
            </div>
            <div className="agendar-card-location">
              <span className="agendar-card-location-text">Na unidade</span>
            </div>
            <div className="agendar-buttons">
              <button
                className="agendar-btn"
                
              >
                Ver detalhes
              </button>
              <button
                className="agendar-btn"
                
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </div>
  );
}