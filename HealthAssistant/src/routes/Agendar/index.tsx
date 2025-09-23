import Links from "../../components/Links/Links";

export default function Agendar() {
  return (
    <div className="agendar-bg">
      <h2 className="agendar-banner">
        agendar
      </h2>
      <div className="agendar-content">
        <div className="agendar-subtitle">
          Consulte a cobertura convênio ou agende particular
        </div>
        <div className="agendar-cards-container">
          {/* Card 1 */}
          <div className="agendar-card">
            <div className="agendar-card-title">Psicologia</div>
            <div className="agendar-card-subtitle">
              outros nomes: Psicoterapia, Psicanálise, Psciociência
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
              outros nomes: Hemograma, Hemograma completo, Hemograma Sangue
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