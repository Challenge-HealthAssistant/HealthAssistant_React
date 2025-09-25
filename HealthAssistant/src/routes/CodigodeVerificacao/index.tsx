import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CodigoVerificacao() {
  const [codigo, setCodigo] = useState<string[]>(Array(6).fill(""));
  const [erro, setErro] = useState("");
  const [avisoNumeros, setAvisoNumeros] = useState("");
  const [numeroTelefone, setNumeroTelefone] = useState("(**) *****-****");
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Pegar dados do paciente logado
    const pacienteId = localStorage.getItem('pacienteLogadoId');
    const pacienteNome = localStorage.getItem('pacienteLogadoNome');
    
    if (pacienteId && pacienteNome) {
      // Simular número baseado no ID do paciente - mostrar primeiros dígitos
      const primeirosDigitos = pacienteId.padStart(4, '0').slice(-4);
      setNumeroTelefone(`(11) 9${primeirosDigitos}-****`);
    }
  }, []);

  function handleInputChange(index: number, value: string) {
    // Limpar avisos anteriores
    setErro("");
    setAvisoNumeros("");
    
    // Verificar se contém apenas números
    if (!/^\d?$/.test(value)) {
      setAvisoNumeros("Digite apenas números de 0 a 9.");
      setTimeout(() => setAvisoNumeros(""), 3000);
      return;
    }
    
    // Atualizar o código
    const novoCodigo = [...codigo];
    novoCodigo[index] = value;
    setCodigo(novoCodigo);
    
    // Auto-navegar para próxima caixa se digitou um número e não é a última caixa
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleVerificar() {
    // Limpar avisos anteriores
    setErro("");
    setAvisoNumeros("");
    
    const codigoCompleto = codigo.join("");
    
    // Validar se código está vazio
    if (!codigoCompleto) {
      setErro("Digite o código de verificação.");
      return;
    }
    
    if (codigoCompleto === "123456") {
      // Código correto, redirecionar para a home
      navigate("/");
    } else {
      // Código incorreto: mostrar erro e limpar caixas
      setErro("Código incorreto. Tente novamente.");
      setCodigo(Array(6).fill(""));
    }
  }

  function handleVoltar() {
    // Voltar para a tela de login
    navigate("/login");
  }

  return (
    <div className="verificacao-container">
      <div className="verificacao-card">
        <h2 className="verificacao-header">
          Verificação de Código
        </h2>
        <label className="verificacao-label">
          Digite o código de verificação enviado no seu número:
        </label>
        <div className="verificacao-phone">
          {numeroTelefone}
        </div>
        <div className="verificacao-inputs-container">
          {codigo.map((valor, i) => (
            <input
              key={i}
              ref={el => { inputsRef.current[i] = el; }}
              maxLength={1}
              value={valor}
              onChange={(e) => handleInputChange(i, e.target.value)}
              className="verificacao-input"
              type="text"
              inputMode="numeric"
              title="number"
            />
          ))}
        </div>
        
        {erro && (
          <div className="verificacao-error">
            {erro}
          </div>
        )}
        
        {avisoNumeros && (
          <div className="verificacao-warning">
            {avisoNumeros}
          </div>
        )}
        <button
          className="verificacao-button-primary"
          onClick={handleVerificar}
        >
          Verificar
        </button>
        <button
          className="verificacao-button-secondary"
          onClick={handleVoltar}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}