import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarPaciente } from "../../data/api";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [carregando, setCarregando] = useState(false);

  // -------------------------
  // Máscaras e formatações
  // -------------------------
  function formatarCPF(value: string) {
    const apenasNumeros = value.replace(/\D/g, "");
    const limitado = apenasNumeros.slice(0, 11);
    return limitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function formatarData(value: string) {
    const apenasNumeros = value.replace(/\D/g, "");
    const limitado = apenasNumeros.slice(0, 8);

    if (limitado.length >= 5) {
      return limitado.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    } else if (limitado.length >= 3) {
      return limitado.replace(/(\d{2})(\d{2})/, "$1/$2/");
    } else {
      return limitado;
    }
  }

  function formatarTelefone(value: string) {
    const apenasNumeros = value.replace(/\D/g, "");
    const limitado = apenasNumeros.slice(0, 11);

    if (limitado.length <= 10) {
      return limitado.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return limitado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  }

  // -------------------------
  // Handlers de campos
  // -------------------------
  function handleCPFChange(value: string) {
    setCpf(formatarCPF(value));
    if (erro) setErro("");
  }

  function handleDataChange(value: string) {
    setDataNascimento(formatarData(value));
    if (erro) setErro("");
  }

  function handleTelefoneChange(value: string) {
    setTelefone(formatarTelefone(value));
    if (erro) setErro("");
  }

  // -------------------------
  // Validação dos campos
  // -------------------------
  function validarCampos() {
    if (!nomeCompleto.trim()) return setErro("Nome completo é obrigatório."), false;
    if (!cpf.trim()) return setErro("CPF é obrigatório."), false;
    if (cpf.replace(/\D/g, "").length !== 11) return setErro("CPF deve ter 11 dígitos."), false;
    if (!dataNascimento.trim()) return setErro("Data de nascimento é obrigatória."), false;
    if (!telefone.trim()) return setErro("Telefone é obrigatório."), false;
    if (!email.trim()) return setErro("E-mail é obrigatório."), false;
    return true;
  }

  // -------------------------
  // Envio para o backend
  // -------------------------
  async function handleCadastro() {
    setErro("");
    setSucesso("");
    if (!validarCampos()) return;

    setCarregando(true);

    try {
      // Validação extra antes de enviar
      const cpfLimpo = cpf.replace(/\D/g, "");
      const telefoneLimpo = telefone.replace(/\D/g, "");
      
      // Validações específicas para o backend Java
      if (cpfLimpo.length !== 11) {
        setErro("CPF deve ter exatamente 11 dígitos.");
        setCarregando(false);
        return;
      }
      
      if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
        setErro("Telefone deve ter 10 ou 11 dígitos.");
        setCarregando(false);
        return;
      }
      
      // Verifica se são apenas números válidos
      if (!/^\d+$/.test(cpfLimpo) || !/^\d+$/.test(telefoneLimpo)) {
        setErro("CPF e telefone devem conter apenas números.");
        setCarregando(false);
        return;
      }

      const novoPaciente = {
        nome: nomeCompleto.trim(),
        cpf: cpfLimpo, //  Garantido que são só números
        dataNascimento: dataNascimento.split("/").reverse().join("-"),
        telefone: telefoneLimpo, // Garantido que são só números
        possuiCuidador: false,
        email: email.trim().toLowerCase(),
      };

      const data = await cadastrarPaciente(novoPaciente);

      setErro("");
      setSucesso("Cadastro realizado com sucesso!");

      // Salva dados
      localStorage.setItem("pacienteLogadoId", data.idPaciente.toString());
        localStorage.setItem("pacienteLogadoNome", data.nome);

        // Limpa campos
        setNomeCompleto("");
        setCpf("");
        setDataNascimento("");
        setTelefone("");
        setEmail("");

        setTimeout(() => navigate("/codigodeverificacao"), 2000);
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setErro("Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  function handleVoltar() {
    navigate("/login");
  }

  // -------------------------
  // Renderização do formulário
  // -------------------------
  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2 className="cadastro-header">Faça seu cadastro</h2>
        <div className="cadastro-label">Precisamos dos seus dados para cadastro</div>

        {/*  Adicione a tag <form> */}
        <form onSubmit={(e) => { e.preventDefault(); handleCadastro(); }}>
          <input
            placeholder="Nome completo"
            className="cadastro-input"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            required
          />

          <input
            placeholder="CPF"
            className="cadastro-input"
            value={cpf}
            onChange={(e) => handleCPFChange(e.target.value)}
            maxLength={14}
            required
          />

          <input
            placeholder="Data de nascimento (DD/MM/AAAA)"
            className="cadastro-input"
            value={dataNascimento}
            onChange={(e) => handleDataChange(e.target.value)}
            maxLength={10}
            required
          />

          <input
            placeholder="Telefone"
            className="cadastro-input"
            value={telefone}
            onChange={(e) => handleTelefoneChange(e.target.value)}
            maxLength={15}
            required
          />

          <input
            placeholder="E-mail"
            type="email"
            className="cadastro-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {erro && (
            <div className="cadastro-erro">
              <span className="cadastro-erro-texto">{erro}</span>
            </div>
          )}
          {sucesso && (
            <div className="cadastro-sucesso">
              <span className="cadastro-sucesso-texto">{sucesso}</span>
            </div>
          )}

          <button
            type="submit" // Tipo submit
            className={`cadastro-button-primary ${carregando ? "carregando" : ""}`}
            disabled={carregando}
          >
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <button
          type="button"
          className="cadastro-button-secondary"
          onClick={handleVoltar}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
