import Links from "../../components/Links/Links";
import { useNavigate } from "react-router-dom";
import chatbot from "../../img/chatbot.png";

export default function Faq() {
  const navigate = useNavigate();
  return (
    <div className="faq-bg">
      <Links />
      <div className="faq-banner">
        <button
          onClick={() => navigate(-1)}
          className="faq-back-btn mr-2 text-2xl hover:text-[#1de9b6]"
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 className="faq-title">FAQ</h2>
      </div>
      <div className="faq-content">
        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Como eu recebo o lembrete da consulta?
          </div>
          <div className="faq-card-text">
            Você recebe via WhatsApp<br />
            um dia antes e no dia da consulta
          </div>
        </div>

        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            Preciso lembrar da senha?
          </div>
          <div className="faq-card-text">
            Não. você recebe um código de verificação no seu celular para acessar caso você entre via data de nascimento e cpf
          </div>
        </div>
      
        <div className="faq-card banner-limit">
          <div className="faq-card-title">
            O sistema funciona em celular antigo?
          </div>
          <div className="faq-card-text">
            Sim, o sistema é otimizado para funcionar em celulares mais antigos, mas recomendamos o uso de dispositivos mais recentes para uma melhor experiência.
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
    </div>
  );
}