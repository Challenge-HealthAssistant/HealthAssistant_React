import { useState } from "react";

export default function Cadastro() {
  const [sexo, setSexo] = useState("Masculino");

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
        />
        <input
          placeholder="CPF"
          className="cadastro-input"
        />
        <input
          placeholder="Data de nascimento"
          className="cadastro-input"
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
          className="cadastro-input-last"
        />
        <button className="cadastro-button-primary">
          Cadastrar
        </button>
        <button className="cadastro-button-secondary">
          Voltar
        </button>
      </div>
    </div>
  );
}