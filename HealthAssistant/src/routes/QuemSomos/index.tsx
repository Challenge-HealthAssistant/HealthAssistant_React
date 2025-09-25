
import Links from "../../components/Links/Links";
import { useNavigate } from "react-router-dom";
import pietroImg from '../../img/pietro.jpg';
import leonardoImg from '../../img/leonardo.png';
import arthurImg from '../../img/arthur.jpg';

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

  return (    
    <div className="quemsomos-bg">
      <Links />
      <div className="quemsomos-banner">
        
        <button onClick={() => navigate('/')}
        className="quemsomos-back-btn" aria-label="Voltar">
          ←
        </button>

        <h2 className="quemsomos-title">Quem Somos</h2>
      </div>

      <div className="quemsomos-content">
        {team.map((member) => (
          <div key={member.rm} className="quemsomos-card">
            <img src={member.photo} alt={member.name} className="quemsomos-photo" />
            <div className="quemsomos-info">
              <strong className="quemsomos-name">{member.name}</strong>
              <div>RM: {member.rm}</div>
              <div>{member.group}</div>

              <div className="quemsomos-links">
                <a href={member.github} rel="noopener noreferrer" target="_blank" className="quemsomos-link">Github</a>
                <span>|</span>
                <a href={member.linkedin} rel="noopener noreferrer" target="_blank" className="quemsomos-link">LinkedIn</a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}