# 🩺 Challenge 2025 - FIAP | HealthAssistant - Sistema de Agendamento para Idosos

> **Sistema de agendamento online de consultas médicas desenvolvido como parte do Challenge 2025 da FIAP em parceria com o Hospital das Clínicas (HC)**

## 📋 Sobre o Challenge

O **Challenge FIAP 2025** é uma iniciativa em parceria com o **Hospital das Clínicas** que visa desenvolver soluções tecnológicas inovadoras para melhorar a experiência de agendamento de consultas médicas, especialmente focado no público idoso.

### 🎯 Problema Identificado
- Dificuldades dos idosos com tecnologia
- Interfaces complexas e não intuitivas
- Falta de acessibilidade em sistemas de saúde
- Necessidade de simplificar o processo de agendamento

### 💡 Solução Proposta
Desenvolvimento de uma interface **acessível, intuitiva e responsiva** que facilite o uso por pessoas idosas, permitindo agendamento, reagendamento e cancelamento de consultas de forma simples e eficiente.

## 🏥 Parceria com Hospital das Clínicas

### 🤝 Colaboração Acadêmico-Empresarial
- **Instituição**: FIAP (Faculdade de Informática e Administração Paulista)
- **Parceiro**: Hospital das Clínicas - São Paulo
- **Objetivo**: Modernização do sistema de agendamentos
- **Foco**: Acessibilidade para terceira idade
- **Período**: 2º Semestre de 2025

### 📊 Impacto Esperado
- Redução do tempo de agendamento
- Diminuição de filas presenciais
- Maior autonomia para pacientes idosos
- Otimização dos recursos hospitalares

---

## 🔄 Evolução do Projeto

### ✅ Migração Completa para React
- **Arquitetura**: Migração de HTML estático para **Single Page Application (SPA)**
- **Tecnologia**: React + Vite + TypeScript
- **Componentização**: Interface modularizada e reutilizável
- **Roteamento**: Sistema de navegação com React Router
- **Estado**: Gerenciamento com hooks (useState, useEffect, useParams)

### 🎨 Melhorias de UX/UI Implementadas
- **Responsividade Total**: Layout adaptável para mobile, tablet e desktop
- **Scroll Otimizado**: Correção de problemas de acessibilidade em telas menores
- **Ícones Interativos**: Botões de voltar com hover effects e troca de ícones
- **Cards Responsivos**: Design otimizado para diferentes resoluções
- **Safe Areas**: Suporte para notch e home indicator em dispositivos móveis

---

## 👥 Equipe de Desenvolvimento

### 🎓 Integrantes - Turma 1TDSPH

| Nome | RM | Turma | GitHub | LinkedIn |
|------|----|----|---------|----------|
| **Pietro Paranhos Wilhelm** | RM561378 | 1TDSPH | [@pietro-paranhos](https://github.com/pietro-paranhos) | [LinkedIn](https://linkedin.com/in/pietro-paranhos) |
| **Leonardo Rodrigues** | RM552417 | 1TDSPH | [@leonardo-fiap](https://github.com/leonardo-fiap) | [LinkedIn](https://linkedin.com/in/leonardo-rodrigues-fiap) |
| **Arthur Silvera** | RM562310 | 1TDSPH | [@arthur-silvera](https://github.com/arthur-silvera) | [LinkedIn](https://linkedin.com/in/arthur-silvera) |

### 📺 Apresentação do Projeto
**Vídeo Demonstrativo**: [https://youtu.be/afc2MyIILwQ](https://youtu.be/afc2MyIILwQ)

### 🏆 Metodologia Challenge
- **Abordagem**: Design Thinking
- **Processo**: Imersão → Ideação → Prototipação → Implementação
- **Validação**: Testes com usuários da terceira idade
- **Iterações**: Melhorias baseadas em feedback real


## 🔗 Repositórios

- **Frontend React**: [HealthAssistant_React](https://github.com/Challenge-HealthAssistant/HealthAssistant_React)
- **Frontend HTML (Legacy)**: [Front-End](https://github.com/Challenge-HealthAssistant/Front-End)
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

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **React** | 18.3.1 | Biblioteca para interfaces de usuário |
| **TypeScript** | 5.5.3 | Tipagem estática e desenvolvimento seguro |
| **Vite** | 5.4.1 | Build tool e servidor de desenvolvimento |
| **React Router** | 6.26.2 | Roteamento e navegação SPA |
| **Tailwind CSS** | - | Framework CSS para estilização responsiva |
| **CSS3** | - | Estilização customizada e animações |
| **Java REST API** | - | Backend para consumo de dados (localhost:8080) |
| **Oracle Database** | - | Banco de dados com constraints e estrutura HC_ |
| **Figma** | - | Protótipos e design system |

### 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

---

## 🚀 Funcionalidades Implementadas

### 🔐 Sistema de Autenticação
- **Login Duplo**: CPF + Data de nascimento ou senha
- **Verificação**: Código de 6 dígitos com validação
- **Cadastro**: Registro de novos usuários
- **Estado Persistente**: Dados salvos no localStorage

### � Navegação e UX
- **Roteamento Dinâmico**: URLs amigáveis com React Router
- **useParams**: Navegação entre perfis (ex: `/perfil/1`, `/perfil/2`)
- **Botões Interativos**: Hover effects com troca de ícones
- **Navegação Responsiva**: Menu inferior fixo

### 👥 Perfil de Usuários
- **Perfil Dinâmico**: Visualização baseada em ID da URL
- **Dados Simulados**: Sistema de usuários mockado
- **Quem Somos**: Cards responsivos da equipe
- **Layout Adaptável**: Design otimizado para mobile/desktop

### 📅 Gestão de Consultas
- **Agendamentos**: Lista de consultas futuras e históricas
- **Agendar**: Interface para novos agendamentos
- **Teleconsulta**: Simulação de consultas online
- **Reagendamento**: Funcionalidade de alteração de datas

### 📄 Resultados e Exames
- **API Integration**: Consumo de dados via REST API Java (localhost:8080)
- **Histórico Dinâmico**: Visualização de exames por ano com dados reais
- **Interface Melhorada**: Cards com bordas coloridas e badges explicativos
- **Resultados Claros**: "DETECTADO", "NÃO DETECTADO", "INCONCLUSIVO" com explicações
- **Dados Completos**: ID, instituição, ficha médica, nome do paciente, data
- **Loading States**: Estados de carregamento e tratamento de erros
- **Cache System**: Sistema de cache para nomes de pacientes

### 🤖 Suporte ao Cliente
- **FAQ Atualizado**: 10 perguntas frequentes organizadas e relevantes
- **Central de Suporte**: Múltiplos canais de atendimento
- **Chat Simulado**: Interface para assistente virtual
- **Integração WhatsApp**: Botões para contato direto
- **FAQs Práticos**: Respostas para remarcar consultas, cancelar exames, horários, etc.
---

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18+ recomendada)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue até a pasta do projeto
cd HealthAssistant_React/HealthAssistant

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Estrutura de Roteamento
```
/                    → Página inicial (Home)
/login               → Login com CPF/Data
/login-senha         → Login com senha
/verificacao         → Código de verificação
/cadastro           → Cadastro de usuário
/perfil/:id         → Perfil dinâmico (useParams)
/quem-somos         → Sobre a equipe
/agenda             → Lista de agendamentos
/agendar            → Nova consulta
/teleconsulta       → Consulta online
/resultados         → Resultados de exames
/faq                → Perguntas frequentes
/suporte            → Central de ajuda
```

---

## 🖼️ Layout no Figma

📌 Protótipo disponível em:  
[🔗 Link do Figma]([https://www.figma.com/...](https://www.figma.com/design/gnBUEYXuQEgixyggxbazjf/Challenge?node-id=0-1&t=g11DerdbeqK0Wvc3-1))

---

## 🗂️ Estrutura do Projeto

```
HealthAssistant/
├── public/
│   └── vite.svg
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Links/           # Menu de navegação inferior
│   │   └── Menu/
│   ├── routes/              # Páginas da aplicação
│   │   ├── Agendamentos/    # Lista de consultas
│   │   ├── Agendar/         # Nova consulta
│   │   ├── Cadastro/        # Registro de usuário
│   │   ├── CodigodeVerificacao/ # Verificação 2FA
│   │   ├── Error/           # Página de erro
│   │   ├── Faq/             # Perguntas frequentes (10 FAQs atualizados)
│   │   ├── Home/            # Página inicial
│   │   ├── Login/           # Login CPF/Data
│   │   ├── LoginComSenha/   # Login com senha
│   │   ├── Perfil/          # Perfil do usuário
│   │   ├── QuemSomos/       # Sobre a equipe
│   │   ├── Resultados/      # Resultados de exames (API integrada)
│   │   ├── Suporte/         # Central de ajuda
│   │   └── Teleconsulta/    # Consulta online
│   ├── img/                 # Assets de imagens
│   ├── data/                # APIs e funções de consumo
│   │   └── api.ts           # Funções para consumo da API Java
│   ├── types/               # Tipos TypeScript
│   │   └── tipoResultadoExame.ts # Interface para resultados de exames
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   ├── global.css           # Estilos globais (sem inline styles)
│   └── vite-env.d.ts        # Tipos do Vite
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Destaques da Implementação

### 🛠️ Melhorias Técnicas Aplicadas
- **API Integration**: Integração completa com backend Java via fetch API
- **CSS Centralizado**: Migração completa de estilos inline para global.css
- **TypeScript Interfaces**: Tipagem forte para dados de exames e pacientes
- **Error Handling**: Tratamento robusto de erros e estados de carregamento
- **Mobile Optimization**: `calc(env(safe-area-inset-bottom) + 2rem)` para dispositivos iOS
- **Scroll Management**: `h-screen` + `overflow-hidden/auto` para controle preciso
- **State Management**: useState hooks para hover states e cache de dados
- **Icon System**: Troca dinâmica voltar.png ↔ voltarVerde.png
- **UX Improvements**: Badges explicativos e textos mais claros para resultados

### 🔧 Padrões de Desenvolvimento
- **Component Architecture**: Componentes funcionais com TypeScript
- **Routing Strategy**: React Router com useParams para navegação dinâmica
- **CSS Architecture**: Classes utilitárias + Tailwind CSS híbrido
- **Responsive Design**: Mobile-first com breakpoints customizados
- **Asset Management**: Organização estruturada de imagens e ícones

### 📚 Metodologias Aplicadas
- **Atomic Design**: Componentização hierárquica (átomos → moléculas → organismos)
- **Mobile-First**: Desenvolvimento priorizando dispositivos móveis
- **Progressive Enhancement**: Funcionalidades básicas funcionam em todos os dispositivos
- **Accessibility First**: WCAG 2.1 guidelines para idosos
- **Git Flow**: Controle de versão com branches organizadas

---

## ⚙️ Requisitos de Acessibilidade

- 📱 **Design Responsivo**: Layout adaptativo para diferentes tamanhos de tela
- 🖱️ **Interatividade**: Botões grandes e áreas de toque ampliadas
- 🎨 **Contraste**: Cores com alto contraste para melhor legibilidade
- 📝 **Tipografia**: Fontes legíveis e tamanhos adequados
- 🔧 **Navegação**: Fluxo intuitivo e consistente entre páginas

---

## � Entregáveis do Challenge

### 📦 Componentes Avaliados
- ✅ **Frontend React**: Interface completa e responsiva
- ✅ **Documentação**: README técnico e funcional
- ✅ **Protótipo Figma**: Design system e wireframes
- ✅ **Vídeo Pitch**: Apresentação da solução (YouTube)
- ✅ **Código Fonte**: Repository GitHub organizado

### 🎯 Critérios de Avaliação
- **Inovação**: Soluções criativas para problemas reais
- **Usabilidade**: Interface intuitiva para idosos
- **Técnica**: Qualidade do código e arquitetura
- **Apresentação**: Clareza na comunicação da solução
- **Impacto**: Potencial de transformação na área da saúde

---

## 🚀 Próximos Passos

### 🔮 Roadmap Futuro
- ✅ **Backend Java**: API REST para resultados de exames (IMPLEMENTADO)
- 🔗 **Expansão APIs**: Consultas, agendamentos e perfil via backend
- 📱 **App Mobile**: Versão nativa iOS/Android
- 🤖 **Chatbot**: Assistente virtual com IA
- 📧 **Notificações**: SMS e WhatsApp automáticos
- 🔐 **Segurança**: Implementação LGPD completa
-

### 🏥 Implementação Real
- Testes piloto com pacientes reais do HC
- Validação com equipe médica
- Integração com sistemas hospitalares existentes
- Treinamento para funcionários

---

## 📌 Observações Importantes

- � **Status**: Projeto acadêmico em desenvolvimento para o Challenge FIAP 2025
- 🔗 **APIs**: Integração com serviços reais será implementada em fases futuras
- 📱 **Dados**: Sistema utiliza dados mockados para demonstração das funcionalidades
- 🎯 **Foco**: Prioridade na experiência do usuário e acessibilidade para terceira idade
- 🏆 **Objetivo**: Competição acadêmica com potencial de implementação real no HC

