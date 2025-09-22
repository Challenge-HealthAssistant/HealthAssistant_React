import React from "react";

export default function Home() {
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl">👤</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <button className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg">Teleconsulta</button>
        <button className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg">Agendar</button>
        <button className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg">Agenda</button>
        <button className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg">Resultados</button>
      </div>
      <nav className="flex justify-around bg-[#1de9b6] py-3">
        <button className="bg-none border-none text-lg font-bold text-[#1976a5]">Início</button>
        <button className="bg-none border-none text-lg">Quem somos</button>
        <button className="bg-none border-none text-lg">Faq</button>
        <button className="bg-none border-none text-lg">Suporte</button>
      </nav>
    </div>
  );
}