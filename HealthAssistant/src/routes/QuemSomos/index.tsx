
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
    linkedin: "https://www.linkedin.com/in/arthur-silvera/",
    photo: arthurImg
  },
];


export default function QuemSomos() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="flex items-center bg-[#1976a5] text-white m-0 py-3 px-4">
        <button
          onClick={() => navigate(-1)}
          className="mr-2 text-2xl hover:text-[#1de9b6]"
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 className="text-xl font-semibold flex-1 text-center">Quem Somos</h2>
      </div>
      <div className="flex-1 p-4">
        {team.map((member) => (
          <div
            key={member.rm}
            className="flex items-center bg-[#D9D9D9] text-[#222] mb-4 p-3 rounded-lg border-2 border-[#1976a5]"
          >
            <img src={member.photo} alt={member.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white" />
            <div>
              <strong className="block text-lg">{member.name}</strong>
              <div>RM: {member.rm}</div>
              <div>{member.group}</div>
              <div className="mt-2 flex gap-2">
                <a href={member.github} rel="noopener noreferrer" target="_blank" className="underline hover:text-[#46a2da]">Github</a>
                <span>|</span>
                <a href={member.linkedin} rel="noopener noreferrer" target="_blank" className="underline hover:text-[#46a2da]">LinkedIn</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Links />
    </div>
  );
}