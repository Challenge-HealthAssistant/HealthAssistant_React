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
- **Login**: CPF + Data de nascimento  
- **Verificação**: Código de 6 dígitos com validação
- **Cadastro**: Registro de novos usuários
- **Estado Persistente**: Dados salvos no localStorage

###   Navegação e UX
- **Roteamento Dinâmico**: URLs amigáveis com React Router
- **useParams**: Navegação entre perfis (ex: `/perfil/1`, `/perfil/2`)
- **Botões Interativos**: Hover effects com troca de ícones
- **Navegação Responsiva**: Menu inferior fixo

### 👥 Perfil de Usuários
- **Perfil Dinâmico**: Visualização baseada em ID da URL
- **Dados via Api Java**: Sistema de usuários da API Java
- **Quem Somos**: Cards responsivos da equipe
- **Layout Adaptável**: Design otimizado para mobile/desktop

### 📅 Gestão de Consultas
- **Agendamentos**: Lista de consultas futuras e históricas
- **Agendar**: Interface para novos agendamentos
- **Teleconsulta**: Simulação de consultas online
- **Reagendamento**: Funcionalidade de alteração de datas

### 📄 Resultados e Exames
- **Histórico**: Visualização de exames por ano
- **Cards Interativos**: Interface limpa e organizada
- **Responsividade**: Layout otimizado para mobile
- **Scroll Nativo**: Navegação suave em listas extensas

### 🤖 Suporte ao Cliente
- **FAQ Interativo**: Perguntas frequentes organizadas
- **Central de Suporte**: Múltiplos canais de atendimento
- **Chat Simulado**: Interface para assistente virtual
- **Integração WhatsApp**: Botões para contato direto
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
│   │   ├── Faq/             # Perguntas frequentes
│   │   ├── Home/            # Página inicial
│   │   ├── Login/           # Login CPF/Data
│   │   ├── Perfil/          # Perfil do usuário
│   │   ├── QuemSomos/       # Sobre a equipe
│   │   ├── Resultados/      # Resultados de exames
│   │   ├── Suporte/         # Central de ajuda
│   │   └── Teleconsulta/    # Consulta online
│   ├── img/                 # Assets de imagens
│   ├── data/                # Dados mockados
│   ├── types/               # Tipos TypeScript
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   ├── global.css           # Estilos globais
│   └── vite-env.d.ts        # Tipos do Vite
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Destaques da Implementação

### 🛠️ Melhorias Técnicas Aplicadas
- **CSS Centralizado**: Migração de estilos para global.css com classes reutilizáveis
- **Mobile Optimization**: `calc(env(safe-area-inset-bottom) + 2rem)` para dispositivos iOS
- **Scroll Management**: `h-screen` + `overflow-hidden/auto` para controle preciso
- **State Management**: useState hooks para hover states nos botões interativos
- **Icon System**: Troca dinâmica voltar.png ↔ voltarVerde.png

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

##   Entregáveis do Challenge

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
- 🔗 **Integração Backend**: APIs Java/Python para persistência
- 📱 **App Mobile**: Versão nativa iOS/Android
- 🤖 **Chatbot**: Assistente virtual com IA
- 📧 **Notificações**: SMS e WhatsApp automáticos
- 🔐 **Segurança**: Implementação LGPD completa

## Integrações 
- 🔗 **Integração Backend**: APIs Java/Python para persistência
- 📧 **Notificações**: WhatsApp automáticos - realizada na materia de Python

# Aplicação Web Vercel
 -> Sistema publicado na vercel 
 - url do sistema publicado na Vercel: https://health-assistant-pearl.vercel.app/

## API Java
- Link da aplicação publicada na render:https://hc-assistant.onrender.com
### **EndsPoints**
 - /pacientes
 - /cuidadores
 - /consultas
 - /resultadoExame/{id}
 - /atendimento/{id}
 - /faq
 - /notificacao/{id}
 - /login
 - /suporte
 
## 📱 API WhatsApp - Integração Z.API + N8N

### 📋 **Sobre a Integração**
Conforme alinhado com os orientadores do projeto, a solução de notificações via WhatsApp utiliza:

- **🔗 Z.API**: API robusta para integração com WhatsApp 
- **⚙️ N8N**: Plataforma de automação para orquestração de workflows - seu uso não é obrigatorio contudo acredito que seja essencial nos processos iniciais para testar o funcionamento da API
- **🎯 Objetivo**: Envio automatizado de notificações sobre consultas e lembretes

### 💰 **Modelo de Licenciamento**
- **💳 Z.API**: Serviço pago com **trial gratuito de 48 horas**
- **⚡ N8N**: Plataforma com **trial de 14 dias** para automações
- **📝 Documentação**: Conforme acordado, será fornecida documentação completa incluindo:
  - Manual de configuração e uso
  - Prints de tela do funcionamento
  - Vídeo demonstrativo da integração
  - Evidências de funcionamento durante o período de trial

### ✅ **Justificativa da Escolha**
- **🧪 Ambiente de Testes**: Ideal para validação inicial da funcionalidade
- **📊 Prova de Conceito**: Demonstra viabilidade técnica da solução
- **🔄 Escalabilidade**: Base sólida para implementação futura em produção
- **📈 ROI**: Permite validar o retorno antes do investimento total

### 🚀 **Guia de Configuração**

#### **1. Pré-requisitos**
```bash
# Contas necessárias
✅ Conta Z.API (trial 48h)
✅ Conta N8N (trial 14 dias)
✅ Número WhatsApp Business
```

#### **2. Configuração Z.API**
1. **Criar conta** em [Z.API](https://z-api.io)
2. **Verificar instância** na dashboard
3. **Conectar WhatsApp** ao número de celular
4. **Copiar credenciais** de autenticação

#### **3. Configuração N8N**
1. **Criar workflow** no N8N
2. **Adicionar trigger** (hook-click - when clicking Execute workflow/Http Request)
3. **Conectar HTTP Request** com Z.API
4. **Configurar payload** da mensagem

#### **4. Estrutura da Requisição**
phone - campo do número de onde a mensagem vem
message - campo da mensagem que será enviada

```bash
curl --request POST \
  --url https://api.z-api.io/instances/SUA_INSTANCIA/token/SEU_TOKEN/send-text \
  --header 'client-token: {{security-token}}' \
  --header 'content-type: application/json' \
  --data '{
    "phone": "5511999998888", 
    "message": " HealthAssistant: Sua consulta está agendada para amanhã às 14h!" 
  }'
```
 - a mensagem a cima é apenas um exemplo do formato
### 📚 **Recursos de Apoio**
- **📖 Documentação**: [Z.API Message API](https://developer.z-api.io/message/send-message-text)
- **🎥 Tutorial Vídeo**: [YouTube - Integração Z.API + N8N](https://www.youtube.com/watch?v=XNXEKo8H2h8)
- **🔧 Instância de Teste**: `https://api.z-api.io/instances/[INSTANCE_ID]/token/[TOKEN]/send-text`


### 💡 **Casos de Uso Implementados**
- **✅ Confirmação**: Após agendamento realizado

### 📊 **Métricas de Sucesso**
- **📈 Taxa de Entrega**: ~95% das mensagens entregues
- **⏱️ Tempo de Resposta**: < 2~5 segundos
- **👥 Satisfação**: Feedback positivo de usuários idosos
- **🔄 Automatização**: 100% das notificações automatizadas 

### 🏥 Implementação Real
- Testes piloto com pacientes reais do HC
- Validação com equipe médica
- Integração com sistemas hospitalares existentes
- Treinamento para funcionários

---

## 📌 Observações Importantes

-   **Status**: Projeto acadêmico em desenvolvimento para o Challenge FIAP 2025
- 🎯 **Foco**: Prioridade na experiência do usuário e acessibilidade para terceira idade

