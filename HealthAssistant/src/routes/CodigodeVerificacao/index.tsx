import React, { useRef, useState } from "react";

export default function CodigoVerificacao() {
  const [codigo, setCodigo] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  function handleChange(index: number, value: string) {
    if (!/^[0-9]?$/.test(value)) return;
    const novoCodigo = [...codigo];
    novoCodigo[index] = value;
    setCodigo(novoCodigo);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handleVerificar() {
    alert("Código digitado: " + codigo.join(""));
  }

  function handleVoltar() {
    alert("Voltar para tela anterior");
  }

  function handleReenviar() {
    alert("Código reenviado!");
  }

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
          {codigo.map((valor, i) => (
            <input
              key={i}
              maxLength={1}
              ref={el => (inputsRef.current[i] = el)}
              value={valor}
              onChange={e => handleChange(i, e.target.value.replace(/[^0-9]/g, ""))}
              onKeyDown={e => handleKeyDown(i, e)}
              className="w-10 h-10 text-2xl text-center rounded-md border border-[#bdbdbd] bg-[#eaeaea] outline-none"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
            />
          ))}
        </div>
        <div className="text-xs text-[#888] mb-2">
          Reenviar código em 00:45
        </div>
        <div className="text-xs text-[#1976a5] mb-4">
          Não recebeu?{" "}
          <button
            type="button"
            className="text-[#1976a5] font-semibold no-underline"
            onClick={handleReenviar}
          >
            Reenviar código
          </button>
        </div>
        <button
          className="w-full p-2.5 rounded-md border-none bg-[#bdbdbd] text-[#222] font-semibold mb-4"
          onClick={handleVerificar}
        >
          Verificar
        </button>
        <button
          className="w-full p-2.5 rounded-md border-none bg-[#1de9b6] text-[#1976a5] font-semibold"
          onClick={handleVoltar}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}