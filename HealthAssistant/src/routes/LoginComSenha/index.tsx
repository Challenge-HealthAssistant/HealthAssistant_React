

export default function LoginSenha() {
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col items-center">
      <div className="bg-white mt-6 rounded-lg w-[340px] p-6">
        <h2 className="bg-[#1976a5] text-white -mt-6 -mx-6 mb-6 py-4 rounded-t-lg text-center text-lg font-semibold">
          Acessar conta
        </h2>
        <label className="text-[#1976a5] font-semibold">Coloque seu CPF e Senha</label>
        <input
          placeholder="CPF"
          className="w-full my-3 p-2.5 rounded-md border-none bg-[#eaeaea] outline-none"
        />
        <input
          placeholder="Senha"
          type="password"
          className="w-full mb-4 p-2.5 rounded-md border-none bg-[#eaeaea] outline-none"
        />
        <button className="w-full p-2.5 rounded-md border-none bg-[#bdbdbd] text-[#222] font-semibold mb-4">
          Entrar
        </button>
        <div className="text-center text-[#1976a5] my-3">ou</div>
        <button className="w-full p-2.5 rounded-md border-none bg-[#eaeaea] text-[#1976a5] font-semibold mb-2">
          Entrar com Data de nascimento
        </button>
        <div className="text-center mt-2">
          <a href="#" className="text-[#1976a5] font-semibold no-underline">
            Fazer cadastro
          </a>
        </div>
      </div>
    </div>
  );
}