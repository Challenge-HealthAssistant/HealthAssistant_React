import React, { useState } from "react";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`CPF: ${cpf}\nData de nascimento: ${dataNascimento}`);
  }

  function handleEntrarComSenha() {
    alert("Ir para login com senha");
  }

  function handleCadastro() {
    alert("Ir para cadastro");
  }

  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col items-center">
      <div className="mt-6">
        <img src="/logo.png" alt="Logo" className="h-20" />
      </div>
      <form
        className="bg-white mt-6 rounded-lg w-[340px] p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="bg-[#1976a5] text-white -mt-6 -mx-6 mb-6 py-4 rounded-t-lg text-center text-lg font-semibold">
          Acessar conta
        </h2>
        <label className="text-[#1976a5] font-semibold block mb-2">
          Coloque seu CPF e data de nascimento
        </label>
        <input
          placeholder="CPF"
          className="w-full mb-3 p-2.5 rounded-md border-none bg-[#eaeaea] outline-none"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          placeholder="Data de nascimento"
          className="w-full mb-1 p-2.5 rounded-md border-none bg-[#eaeaea] outline-none"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <div className="text-xs text-[#888] mb-4">Digite apenas números</div>
        <button
          type="submit"
          className="w-full p-2.5 rounded-md border-none bg-[#bdbdbd] text-[#222] font-semibold mb-4"
        >
          Entrar
        </button>
        <div className="flex items-center my-2">
          <hr className="flex-1 border-[#1976a5]" />
          <span className="mx-2 text-[#1976a5] font-semibold">ou</span>
          <hr className="flex-1 border-[#1976a5]" />
        </div>
        <button
          type="button"
          className="w-full p-2.5 rounded-md border-none bg-[#eaeaea] text-[#1976a5] font-semibold mb-2"
          onClick={handleEntrarComSenha}
        >
          Entrar com senha
        </button>
        <div className="text-center mt-2">
          <button
            type="button"
            className="text-[#1976a5] font-semibold no-underline"
            onClick={handleCadastro}
          >
            Fazer cadastro
          </button>
        </div>
      </form>
    </div>
  );
}