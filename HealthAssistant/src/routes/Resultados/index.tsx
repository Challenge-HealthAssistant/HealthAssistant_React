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
            className="w-6 h-6 inline-block transition-all duration-200" 
          />
        </button>
        <h2 className="agendar-title">Resultados</h2>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {resultados.map((grupo) => (
          <div key={grupo.ano} className="mb-6">
            <div className="text-white font-bold mb-2 text-lg">{grupo.ano}</div>
            {grupo.exames.map((exame) => (
              <div
                key={exame.ficha}
                className="bg-[#ffffff] text-black rounded-lg p-4 mb-3 border-l-4 border-[#1de9b6]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-lg">{exame.data}</span>
                  <span className="text-sm">Unidade: {exame.unidade}</span>
                </div>
                <div className="text-xs">Ficha: {exame.ficha}</div>
                <div className="text-xs">Marca: {exame.marca}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Links />
    </div>
  );
}