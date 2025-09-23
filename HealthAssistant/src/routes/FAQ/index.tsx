
export default function Faq() {
  return (
    <div className="bg-[#2196c9] min-h-screen flex flex-col">
      <div className="bg-white px-4 py-4 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="text-4xl">{/* Ícone de perfil */}</span>
      </div>
      <h2 className="bg-[#1976a5] text-white m-0 py-3 text-center text-xl font-semibold uppercase">
        FAQ
      </h2>
      <div className="flex-1 p-4 flex flex-col gap-4">
        <div className="bg-[#eaeaea] rounded-lg p-4 shadow">
          <div className="font-semibold text-[#1976a5] mb-1">
            Como eu recebo o lembrete da consulta?
          </div>
          <div className="text-[#222] text-sm">
            Você recebe via WhatsApp<br />
            um dia antes e no dia da consulta
          </div>
        </div>
        <div className="bg-[#eaeaea] rounded-lg p-4 shadow">
          <div className="font-semibold text-[#1976a5] mb-1">
            Preciso lembrar da senha?
          </div>
          <div className="text-[#222] text-sm">
            Não. você recebe um código de verificação no seu celular para acessar caso você entre via data de nascimento e cpf
          </div>
        </div>
        <div className="bg-[#eaeaea] rounded-lg p-4 shadow">
          <div className="font-semibold text-[#1976a5] mb-1">
            O sistema funciona em celular antigo?
          </div>
        </div>
        <div className="bg-[#eaeaea] rounded-lg p-4 flex flex-col items-center gap-2 mt-4">
          <div className="font-semibold text-[#222] mb-2">Precisa de ajuda?</div>
          <button className="w-full bg-[#2196c9] text-white font-semibold rounded-md py-2">
            Pergunte ao assistente
          </button>
        </div>
      </div>
      <nav className="flex justify-around bg-[#1de9b6] py-3">
        <button className="bg-none border-none text-lg">Início</button>
        <button className="bg-none border-none text-lg">Quem somos</button>
        <button className="bg-none border-none text-lg font-bold text-[#1976a5]">Faq</button>
        <button className="bg-none border-none text-lg">Suporte</button>
      </nav>
    </div>
  );
}