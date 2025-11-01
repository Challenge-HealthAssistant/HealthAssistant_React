import { useNavigate } from "react-router";
import Links from "../../components/Links/Links";
import { useState, useEffect } from "react";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoConsulta } from "../../types/tipoConsulta";
import { getConsultasByPacienteId, updateConsulta, deleteConsulta } from "../../data/api";
import { IoMdRefresh as Refresh } from "react-icons/io";
import { MdEdit as Edit, MdFreeCancellation  as Cancel } from "react-icons/md";

export default function Agendamentos() {
  const navigate = useNavigate();
  const [proximasConsultas, setProximasConsultas] = useState<tipoConsulta[]>([]);
  const [historicoConsultas, setHistoricoConsultas] = useState<tipoConsulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  
  // Estados para edição
  const [editingConsulta, setEditingConsulta] = useState<tipoConsulta | null>(null);
  const [editForm, setEditForm] = useState({
    tipo: '',
    dataHora: '',
    status: ''
  });
  
  // Estados para confirmação de cancelamento
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [consultaToDelete, setConsultaToDelete] = useState<number | null>(null);

  // Buscar consultas do paciente
  const carregarConsultas = async () => {
    setLoading(true);
    setError("");
    
    try {
      const pacienteId = localStorage.getItem('pacienteLogadoId');
      if (!pacienteId) {
        setError("ID do paciente não encontrado. Faça login novamente.");
        return;
      }

      const consultas = await getConsultasByPacienteId(parseInt(pacienteId));
      
      // Separar consultas futuras e passadas
      const agora = new Date();
      
      const futuras = consultas.filter((consulta: tipoConsulta) => {
        const dataConsulta = new Date(consulta.dataHora);
        return dataConsulta >= agora && (consulta.status === 'agendada'); // Conforme banco de dados
      }).sort((a: tipoConsulta, b: tipoConsulta) => new Date(a.dataHora).getTime() - new Date(b.dataHora).getTime());
      
      const passadas = consultas.filter((consulta: tipoConsulta) => {
        const dataConsulta = new Date(consulta.dataHora);
        return dataConsulta < agora || consulta.status === 'realizada' || consulta.status === 'cancelada' || consulta.status === 'ausente';
      }).sort((a: tipoConsulta, b: tipoConsulta) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime());
      
      setProximasConsultas(futuras);
      setHistoricoConsultas(passadas.slice(0, 10)); // Limitar histórico a 10 itens
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar consultas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarConsultas();
  }, []);

  // Função para forçar atualização (pode ser chamada quando voltar de outras telas)
  const handleRefresh = () => {
    carregarConsultas();
  };

  // Função para iniciar edição
  const handleEditClick = (consulta: tipoConsulta) => {
    setEditingConsulta(consulta);
    setEditForm({
      tipo: consulta.tipo,
      dataHora: consulta.dataHora,
      status: consulta.status
    });
  };

  // Função para cancelar edição
  const handleCancelEdit = () => {
    setEditingConsulta(null);
    setEditForm({
      tipo: '',
      dataHora: '',
      status: ''
    });
  };

  // Função para salvar edição
  const handleSaveEdit = async () => {
    if (!editingConsulta) return;

    try {
      setLoading(true);
      await updateConsulta(editingConsulta.idConsulta, {
        tipo: editForm.tipo,
        dataHora: editForm.dataHora,
        status: editForm.status
      });
      
      handleCancelEdit();
      await carregarConsultas(); // Recarregar lista
      setError(""); // Limpar erros
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao atualizar consulta");
    } finally {
      setLoading(false);
    }
  };

  // Função para iniciar processo de cancelamento
  const handleDeleteClick = (idConsulta: number) => {
    setConsultaToDelete(idConsulta);
    setShowDeleteConfirm(true);
  };

  // Função para confirmar cancelamento
  const handleConfirmDelete = async () => {
    if (!consultaToDelete) return;

    try {
      setLoading(true);
      await deleteConsulta(consultaToDelete);
      await carregarConsultas(); // Recarregar lista
      setError(""); // Limpar erros
      setShowDeleteConfirm(false);
      setConsultaToDelete(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cancelar consulta");
    } finally {
      setLoading(false);
    }
  };

  // Função para cancelar o cancelamento
  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setConsultaToDelete(null);
  };

  return (
    <div className="agendamentos">
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
        <h2 className="agendar-title">Agendamentos</h2>
      </div>
      
      {/* Botão de atualizar mais amigável */}
      <div className="agendamentos-refresh-container">
        <button 
          onClick={handleRefresh}
          className="agendamentos-refresh-btn-friendly"
          disabled={loading}
        >
          <Refresh className={loading ? 'refresh-spinning' : ''} />
          <span>{loading ? 'Atualizando...' : 'Atualizar consultas'}</span>
        </button>
      </div>
      
      <div className="agendamentos-content">
        {loading && (
          <div className="perfil-loading">
            Carregando consultas...
          </div>
        )}

        {error && (
          <div className="perfil-error-message">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Próximas Consultas */}
            <div className="agendamentos-section">
              <h3 className="agendamentos-section-title">Próximas consultas</h3>
              {proximasConsultas.length > 0 ? (
                <div className="consultas-list">
                  {proximasConsultas.map(consulta => (
                    <div key={consulta.idConsulta} className="consulta-card">
                      <div className="consulta-header">
                        <div className="consulta-type-badge">
                          {consulta.tipo === 'online' ? 'Online' : 'Presencial'}
                        </div>
                        <div className="consulta-actions">
                          <button 
                            onClick={() => handleEditClick(consulta)}
                            className="btn-edit"
                            title="Editar consulta"
                          >
                            <Edit />
                          </button>
                          <button 
                            onClick={() => handleDeleteClick(consulta.idConsulta)}
                            className="btn-delete"
                            title="Cancelar consulta"
                          >
                            <Cancel />
                          </button>
                        </div>
                      </div>
                      <div className="consulta-info">
                        <div className="consulta-date">
                          <strong>Data:</strong> {new Date(consulta.dataHora).toLocaleDateString('pt-BR', {
                            weekday: 'long',
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="consulta-time">
                          <strong>Horário:</strong> {new Date(consulta.dataHora).toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                        <div className="consulta-status">
                          <strong>Status:</strong> <span className="status-badge">Agendada</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-consultas-message">
                  <p>Você não possui consultas agendadas</p>
                </div>
              )}
            </div>

            {/* Histórico */}
            <div className="agendamentos-recent">
              <div className="agendamentos-recent-title">Histórico de consultas</div>
              {historicoConsultas.length > 0 ? (
                <div className="agendamentos-card-text">
                  {historicoConsultas.slice(0, 3).map(consulta => (
                    <div key={consulta.idConsulta} className="agendamentos-card-text">
                      {new Date(consulta.dataHora).toLocaleDateString('pt-BR')} - 
                      {consulta.tipo === 'online' ? ' Online' : ' Presencial'} 
                      ({consulta.status === 'realizada' ? 'Realizada' : 
                        consulta.status === 'cancelada' ? 'Cancelada' : 
                        consulta.status === 'ausente' ? 'Ausente' : consulta.status})
                    </div>
                  ))}
                </div>
              ) : (
                "Você não possui histórico de consultas"
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal de Edição */}
      {editingConsulta && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Editar Consulta</h3>
              <button onClick={handleCancelEdit} className="modal-close">×</button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="tipo">Tipo de Consulta:</label>
                <select 
                  id="tipo"
                  value={editForm.tipo}
                  onChange={(e) => setEditForm({...editForm, tipo: e.target.value})}
                  className="form-input"
                >
                  <option value="online">Online (Telemedicina)</option>
                  <option value="presencial">Presencial</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="dataHora">Data e Hora:</label>
                <input 
                  type="datetime-local"
                  id="dataHora"
                  value={editForm.dataHora.slice(0, 16)} // Formato para datetime-local
                  onChange={(e) => setEditForm({...editForm, dataHora: e.target.value + ':00'})}
                  className="form-input"
                  min={new Date().toISOString().slice(0, 16)} // Não permitir datas passadas
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select 
                  id="status"
                  value={editForm.status}
                  onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                  className="form-input"
                >
                  <option value="agendada">Agendada</option>
                  <option value="realizada">Realizada</option>
                  <option value="cancelada">Cancelada</option>
                  <option value="ausente">Ausente</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                onClick={handleSaveEdit}
                className="btn-save"
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Salvar'}
              </button>
              <button 
                onClick={handleCancelEdit}
                className="btn-cancel"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Cancelamento */}
      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Confirmar Cancelamento</h3>
              <button onClick={handleCancelDelete} className="modal-close">×</button>
            </div>
            
            <div className="modal-body">
              <div className="confirm-message">
                <p>Tem certeza que deseja cancelar esta consulta?</p>
                <p className="confirm-warning">Esta ação não pode ser desfeita.</p>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                onClick={handleConfirmDelete}
                className="btn-delete-confirm"
                disabled={loading}
              >
                {loading ? 'Cancelando...' : 'Sim, cancelar consulta'}
              </button>
              <button 
                onClick={handleCancelDelete}
                className="btn-cancel"
              >
                Não, manter consulta
              </button>
            </div>
          </div>
        </div>
      )}

      <Links />
    </div>
  );
}


