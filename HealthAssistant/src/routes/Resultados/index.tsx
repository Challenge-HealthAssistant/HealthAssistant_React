import { useNavigate } from "react-router";
import { useState } from "react";
import Links from "../../components/Links/Links";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";

const resultados = [
  {
    ano: 2024,
    exames: [
      {
        data: "07 Abr.",
        unidade: "Cerqueira César",
        ficha: "6600935883",
        marca: "Instituto Central (IHC)",
      },
      {
        data: "19 Mar.",
        unidade: "Cerqueira César",
        ficha: "3588998395",
        marca: "Instituto Central (IHC)",
      },
      {
        data: "30 Jan.",
        unidade: "Cerqueira César",
        ficha: "6094554356",
        marca: "Instituto Psiquiatria (IPq)",
      },
    ],
  },
  {
    ano: 2023,
    exames: [
      {
        data: "25 set.",
        unidade: "Cerqueira César",
        ficha: "2647384959",
        marca: "Instituto Central (IHC)",
      },
      {
        data: "17 mai.",
        unidade: "Vila Mariana",
        ficha: "1992004893",
        marca: "Instituto de Medicina Física e Reabilitação (IMREA)",
      },
      {
        data: "09 jan.",
        unidade: "Cerqueira César",
        ficha: "1739403989",
        marca: "Instituto Do Coração (InCor)",
      },
    ],
  },
];

export default function Resultados() {

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div className="resultados">
      
      
      <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
          aria-label="Voltar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={isHovered ? voltarVerde : voltar} 
            alt="Voltar" 
            className="back-btn-icon" 
          />
        </button>
        <h2 className="agendar-title">Resultados</h2>
      </div>
      
      <div className="resultados-content">
        {resultados.map((grupo) => (
          <div key={grupo.ano} className="resultados-year-group">
            <div className="resultados-year-title">{grupo.ano}</div>
            {grupo.exames.map((exame) => (
              <div
                key={exame.ficha}
                className="resultados-exam-card"
              >
                <div className="resultados-exam-header">
                  <span className="resultados-exam-date">{exame.data}</span>
                  <span className="resultados-exam-unit">Unidade: {exame.unidade}</span>
                </div>
                <div className="resultados-exam-info">Ficha: {exame.ficha}</div>
                <div className="resultados-exam-info">Marca: {exame.marca}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Links />
    </div>
  );
}