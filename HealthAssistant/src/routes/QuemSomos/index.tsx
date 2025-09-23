
import Links from "../../components/Links/Links";
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
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <h2 className="bg-[#1976a5] text-white m-0 py-3 px-4 text-xl font-semibold">Quem Somos</h2>
      <div className="flex-1 p-4">
        {team.map((member) => (
          <div
            key={member.rm}
            className="flex items-center bg-[#2196c9] text-white mb-4 p-3 rounded-lg border-2 border-[#1976a5]"
          >
            <img src={member.photo} alt={member.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white" />
            <div>
              <strong className="block text-lg">{member.name}</strong>
              <div>RM: {member.rm}</div>
              <div>{member.group}</div>
              <div className="mt-2 flex gap-2">
                <a href={member.github} rel="noopener noreferrer" target="_blank" className="underline hover:text-[#1de9b6]">Github</a>
                <span>|</span>
                <a href={member.linkedin} rel="noopener noreferrer" target="_blank" className="underline hover:text-[#1de9b6]">LinkedIn</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Links />
    </div>
  );
}