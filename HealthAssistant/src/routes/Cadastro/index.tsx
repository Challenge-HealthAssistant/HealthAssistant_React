import { useState } from "react";

export default function Cadastro() {
  const [sexo, setSexo] = useState("Masculino");

  return (
    <div className="bg-[##157AB9] min-h-screen flex flex-col items-center">
      <div className="mt-6">
        <img src="/logo.png" alt="Logo" className="h-20" />
      </div>
      <div className="bg-white mt-6 rounded-lg w-[340px] p-6">
        <h2 className="bg-[##157AB9] text-white -mt-6 -mx-6 mb-6 py-4 px-0 rounded-t-lg text-center text-lg font-semibold">
          Faça seu cadastro
        </h2>
        <div className="text-[##157AB9] font-semibold mb-3">
          Precisamos dos seus dados para cadastro
        </div>
        <input
          placeholder="Nome completo"
          className="w-full mb-3 p-2.5 rounded-md border-none bg-[#D9D9D9] outline-none"
        />
        <input
          placeholder="CPF"
          className="w-full mb-3 p-2.5 rounded-md border-none bg-[#D9D9D9] outline-none"
        />
        <input
          placeholder="Data de nascimento"
          className="w-full mb-3 p-2.5 rounded-md border-none bg-[#D9D9D9] outline-none"
        />
        <div className="mb-3">
          <div className="text-[##157AB9] font-semibold mb-1">Sexo biológico</div>
          <div className="flex gap-2">
            <button
              className={`flex-1 p-2.5 rounded-md font-semibold ${
                sexo === "Masculino"
                  ? "border-2 border-[##157AB9] bg-[#D9D9D9] text-[#157AB9]"
                  : "border border-[#D9D9D9] bg-[#D9D9D9] text-[#157AB9]"
              }`}
              onClick={() => setSexo("Masculino")}
              type="button"
            >
              Masculino
            </button>
            <button
              className={`flex-1 p-2.5 rounded-md font-semibold ${
                sexo === "Feminino"
                  ? "border-2 border-[##157AB9] bg-[#D9D9D9] text-[#157AB9]"
                  : "border border-[#D9D9D9] bg-[#D9D9D9] text-[#157AB9]"
              }`}
              onClick={() => setSexo("Feminino")}
              type="button"
            >
              Feminino
            </button>
          </div>
        </div>
        <input
          placeholder="Número de telefone"
          className="w-full mb-4 p-2.5 rounded-md border-none bg-[#D9D9D9] outline-none"
        />
        <button className="w-full p-2.5 rounded-md border-none bg-[#03A9AA] text-[#157AB9] font-semibold mb-4">
          Cadastrar
        </button>
        <button className="w-full p-2.5 rounded-md border-none bg-[#03A9AA] text-[#157AB9] font-semibold">
          Voltar
        </button>
      </div>
    </div>
  );
}