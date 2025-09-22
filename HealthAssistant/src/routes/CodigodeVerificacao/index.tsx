import React from "react";

export default function CodigoVerificacao() {
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col items-center">
      <div className="mt-6">
        <img src="/logo.png" alt="Logo" className="h-20" />
      </div>
      <div className="bg-white mt-6 rounded-lg w-[340px] p-6">
        <h2 className="bg-[#1976a5] text-white -mt-6 -mx-6 mb-6 py-4 px-0 rounded-t-lg text-center text-lg font-semibold">
          Acessar conta
        </h2>
        <label className="text-[#1976a5] font-semibold">
          Digite o código de verificação enviado no seu número:
        </label>
        <div className="my-3 font-semibold text-[#1976a5]">
          (**) 999999-*****
        </div>
        <div className="flex justify-between mb-4">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              maxLength={1}
              className="w-10 h-10 text-2xl text-center rounded-md border border-[#bdbdbd] bg-[#eaeaea] outline-none"
            />
          ))}
        </div>
        <div className="text-xs text-[#888] mb-2">
          Reenviar código em 00:45
        </div>
        <div className="text-xs text-[#1976a5] mb-4">
          Não recebeu?{" "}
          <a href="#" className="text-[#1976a5] font-semibold no-underline">
            Reenviar código
          </a>
        </div>
        <button className="w-full p-2.5 rounded-md border-none bg-[#bdbdbd] text-[#222] font-semibold mb-4">
          Verificar
        </button>
        <button className="w-full p-2.5 rounded-md border-none bg-[#1de9b6] text-[#1976a5] font-semibold">
          Voltar
        </button>
      </div>
    </div>
  );
}