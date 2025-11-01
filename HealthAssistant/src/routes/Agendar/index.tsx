
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Links from "../../components/Links/Links";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import { createConsulta } from "../../data/api";
import type { tipoConsulta } from "../../types/tipoConsulta";

export default function Agendar() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  // Estados do formulário
  const [tipo, setTipo] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Opções de tipos de consulta (conforme banco de dados)
  const tiposConsulta = [
    { value: "online", label: "Consulta Online (Telemedicina)" },
    { value: "presencial", label: "Consulta Presencial (Na unidade)" }
  ];

  // Função para agendar consulta
  const handleAgendar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Validações
      if (!tipo || !data || !horario) {
        setError("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Verificar se a data não é no passado
      const dataConsulta = new Date(`${data}T${horario}`);
      const agora = new Date();
      
      if (dataConsulta <= agora) {
        setError("A data e horário devem ser futuros.");
        return;
      }

      // Buscar ID do paciente
      const pacienteId = localStorage.getItem('pacienteLogadoId');
      if (!pacienteId) {
        setError("ID do paciente não encontrado. Faça login novamente.");
        return;
      }

      // Criar dados da consulta
      const novaConsulta: Omit<tipoConsulta, 'idConsulta'> = {
        idPaciente: parseInt(pacienteId),
        tipo: tipo, // 'online' ou 'presencial'
        status: "agendada", // Conforme constraint do banco: 'agendada','realizada','ausente','cancelada'
        dataHora: `${data}T${horario}:00` // Formato: YYYY-MM-DDTHH:MM:SS
      };

      // Enviar para API
      await createConsulta(novaConsulta);
      
      setSuccess(" Consulta agendada com sucesso!");
      
      // Limpar formulário
      setTipo("");
      setData("");
      setHorario("");

      // Redirecionar após 2 segundos
      setTimeout(() => {
        navigate("/agendamentos");
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao agendar consulta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="agendar-bg">
      <div className="agendar-banner">
        <button 
          onClick={() => navigate(-1)} 
          className="agendar-back-btn" 
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
        <h2 className="agendar-title">Agendar Consulta</h2>
      </div>
      
      <div className="agendar-content">
        <div className="perfil-card">
          {error && (
            <div className="perfil-error-message">
              {error}
            </div>
          )}

          {success && (
            <div className="perfil-success-message">
              {success}
            </div>
          )}

          <form onSubmit={handleAgendar}>
            <div className="perfil-field">
              <label className="perfil-label">Tipo de Consulta *</label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="perfil-input"
                disabled={loading}
                required
              >
                <option value="">Selecione o tipo de consulta</option>
                {tiposConsulta.map((tipoOpcao) => (
                  <option key={tipoOpcao.value} value={tipoOpcao.value}>
                    {tipoOpcao.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Data da Consulta *</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="perfil-input"
                disabled={loading}
                min={new Date().toISOString().split('T')[0]} // Data mínima é hoje
                required
              />
            </div>

            <div className="perfil-field">
              <label className="perfil-label">Horário *</label>
              <input
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="perfil-input"
                disabled={loading}
                required
              />
              <small className="perfil-field-hint">
                Selecione o horário desejado para sua consulta
              </small>
            </div>

            <div className="perfil-buttons">
              <button 
                type="submit"
                className={`perfil-btn-editar ${loading ? 'perfil-btn-loading' : ''}`}
                disabled={loading}
              >
                {loading ? "Agendando..." : " Agendar Consulta"}
              </button>
              
              <button 
                type="button"
                className="perfil-btn-sair"
                onClick={() => navigate("/agendamentos")}
                disabled={loading}
              >
                Ver Agendamentos
              </button>
            </div>
          </form>
        </div>
      </div>
      <Links />
    </div>
  );
}