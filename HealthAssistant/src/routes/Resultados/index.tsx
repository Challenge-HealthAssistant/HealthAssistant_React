import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Links from "../../components/Links/Links";
import voltar from "../../img/voltar.png";
import voltarVerde from "../../img/botao-voltar-verde.png";
import type { tipoResultadoExame } from "../../types/tipoResultadoExame";
import { getResultadosByPacienteId, getPacienteById } from "../../data/api";

export default function Resultados() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [resultados, setResultados] = useState<tipoResultadoExame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [nomesPacientes, setNomesPacientes] = useState<Record<number, string>>({});

  // Função para buscar o nome do paciente pelo ID via API
  const getNomePaciente = async (idPaciente: number): Promise<string> => {
    // Verificar se já temos o nome em cache
    if (nomesPacientes[idPaciente]) {
      return nomesPacientes[idPaciente];
    }

    try {
      const paciente = await getPacienteById(idPaciente);
      const nome = paciente.nome || `Paciente ID ${idPaciente}`;
      
      // Armazenar no cache
      setNomesPacientes(prev => ({
        ...prev,
        [idPaciente]: nome
      }));
      
      return nome;
    } catch (error) {
      console.error(`Erro ao buscar paciente ${idPaciente}:`, error);
      return `Paciente ID ${idPaciente}`;
    }
  };

  // Função para buscar o nome do paciente de forma síncrona (para renderização)
  const getNomePacienteSync = (idPaciente: number): string => {
    return nomesPacientes[idPaciente] || `Carregando...`;
  };

  // Agrupar resultados por ano
  const resultadosAgrupados = resultados.reduce((acc, exame) => {
    const ano = new Date(exame.dataResultado).getFullYear();
    if (!acc[ano]) {
      acc[ano] = [];
    }
    acc[ano].push(exame);
    return acc;
  }, {} as Record<number, tipoResultadoExame[]>);

  // Carregar resultados do paciente
  const carregarResultados = async () => {
    setLoading(true);
    setError("");
    
    try {
      const pacienteId = localStorage.getItem('pacienteLogadoId');
      if (!pacienteId) {
        setError("ID do paciente não encontrado. Faça login novamente.");
        return;
      }

      const resultadosExames = await getResultadosByPacienteId(parseInt(pacienteId));
      setResultados(resultadosExames);

      // Buscar nomes dos pacientes únicos
      const idsUnicos = [...new Set(resultadosExames.map(exame => exame.idPaciente))];
      
      for (const id of idsUnicos) {
        await getNomePaciente(id);
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar resultados");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarResultados();
  }, []);

  return (
    
    <div className="resultados">
      
      
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
        <h2 className="agendar-title">Resultados</h2>
      </div>
      
      <div className="resultados-content">
        {loading && (
          <div className="resultados-loading">
            <p>Carregando resultados de exames...</p>
          </div>
        )}

        {error && (
          <div className="resultados-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {Object.keys(resultadosAgrupados).length > 0 ? (
              Object.keys(resultadosAgrupados)
                .sort((a, b) => parseInt(b) - parseInt(a)) // Ordenar anos (mais recente primeiro)
                .map((ano) => (
                  <div key={ano} className="resultados-year-group">
                    <div className="text-center mb-4">
                      <h3 className="resultados-year-title">{ano}</h3>
                    </div>
                    {resultadosAgrupados[parseInt(ano)].map((exame) => (
                      <div
                        key={exame.idResultado}
                        className="resultados-exam-card"
                      >
                        {/* Título Principal - Ficha Médica */}
                        <div className="resultados-exam-header">
                          <div>
                            <h4 className="resultados-exam-title">
                              {exame.fichaMedica}
                            </h4>
                          </div>
                          <div className="resultados-resultado-container">
                            <span className="resultados-resultado-label">Resultado:</span>
                            <span className={`resultado-badge resultado-${exame.descricaoResultado.toLowerCase()}`}>
                              {exame.descricaoResultado === 'positivo' ? 'DETECTADO' : 
                               exame.descricaoResultado === 'negativo' ? 'NÃO DETECTADO' : 
                               exame.descricaoResultado === 'inconclusivo' ? 'INCONCLUSIVO' : 
                               exame.descricaoResultado.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {/* Explicação do Resultado */}
                        <div className="resultados-exam-explicacao">
                          <strong>Resultado:</strong> {
                            exame.descricaoResultado === 'positivo' ? 'Detectado - O exame identificou a presença do que estava sendo investigado' :
                            exame.descricaoResultado === 'negativo' ? 'Não Detectado - O exame não identificou a presença do que estava sendo investigado' :
                            exame.descricaoResultado === 'inconclusivo' ? 'Inconclusivo - O resultado não foi claro, pode ser necessário repetir o exame' :
                            `${exame.descricaoResultado} - Consulte seu médico para mais informações`
                          }
                        </div>

                        {/* Sumário dos Dados */}
                        <div className="resultados-exam-info">
                          <strong>Paciente:</strong> {getNomePacienteSync(exame.idPaciente)}
                        </div>
                        <div className="resultados-exam-info">
                          <strong>Instituição:</strong> {exame.instituicao}
                        </div>
                        <div className="resultados-exam-info">
                          <strong>Ficha:</strong> {exame.fichaMedica}
                        </div>
                        <div className="resultados-exam-info">
                          <strong>Data:</strong> {new Date(exame.dataResultado).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
            ) : (
              <div className="no-resultados">
                <p>Nenhum resultado de exame encontrado.</p>
              </div>
            )}
          </>
        )}
      </div>
      <Links />
    </div>
  );
}