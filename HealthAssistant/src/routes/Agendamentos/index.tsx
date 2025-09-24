import { useNavigate } from "react-router";
import Links from "../../components/Links/Links";

export default function Agendamentos() {

  const navigate = useNavigate();
    
  return (
    <div className="agendamentos">

      <Links />
      <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 className="agendar-title">Agendamentos</h2>
      </div>
      <div className="flex-1 p-6">
        <div className="bg-[#D9D9D9] rounded-lg p-4 mb-6">
          <div className="text-[#157AB9] font-semibold mb-2">Próximas consultas</div>
          <div className="text-[15px] text-[#222]">
            Data: 14/05/2025<br />
            Horário: 14:00<br />
            Teleconsulta<br />
            Unidade: IMREA Lirmaliz
          </div>
        </div>
        <div className="text-white text-center text-[15px]">
          <div className="font-semibold mb-2">Últimos acessos</div>
          você não possui acessos recentes
        </div>
      </div>
    </div>
  );
}
       