import Links from "../../components/Links/Links";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import chatbot from "../../img/chatbot.png";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";

export default function Faq() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="faq-bg">
      <div className="faq-banner">
        <button
          onClick={() => navigate("/home")}
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
        <h2 className="faq-title">FAQ</h2>
      </div>
      <div className="faq-content">

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Como remarcar consulta?
          </div>
          <div className="faq-card-text">
            Acesse sua área e selecione a nova data.
          </div>
        </div>

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Quais horários de atendimento?
          </div>
          <div className="faq-card-text">
            Das 8h às 18h de segunda a sexta.
          </div>
        </div>

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Posso mudar meu e-mail?
          </div>
          <div className="faq-card-text">
            Sim, acesse o perfil e atualize.
          </div>
        </div>


        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Há atendimento emergencial?
          </div>
          <div className="faq-card-text">
            Sim, via chat 24h.
          </div>
        </div>

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Como atualizar telefone?
          </div>
          <div className="faq-card-text">
            Vá em perfil e altere o número.
          </div>
        </div>

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            O suporte é gratuito?
          </div>
          <div className="faq-card-text">
            Sim, para todos os usuários.
          </div>
        </div>

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Como excluir conta?
          </div>
          <div className="faq-card-text">
            Solicite via suporte
          </div>
        </div>

        <div className="faq-help-card banner-limit">
          <div className="faq-help-title">Precisa de ajuda?</div>
          <button className="faq-btn">
            Pergunte ao assistente
            <img src={chatbot} alt="logo do chatbot" className="faq-chatbot" />
          </button>
        </div>

      </div>
      <Links />
    </div>
  );
}