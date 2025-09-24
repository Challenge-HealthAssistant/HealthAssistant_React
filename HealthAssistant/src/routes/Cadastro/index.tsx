import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listaPacientes } from "../../data/Pacientes";
import type { tipoPaciente } from "../../types/tipoPaciente";

export default function Cadastro() {
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("Masculino");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function formatarCPF(value: string) {
    const apenasNumeros = value.replace(/\D/g, '');
    const limitado = apenasNumeros.slice(0, 11);
    return limitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  function formatarData(value: string) {
    const apenasNumeros = value.replace(/\D/g, '');
    const limitado = apenasNumeros.slice(0, 8);
    
    if (limitado.length >= 5) {
      return limitado.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    } else if (limitado.length >= 3) {
      return limitado.replace(/(\d{2})(\d{2})/, '$1/$2/');
    } else {
      return limitado;
    }
  }

  function formatarTelefone(value: string) {
    const apenasNumeros = value.replace(/\D/g, '');
    const limitado = apenasNumeros.slice(0, 11);
    
    if (limitado.length <= 10) {
      return limitado.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return limitado.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  }

  function handleCPFChange(value: string) {
    const cpfFormatado = formatarCPF(value);
    setCpf(cpfFormatado);
    if (erro) setErro("");
  }

  function handleDataChange(value: string) {
    const dataFormatada = formatarData(value);
    setDataNascimento(dataFormatada);
    if (erro) setErro("");
  }

  function handleTelefoneChange(value: string) {
    const telefoneFormatado = formatarTelefone(value);
    setTelefone(telefoneFormatado);
    if (erro) setErro("");
  }

  function validarCampos() {
    if (!nomeCompleto.trim()) {
      setErro("Nome completo é obrigatório.");
      return false;
    }

    const nomePartes = nomeCompleto.trim().split(' ').filter(parte => parte.length > 0);
    if (nomePartes.length < 2) {
      setErro("Digite seu nome completo (nome e sobrenome).");
      return false;
    }

    if (!cpf.trim()) {
      setErro("CPF é obrigatório.");
      return false;
    }

    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      setErro("CPF deve ter 11 dígitos.");
      return false;
    }

    // Verificar se CPF já existe
    const cpfExistente = listaPacientes.find(paciente => paciente.cpf === cpfLimpo);
    if (cpfExistente) {
      setErro("CPF já cadastrado no sistema.");
      return false;
    }

    if (!dataNascimento.trim()) {
      setErro("Data de nascimento é obrigatória.");
      return false;
    }

    if (!telefone.trim()) {
      setErro("Telefone é obrigatório.");
      return false;
    }

    const telefoneLimpo = telefone.replace(/\D/g, '');
    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
      setErro("Telefone deve ter 10 ou 11 dígitos.");
      return false;
    }

    if (!email.trim()) {
      setErro("Email é obrigatório.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro("Digite um email válido.");
      return false;
    }

    // Verificar se email já existe
    const emailExistente = listaPacientes.find(paciente => paciente.email.toLowerCase() === email.toLowerCase());
    if (emailExistente) {
      setErro("Email já cadastrado no sistema.");
      return false;
    }

    if (!senha.trim()) {
      setErro("Senha é obrigatória.");
      return false;
    }

    if (senha.length < 6) {
      setErro("Senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return false;
    }

    return true;
  }

  async function handleCadastro() {
    setErro("");
    
    if (!validarCampos()) {
      return;
    }

    setCarregando(true);
    
    try {
      // Simular processo de cadastro
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Criar novo paciente
      const novoId = Math.max(...listaPacientes.map(p => p.id)) + 1;
      const novoPaciente: tipoPaciente = {
        id: novoId,
        nome: nomeCompleto,
        dataNascimento: dataNascimento.replace(/\D/g, ''), // Salvar sem formatação
        cpf: cpf.replace(/\D/g, ''), // Salvar sem formatação
        telefone: telefone,
        senha: senha, // Usar senha digitada pelo usuário
        email: email, // Usar email digitado pelo usuário
        endereco: "Endereço não informado",
        bairro: "Bairro não informado",
      };
      
      // Adicionar à lista
      listaPacientes.push(novoPaciente);
      
      // Salvar dados no localStorage para login
      localStorage.setItem('pacienteLogadoId', novoPaciente.id.toString());
      localStorage.setItem('pacienteLogadoNome', novoPaciente.nome);
      
      console.log('✅ Novo paciente cadastrado:', novoPaciente);
      console.log('📋 Lista atualizada:', listaPacientes);
      
      // Navegar para verificação de código
      navigate("/codigodeverificacao");
      
    } catch (error) {
      setErro("Erro interno. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  function handleVoltar() {
    navigate("/login");
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2 className="cadastro-header">
          Faça seu cadastro
        </h2>
        <div className="cadastro-label">
          Precisamos dos seus dados para cadastro
        </div>
        
        <input
          placeholder="Nome completo"
          className="cadastro-input"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
        />
        
        <input
          placeholder="CPF"
          className="cadastro-input"
          value={cpf}
          onChange={(e) => handleCPFChange(e.target.value)}
          maxLength={14}
        />
        
        <input
          placeholder="Data de nascimento"
          className="cadastro-input"
          value={dataNascimento}
          onChange={(e) => handleDataChange(e.target.value)}
          maxLength={10}
        />
        
        <div className="cadastro-sexo-container">
          <div className="cadastro-sexo-label">Sexo biológico</div>
          <div className="cadastro-sexo-buttons">
            <button
              className={`cadastro-sexo-button ${
                sexo === "Masculino"
                  ? "cadastro-sexo-button-selected"
                  : "cadastro-sexo-button-unselected"
              }`}
              onClick={() => setSexo("Masculino")}
              type="button"
            >
              Masculino
            </button>
            <button
              className={`cadastro-sexo-button ${
                sexo === "Feminino"
                  ? "cadastro-sexo-button-selected"
                  : "cadastro-sexo-button-unselected"
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
          className="cadastro-input"
          value={telefone}
          onChange={(e) => handleTelefoneChange(e.target.value)}
          maxLength={15}
        />
        
        <input
          placeholder="Email"
          type="email"
          className="cadastro-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          placeholder="Senha (mínimo 6 caracteres)"
          type="password"
          className="cadastro-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        <input
          placeholder="Confirmar senha"
          type="password"
          className="cadastro-input-last"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        
        {erro && (
          <div className="cadastro-erro">
            <span className="cadastro-erro-texto">{erro}</span>
          </div>
        )}
        
        <button 
          className={`cadastro-button-primary ${carregando ? 'carregando' : ''}`}
          onClick={handleCadastro}
          disabled={carregando}
        >
          {carregando ? "Cadastrando..." : "Cadastrar"}
        </button>
        
        <button className="cadastro-button-secondary" onClick={handleVoltar}>
          Voltar
        </button>
      </div>
    </div>
  );
}