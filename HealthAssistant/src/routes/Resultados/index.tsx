
const resultados = [
  {
    ano: 2024,
    exames: [
      {
        data: "07 Abr.",
        unidade: "Cerqueira César",
        ficha: "6600935883",
        marca: "Instituto Central (IHC)",
      },
      {
        data: "19 Mar.",
        unidade: "Cerqueira César",
        ficha: "3588998395",
        marca: "Instituto Central (IHC)",
      },
      {
        data: "30 Jan.",
        unidade: "Cerqueira César",
        ficha: "6094554356",
        marca: "Instituto Psiquiatria (IPq)",
      },
    ],
  },
  {
    ano: 2023,
    exames: [
      {
        data: "25 set.",
        unidade: "Cerqueira César",
        ficha: "2647384959",
        marca: "Instituto Central (IHC)",
      },
      {
        data: "17 mai.",
        unidade: "Vila Mariana",
        ficha: "1992004893",
        marca: "Instituto de Medicina Física e Reabilitação (IMREA)",
      },
      {
        data: "09 jan.",
        unidade: "Cerqueira César",
        ficha: "1739403989",
        marca: "Instituto Do Coração (InCor)",
      },
    ],
  },
];

export default function Resultados() {
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
        <span className="text-4xl"></span>
      </div>
      <h2 className="bg-[#1976a5] text-white m-0 py-3 text-center text-xl font-semibold">
        Resultados
      </h2>
      <div className="flex-1 p-4 overflow-y-auto">
        {resultados.map((grupo) => (
          <div key={grupo.ano} className="mb-6">
            <div className="text-white font-bold mb-2 text-lg">{grupo.ano}</div>
            {grupo.exames.map((exame, idx) => (
              <div
                key={exame.ficha}
                className="bg-[#2196c9] text-white rounded-lg p-4 mb-3 border-l-4 border-[#1de9b6]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-lg">{exame.data}</span>
                  <span className="text-sm">Unidade: {exame.unidade}</span>
                </div>
                <div className="text-xs">Ficha: {exame.ficha}</div>
                <div className="text-xs">Marca: {exame.marca}</div>
              </div>
            ))}
          </div>
        ))}
</div>