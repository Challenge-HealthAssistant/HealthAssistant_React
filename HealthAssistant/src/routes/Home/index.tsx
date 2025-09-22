import React from "react";

export default function Home() {
  function handleTeleconsulta() {
    alert("Ir para Teleconsulta");
  }

  function handleAgendar() {
    alert("Ir para Agendar");
  }

  function handleAgenda() {
    alert("Ir para Agenda");
  }

  function handleResultados() {
    alert("Ir para Resultados");
  }

  function handleNav(page: string) {
    alert(`Ir para ${page}`);
  }

  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl">👤</span>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        <button
          className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg"
          onClick={handleTeleconsulta}
        >
          Teleconsulta
        </button>
        <button
          className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg"
          onClick={handleAgendar}
        >
          Agendar
        </button>
        <button
          className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg"
          onClick={handleAgenda}
        >
          Agenda
        </button>
        <button
          className="w-56 py-4 rounded-lg border-none bg-[#eaeaea] text-[#1976a5] font-semibold text-lg"
          onClick={handleResultados}
        >
          Resultados
        </button>
      </div>
      <nav className="flex justify-around bg-[#1de9b6] py-3">
        <button
          className="bg-none border-none text-lg font-bold text-[#1976a5]"
          onClick={() => handleNav("Início")}
        >
          Início
        </button>
        <button
          className="bg-none border-none text-lg"
          onClick={() => handleNav("Quem somos")}
        >
          Quem somos
        </button>
        <button
          className="bg-none border-none text-lg"
          onClick={() => handleNav("Faq")}
        >
          Faq
        </button>
        <button
          className="bg-none border-none text-lg"
          onClick={() => handleNav("Suporte")}
        >
          Suporte
        </button>
      </nav>
    </div>
  );
}