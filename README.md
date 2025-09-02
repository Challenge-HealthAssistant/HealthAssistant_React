# 🩺 Challenge 2025 - Front-End | Sistema de Agendamento para Idosos | HealthAssistant_React

Este repositório contém a interface do usuário (front-end) do sistema de agendamento online de consultas médicas, desenvolvido como parte do **Challenge 2025 da FIAP**, em parceria com o **Hospital das Clínicas**.

## Mudanças do projeto
Passagem da aplicação de um projeto estatico HTML para modularização single page em REACT + VITE + TYPESCRIPT

Novo membro no projeto

mais mudanças são pode ocorrer, por enquanto essas são principais

---
🤝 Integrantes do Grupo
Nome	RM	Turma
Pietro Wilhelm	561378	1TDSPH
Leonardo Rodrigues	552417	1TDSPH
Arthur Silvera	562310	1TDSPH

---
Link do Repositorio
https://github.com/Challenge-HealthAssistant/Front-End.git
## 🎯 Objetivo

Desenvolver uma interface **acessível, intuitiva e responsiva** para facilitar o uso por idosos, permitindo:

- Agendamento, reagendamento e cancelamento de consultas (via integração com o backend)
- Acesso ao resultado de exames
- Login por CPF e data de nascimento
- Suporte via FAQ e WhatsApp
- Integração futura com backend Java
- Integração futura com backend Python

---

## 🖥️ Tecnologias Utilizadas

| Tecnologia     | Finalidade                          |
|----------------|-------------------------------------|
| **HTML5**      | Estrutura das páginas               |
| **REACT**      | Single page aplication
| **TYPESCRIPT** |
| **VITE**       |
| **CSS3**       | Estilização e responsividade        |
| **JavaScript** | Interações e validações básicas     |
| **Figma**      | Protótipos e design visual          |

---
### 🔐 Autenticação
- Login via CPF + data de nascimento
- Verificação com código de 6 dígitos (fictício ou via API futuramente)

### 📅 Agenda
- Exibe as consultas agendadas (simulação)
- Permite reagendar ou cancelar uma consulta (Integração futura com backend)

### 📄 Resultados
- Visualiza a ficha médica da última consulta
- Diagnóstico e prescrição simulada

### 🤖 FAQ + Suporte
- Perguntas frequentes embutidas
---

## 🖼️ Layout no Figma

📌 Protótipo disponível em:  
[🔗 Link do Figma]([https://www.figma.com/...](https://www.figma.com/design/gnBUEYXuQEgixyggxbazjf/Challenge?node-id=0-1&t=g11DerdbeqK0Wvc3-1))

---

## 🗂️ Estrutura de Pastas Sugerida

frontend/
├── home.html
├── login-data-nascimento.html
├── login-senha.html
├── verificacao.html
├── quem-somos.html
├── agenda.html
├── agendar.html
├── teleconsulta.html
├── resultado.html
├── perfil.html
├── Faq.html
├── suporte.html
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── README.md
⚙️ Requisitos de Acessibilidade
Tamanhos de fonte ampliados

Botões grandes e fáceis de clicar

Ícones com texto alternativo

Alto contraste de cores

📌 Observações
Este projeto ainda está em desenvolvimento. A integração com APIs reais (ex: envio de código via WhatsApp) será feita nas próximas versões.
Além disso algumas funcionalidades podem ser ou não implementadas no futuro.

