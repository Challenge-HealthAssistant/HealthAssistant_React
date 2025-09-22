import React from "react";

export default function Agendamentos() {
  function handleVoltar() {
    alert("Voltar para a página anterior");
  }

  function handleNav(page: string) {
    alert(`Ir para ${page}`);
  }

  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <button
          className="text-2xl text-[#1976a5] bg-transparent border-none"
          onClick={handleVoltar}
        >
          ←
        </button>
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl">👤</span>
      </div>
      <h2 className="bg-[#1976a5] text-white m-0 py-3 text-center text-xl font-semibold">
        Agendamentos
      </h2>
      <div className="flex-1 p-6">
        <div className="bg-[#eaeaea] rounded-lg p-4 mb-6">
          <div className="text-[#1976a5] font-semibold mb-2">Próximas consultas</div>
          <div className="text-[15px] text-[#222]">
            Data: 14/05/2025<br />
            Horário: 14:00<br />
            Teleconsulta<br />
            Unidade: IMREA Lirmaliz
          </div>
        </div>
        <div className="text-white text-center text-[15px]">
          <div className="font-semibold mb-2">Últimos acessos</div>
          você não possui acessos recentes
        </div>
      </div>
      <nav className="flex justify-around bg-[#1de9b6] py-3">
        <button
          className="bg-none border-none text-lg"
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