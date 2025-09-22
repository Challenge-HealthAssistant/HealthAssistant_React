import React from "react";

export default function Agendar() {
  function handleVerDetalhes(servico: string) {
    alert(`Ver detalhes de ${servico}`);
  }

  function handleAgendar(servico: string) {
    alert(`Agendar ${servico}`);
  }

  function handleNav(page: string) {
    alert(`Ir para ${page}`);
  }

  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <span className="text-2xl text-[#1976a5]"></span>
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl"></span>
      </div>
      <h2 className="bg-[#1976a5] text-white m-0 py-3 text-center text-xl font-semibold lowercase">
        agendar
      </h2>
      <div className="flex-1 p-6">
        <div className="text-white font-bold mb-4 uppercase text-sm">
          Consulte a cobertura convênio ou agende particular
        </div>
        {/* Card 1 */}
        <div className="bg-[#eaeaea] rounded-lg p-4 mb-6">
          <div className="text-[#1976a5] font-semibold mb-1">Psicologia</div>
          <div className="text-[#222] text-sm mb-2">
            outros nomes: Psicoterapia, Psicanálise, Psciociência
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#888] text-xs">Na unidade</span>
          </div>
          <div className="flex gap-2">
            <button
              className="flex-1 py-2 rounded bg-white text-[#1976a5] font-semibold border-none"
              onClick={() => handleVerDetalhes("Psicologia")}
            >
              Ver detalhes
            </button>
            <button
              className="flex-1 py-2 rounded bg-white text-[#1976a5] font-semibold border-none"
              onClick={() => handleAgendar("Psicologia")}
            >
              Agendar
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#eaeaea] rounded-lg p-4 mb-6">
          <div className="text-[#1976a5] font-semibold mb-1">Hemograma, sangue total</div>
          <div className="text-[#222] text-sm mb-2">
            outros nomes: Hemograma, Hemograma completo, Hemograma Sangue
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#888] text-xs">Na unidade</span>
          </div>
          <div className="flex gap-2">
            <button
              className="flex-1 py-2 rounded bg-white text-[#1976a5] font-semibold border-none"
              onClick={() => handleVerDetalhes("Hemograma, sangue total")}
            >
              Ver detalhes
            </button>
            <button
              className="flex-1 py-2 rounded bg-white text-[#1976a5] font-semibold border-none"
              onClick={() => handleAgendar("Hemograma, sangue total")}
            >
              Agendar
            </button>
          </div>
        </div>
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