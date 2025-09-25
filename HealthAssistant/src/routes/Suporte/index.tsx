import Links from "../../components/Links/Links";
import { useNavigate } from "react-router";
import chatbotIcon from "../../img/chatbot.png";

export default function Suporte() {
  const navigate = useNavigate();

  function handlePerguntasFrequentes() {
    navigate("/faq");
  }

  function handleLigarSuporte() {
    // Simular ligação para suporte
    alert("Conectando com suporte...\nAguarde, você será atendido em breve.");
  }

  function handleChatAssistente() {
    // Simular chat com assistente
    alert("Iniciando chat com assistente virtual...\nOlá! Como posso ajudá-lo hoje?");
  }

  return (
    <div className="suporte-bg">
      <Links />
      
      <div className="suporte-banner">
        <button onClick={() => navigate('/home')} 
        className="suporte-back-btn" aria-label="Voltar">
          ←
        </button>
        <h2 className="suporte-title">Suporte</h2>
      </div>

      <div className="suporte-content">
        <button className="suporte-button" onClick={handlePerguntasFrequentes}>
          Perguntas frequentes
        </button>

        <button className="suporte-button" onClick={handleLigarSuporte}>
          Ligar para o suporte
        </button>

        <button className="suporte-chat-button" onClick={handleChatAssistente}>

          <div className="suporte-chat-icon-bg">
            <img src={chatbotIcon} alt="Chatbot" className="suporte-chat-icon" />
          </div>
          
          <span>Fale com o assistente</span>
        </button>
        
      </div>
    </div>
  );
}