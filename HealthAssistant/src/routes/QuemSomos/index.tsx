import { Link } from "react-router";

const team = [
  { name: "Pietro Paranhos Wilhelm", rm: "561378", group: "1TDSPH" },
  { name: "Leonardo Rodrigues", rm: "552417", group: "1TDSPH" },
  { name: "Arthur Silvera", rm: "562310", group: "1TDSPH" },
];

export default function QuemSomos() {
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <header className="bg-white px-4 py-4 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl">👤</span>
      </header>
      <h2 className="bg-[#1976a5] text-white m-0 py-3 px-4 text-xl font-semibold">Quem Somos</h2>
      <div className="flex-1 p-4">
        {team.map((member) => (
          <div
            key={member.rm}
            className="flex items-center bg-[#2196c9] text-white mb-4 p-3 rounded-lg border-2 border-[#1976a5]"
          >
            <span className="text-4xl mr-4">👤</span>
            <div>
              <strong>{member.name}</strong>
              <div>RM: {member.rm}</div>
              <div>{member.group}</div>
            </div>
          </div>
        ))}
      </div>
      <nav className="flex justify-around bg-[#1de9b6] py-3">
        <Link className="bg-none border-none text-lg" to='/'>Início</Link>
        <Link className="bg-none border-none text-lg" to='/quemsomos'>Quem somos</Link>
        <Link className="bg-none border-none text-lg" to='/faq'>Faq</Link>
        <Link className="bg-none border-none text-lg" to='/suporte'>Suporte</Link>
      </nav>
    </div>
  );
}