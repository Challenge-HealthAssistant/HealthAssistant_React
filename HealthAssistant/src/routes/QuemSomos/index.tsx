
import Links from "../../components/Links/Links";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import pietroImg from '../../img/pietro.jpg';
import leonardoImg from '../../img/leonardo.png';
import arthurImg from '../../img/arthur.jpg';
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";

const team = [
  {
    name: "Pietro Paranhos Wilhelm",
    rm: "561378",
    group: "1TDSPH",
    github: "https://github.com/pietrowilhelm",
    linkedin: "https://www.linkedin.com/in/pietrowilhelm/",
    photo: pietroImg
  },
  {
    name: "Leonardo Rodrigues",
    rm: "552417",
    group: "1TDSPH",
    github: "https://github.com/Leorodsm",
    linkedin: "https://www.linkedin.com/in/leonardo-rodrigues-0913b5219/",
    photo: leonardoImg
  },
  {
    name: "Arthur Silvera",
    rm: "562310",
    group: "1TDSPH",
    github: "https://github.com/arthurscamara",
    linkedin: "https://www.linkedin.com/in/arthur-câmara-766697386/",
    photo: arthurImg
  },
];

export default function QuemSomos() {

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (    
    <div className="quemsomos-bg">
      
      <div className="quemsomos-banner">
        
        <button onClick={() => navigate('/home')}
        className="quemsomos-back-btn" aria-label="Voltar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <img 
            src={isHovered ? voltarVerde : voltar} 
            alt="Voltar" 
            className="back-btn-icon" 
          />
        </button>

        <h2 className="quemsomos-title">Quem Somos</h2>
      </div>

      <div className="quemsomos-content">
        <div className="quemsomos-cards-container">
          {team.map((member) => (
            <div key={member.rm} className="quemsomos-card">
              <img src={member.photo} alt={member.name} className="quemsomos-photo" />
              <div className="quemsomos-info">
                <strong className="quemsomos-name">{member.name}</strong>
                <div>RM: {member.rm}</div>
                <div>{member.group}</div>

                <div className="quemsomos-links">
                  <a href={member.github} rel="noopener noreferrer" target="_blank" className="quemsomos-link">Github</a>
                  <a href={member.linkedin} rel="noopener noreferrer" target="_blank" className="quemsomos-link">LinkedIn</a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <Links />
    </div>
  );
}