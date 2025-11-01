import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Links from "../../components/Links/Links";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoPaciente } from "../../types/tipoPaciente";
import { getPacienteById, updatePaciente, getCuidadorByPacienteId, createCuidador, updateCuidador } from "../../data/api";

export default function EditarPerfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [perfil, setPerfil] = useState<tipoPaciente | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Estados para os campos editáveis
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cuidador, setCuidador] = useState("");
  const [telefoneCuidador, setTelefoneCuidador] = useState("");
  
  // Estados para controle do cuidador
  const [cuidadorExistente, setCuidadorExistente] = useState<any>(null);
  const [temCuidador, setTemCuidador] = useState(false);

  useEffect(() => {
    let pacienteId: number;

    if (id) {
      pacienteId = Number(id);
    } else {
      const pacienteIdStr = localStorage.getItem("pacienteLogadoId");
      if (!pacienteIdStr) {
        navigate("/login");
        return;
      }
      pacienteId = Number(pacienteIdStr);
    }

    // Carregar dados do paciente
    getPacienteById(pacienteId)
      .then(async (data) => {
        setPerfil(data);
        // Preencher os campos editáveis
        setNome(data.nome || "");
        setTelefone(data.telefone || "");
        setEmail(data.email || "");
        setDataNascimento(converterDataISOParaBR(data.dataNascimento) || "");
        
        // Buscar cuidador existente
        try {
          const cuidadorExiste = await getCuidadorByPacienteId(data.idPaciente);
          if (cuidadorExiste) {
            setCuidadorExistente(cuidadorExiste);
            setCuidador(cuidadorExiste.nome || "");
            setTelefoneCuidador(cuidadorExiste.telefone || "");
            setTemCuidador(true);
          } else {
            setCuidador("");
            setTelefoneCuidador("");
            setTemCuidador(false);
          }
        } catch (error) {
          setTemCuidador(false);
        }
      })
      .catch(() => {
        setError("Erro ao carregar dados do perfil");
      })
      .finally(() => setLoading(false));
  }, [navigate, id]);

  // Converter data de ISO (YYYY-MM-DD) para formato brasileiro (DD/MM/YYYY)
  const converterDataISOParaBR = (dataISO: string) => {
    if (!dataISO) return "";
    
    // Se já está no formato brasileiro, retorna como está
    if (dataISO.includes('/')) return dataISO;
    
    // Converter de YYYY-MM-DD para DD/MM/YYYY
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  // Formatação de telefone
  const formatarTelefone = (value: string) => {
    const apenasNumeros = value.replace(/\D/g, "");
    const limitado = apenasNumeros.slice(0, 11);

    if (limitado.length <= 10) {
      return limitado.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return limitado.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefone(valorFormatado);
  };

  const handleTelefoneCuidadorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarTelefone(e.target.value);
    setTelefoneCuidador(valorFormatado);
  };

  // Formatação de data
  const formatarData = (value: string) => {
    const apenasNumeros = value.replace(/\D/g, "");
    const limitado = apenasNumeros.slice(0, 8);

    if (limitado.length >= 5) {
      return limitado.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    } else if (limitado.length >= 3) {
      return limitado.replace(/(\d{2})(\d{2})/, "$1/$2/");
    } else {
      return limitado;
    }
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarData(e.target.value);
    setDataNascimento(valorFormatado);
  };

  const validarCampos = () => {
    if (!nome.trim()) {
      setError("Nome é obrigatório");
      return false;
    }

    if (!telefone.trim()) {
      setError("Telefone é obrigatório");
      return false;
    }

    const telefoneLimpo = telefone.replace(/\D/g, "");
    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
      setError("Telefone deve ter 10 ou 11 dígitos");
      return false;
    }

    if (!email.trim()) {
      setError("E-mail é obrigatório");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("E-mail deve ter um formato válido");
      return false;
    }

    if (!dataNascimento.trim()) {
      setError("Data de nascimento é obrigatória");
      return false;
    }

    // Validação da data
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(dataNascimento)) {
      setError("Data deve estar no formato DD/MM/AAAA");
      return false;
    }

    // Verificar se a data é válida
    const [dia, mes, ano] = dataNascimento.split('/');
    const dataObj = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
    
    if (dataObj.getDate() !== parseInt(dia) || 
        dataObj.getMonth() !== parseInt(mes) - 1 || 
        dataObj.getFullYear() !== parseInt(ano)) {
      setError("Data de nascimento inválida");
      return false;
    }

    // Verificar se não é data no futuro
    if (dataObj > new Date()) {
      setError("Data de nascimento não pode ser no futuro");
      return false;
    }

    // Validação dos campos do cuidador
    const temNomeCuidador = cuidador.trim().length > 0;
    const temTelefoneCuidador = telefoneCuidador.trim().length > 0;
    
    if (temNomeCuidador || temTelefoneCuidador) {
      // Se um campo do cuidador foi preenchido, ambos devem estar preenchidos
      if (!temNomeCuidador) {
        setError("Se informar telefone do cuidador, o nome também deve ser informado");
        return false;
      }
      if (!temTelefoneCuidador) {
        setError("Se informar nome do cuidador, o telefone também deve ser informado");
        return false;
      }
      
      // Validar formato do telefone do cuidador
      const telefoneCuidadorLimpo = telefoneCuidador.replace(/\D/g, "");
      if (telefoneCuidadorLimpo.length < 10 || telefoneCuidadorLimpo.length > 11) {
        setError("Telefone do cuidador deve ter 10 ou 11 dígitos");
        return false;
      }
    }

    return true;
  };

  const handleSalvar = async () => {
    setError("");
    setSuccess("");

    if (!validarCampos()) {
      return;
    }

    if (!perfil) return;

    setSaving(true);

    try {
      // Converter data de DD/MM/YYYY para YYYY-MM-DD (formato que a API Java espera)
      const [dia, mes, ano] = dataNascimento.split('/');
      const dataFormatoISO = `${ano}-${mes}-${dia}`;
      
      // Dados para atualização do paciente (SEM campos de cuidador)
      const dadosAtualizacao = {
        nome: nome.trim(),
        dataNascimento: dataFormatoISO, // Formato: YYYY-MM-DD
        telefone: telefone.replace(/\D/g, ""), // Enviar apenas números
        email: email.trim().toLowerCase(),
        // NÃO incluir cuidador aqui - será gerenciado separadamente
      };

      // Primeiro atualizar o paciente
      await updatePaciente(perfil.idPaciente, dadosAtualizacao);
      
      // Depois gerenciar o cuidador
      if (cuidador.trim() && telefoneCuidador.trim()) {
        try {
          if (temCuidador && cuidadorExistente) {
            // Atualizar cuidador existente
            await updateCuidador(cuidadorExistente.idCuidador, {
              nome: cuidador.trim(),
              telefone: telefoneCuidador.replace(/\D/g, ""),
              idPaciente: perfil.idPaciente
            });
          } else {
            // Criar novo cuidador
            const novoCuidador = await createCuidador({
              nome: cuidador.trim(),
              telefone: telefoneCuidador.replace(/\D/g, ""),
              idPaciente: perfil.idPaciente
            });
            setCuidadorExistente(novoCuidador);
            setTemCuidador(true);
          }
        } catch {
          // Não para o processo, apenas avisa
          setError("⚠️ Perfil salvo, mas houve erro ao salvar o cuidador");
          return; // Para não mostrar success
        }
      }
      
      setSuccess("✅ Perfil e cuidador salvos com sucesso!");
      
      // Atualizar os dados locais
      setPerfil({ ...perfil, ...dadosAtualizacao });
      
      // Redirecionar após sucesso
      setTimeout(() => {
        navigate(`/perfil/${perfil.idPaciente}`);
      }, 2000);

    } catch (error) {
      if (error instanceof Error) {
        
        if (error.message.includes("dataNascimento")) {
          setError(" Erro na data de nascimento. Verifique o formato DD/MM/AAAA");
        } else if (error.message.includes("400")) {
          setError(" Dados inválidos. Verifique se todos os campos estão corretos.");
        } else if (error.message.includes("404")) {
          setError(" Paciente não encontrado no servidor.");
        } else if (error.message.includes("500")) {
          setError("Erro interno do servidor. Tente novamente em alguns minutos.");
        } else if (error.message.includes("Failed to fetch")) {
          setError(" Erro de conexão. Verifique se a API está rodando.");
        } else {
          setError(` ${error.message}`);
        }
      } else {
        setError(" Erro inesperado. Tente novamente.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleVoltar = () => {
    if (perfil) {
      navigate(`/perfil/${perfil.idPaciente}`);
    } else {
      navigate("/perfil");
    }
  };

  if (loading) {
    return (
      <div className="perfil-bg">
        <div className="perfil-content">
          <div className="perfil-card">
            <div className="perfil-loading">Carregando dados...</div>
          </div>
        </div>
        <Links />
      </div>
    );
  }

  if (!perfil) {
    return (
      <div className="perfil-bg">
        <div className="perfil-content">
          <div className="perfil-card">
            <div className="perfil-error">Erro ao carregar perfil</div>
            <button onClick={() => navigate("/home")} className="perfil-btn-sair">
              Voltar ao Início
            </button>
          </div>
        </div>
        <Links />
      </div>
    );
  }

  return (
    <div className="perfil-bg">
      <div className="perfil-banner">
        <button 
          onClick={handleVoltar}
          className="perfil-back-btn" 
          aria-label="Voltar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={isHovered ? voltarVerde : voltar} 
            alt="Voltar" 
            className="back-btn-icon" 
          />
        </button>
        <h2 className="perfil-title">Editar Perfil</h2>
      </div>
      
      <div className="perfil-content">
        <div className="perfil-card">
          {error && (
            <div style={{ 
              color: '#dc2626', 
              backgroundColor: '#fef2f2', 
              padding: '10px', 
              borderRadius: '4px', 
              marginBottom: '15px',
              border: '1px solid #fecaca'
            }}>
               {error}
            </div>
          )}

          {success && (
            <div style={{ 
              color: '#16a34a', 
              backgroundColor: '#f0fdf4', 
              padding: '10px', 
              borderRadius: '4px', 
              marginBottom: '15px',
              border: '1px solid #bbf7d0'
            }}>
              {success}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); handleSalvar(); }}>
            <div className="perfil-field">
              <label className="perfil-label">Nome Completo</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="perfil-input"
                placeholder="Digite seu nome completo"
                disabled={saving}
              />
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Data de Nascimento</label>
              <input
                type="text"
                value={dataNascimento}
                onChange={handleDataChange}
                className="perfil-input"
                placeholder="DD/MM/AAAA"
                disabled={saving}
              />
            </div>

            <div className="perfil-field">
              <label className="perfil-label">CPF</label>
              <div className="perfil-value" style={{ color: '#666', fontStyle: 'italic' }}>
                {perfil.cpf} (não pode ser alterado)
              </div>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Telefone</label>
              <input
                type="text"
                value={telefone}
                onChange={handleTelefoneChange}
                className="perfil-input"
                placeholder="(11) 99999-9999"
                disabled={saving}
              />
            </div>

            <div className="perfil-field">
              <label className="perfil-label">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="perfil-input"
                placeholder="seu@email.com"
                disabled={saving}
              />
            </div>

            <div className="perfil-field">
              <label className="perfil-label">
                Cuidador {temCuidador ? "(Atualizar)" : "(Cadastrar)"}
              </label>
              <input
                type="text"
                value={cuidador}
                onChange={(e) => setCuidador(e.target.value)}
                className="perfil-input"
                placeholder={temCuidador ? "Alterar nome do cuidador" : "Nome do cuidador"}
                disabled={saving}
              />
              <small style={{ color: '#666', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {temCuidador 
                  ? "✏️ Você já tem um cuidador cadastrado. Pode alterar os dados aqui."
                  : "➕ Digite o nome para cadastrar um novo cuidador (familiar, enfermeiro, etc.)"
                }
              </small>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">
                Telefone do Cuidador {temCuidador ? "(Atualizar)" : "(Cadastrar)"}
              </label>
              <input
                type="text"
                value={telefoneCuidador}
                onChange={handleTelefoneCuidadorChange}
                className="perfil-input"
                placeholder={temCuidador ? "Alterar telefone" : "(11) 99999-9999"}
                disabled={saving}
              />
              <small style={{ color: '#666', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                {temCuidador 
                  ? "📞 Telefone atual do cuidador - pode ser alterado"
                  : "📞 Telefone de contato para emergências - obrigatório se informar o nome"
                }
              </small>
            </div>

            <div className="perfil-buttons">
              <button 
                type="submit"
                className="perfil-btn-editar"
                disabled={saving}
                style={{ 
                  opacity: saving ? 0.6 : 1,
                  cursor: saving ? 'not-allowed' : 'pointer'
                }}
              >
                {saving ? "Salvando..." : "💾 Salvar Alterações"}
              </button>
              
              <button 
                type="button"
                className="perfil-btn-sair"
                onClick={handleVoltar}
                disabled={saving}
              >
                ❌ Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Links />
    </div>
  );
}