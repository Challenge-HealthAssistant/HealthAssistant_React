import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl">👤</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <Link className=" w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg" to="/teleconsulta">
          Teleconsulta
        </Link>

        <Link className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg" to="/agendar">
          Agendar
        </Link>

        <Link className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg" to="/agendamentos">
          Agendamentos
        </Link>

        <Link className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg" to="/resultados">
          Resultados
        </Link>
      </div>
      <nav className="flex justify-around bg-[#1de9b6] py-3">
        <Link className="bg-none border-none text-lg"  to='/'>Início </Link>
        <Link className="bg-none border-none text-lg"  to='/quemsomos'>Quem somos</Link>
        <Link className="bg-none border-none text-lg" to="/faq">Faq</Link>
        <Link className="bg-none border-none text-lg" to="/suporte">Suporte</Link>
      </nav>
    </div>
  );
}