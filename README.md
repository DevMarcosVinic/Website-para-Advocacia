# 🏛️ Website para Advocacia

Uma aplicação web moderna e responsiva desenvolvida para trabalhos de advocacia com um sistema de design profissional e uma biblioteca abrangente de componentes de UI.

## 📋 Visão Geral

Esta website foi projetada para apoiar trabalhos de advocacia através de uma interface intuitiva e acessível. Construída com tecnologias de ponta e padrões modernos de UI, este projeto demonstra as melhores práticas em desenvolvimento web para aplicações profissionais.

## ✨ Principais Características

### Interface de Usuário
- **Componentes Ricos**: Extensa coleção de componentes de UI acessíveis alimentados por Radix UI e Material-UI
- **Design Responsivo**: Layouts responsivos bonitos e mobile-first usando Tailwind CSS
- **Suporte a Temas**: Alternância entre temas escuro e claro com `next-themes`
- **Animações Fluidas**: Animações suaves alimentadas pelo framework Motion

### Funcionalidades Avançadas
- **Formulários Interativos**: Manipulação avançada de formulários com `react-hook-form` e suporte a OTP
- **Visualização de Dados**: Integração com Recharts para análise de dados abrangente e relatórios
- **Arraste e Solte**: Recursos completos de arrastar e soltar usando `react-dnd`
- **Navegação**: Roteamento do lado do cliente com React Router v7
- **Componentes Ricos**: Carrosséis, calendários, seletores de data e layouts em alvenaria
- **Acessibilidade**: Construído com princípios de design inclusivo e padrões WCAG

### Componentes Especializados
- **Componentes de Formulário**: Inputs OTP, selects avançados, toggles
- **Componentes de Diálogo**: Modais, alertas, popovers
- **Componentes de Layout**: Separadores, abas, painéis redimensionáveis
- **Componentes de Feedback**: Toasts, barras de progresso, spinners

## 🛠️ Stack Tecnológico

| Categoria | Tecnologia | Versão |
|-----------|-----------|--------|
| **Framework Frontend** | React | 18.3.1 |
| **Ferramenta de Build** | Vite | 6.3.5 |
| **Styling** | Tailwind CSS | 4.1.12 |
| **Pré-processador CSS** | PostCSS | Latest |
| **Bibliotecas de UI** | Radix UI | Latest |
| **Design Material** | Material-UI (MUI) | 7.3.5 |
| **Roteamento** | React Router | 7.13.0 |
| **Gerenciamento de Formulários** | React Hook Form | 7.55.0 |
| **Gráficos** | Recharts | 2.15.2 |
| **Animações** | Motion | 12.23.24 |
| **Ícones** | Lucide React | 0.487.0 |
| **Arrastamento** | React DnD | 16.0.1 |
| **Manipulação de Datas** | date-fns | 3.6.0 |
| **CSS-in-JS** | Emotion | 11.14.x |
| **Gerenciador de Pacotes** | pnpm | Latest |

## 📊 Composição de Linguagens

- **TypeScript**: 97.4% 🎯 - Segurança de tipo forte em toda a aplicação
- **CSS**: 2.3% 🎨 - Estilo baseado em Tailwind
- **Outros**: 0.3%

## 🚀 Iniciando

### Pré-requisitos

- **Node.js** (v18 ou superior)
- **pnpm** (recomendado) ou npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/DevMarcosVinic/Website-para-Advocacia.git

# Navegar para o diretório do projeto
cd Website-para-Advocacia

# Instalar dependências com pnpm (recomendado)
pnpm install

# Ou com npm
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Ou com npm
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

O servidor de desenvolvimento oferece:
- ⚡ Hot Module Replacement (HMR) para atualizações instantâneas
- 🔍 Console do navegador com informações detalhadas
- 📱 Prévia responsiva

### Build para Produção

```bash
# Criar build otimizado para produção
pnpm build

# Ou com npm
npm run build
```

A pasta `dist/` conterá os arquivos otimizados prontos para deploy.

### Pré-visualizar Build de Produção (opcional)

```bash
pnpm preview
```

## 📁 Estrutura do Projeto

```
Website-para-Advocacia/
│
├── src/                          # Arquivos fonte
│   ├── components/              # Componentes React reutilizáveis
│   ├── pages/                   # Páginas principais
│   ├── styles/                  # Arquivos de estilo global
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Funções utilitárias
│   ├── types/                   # Definições TypeScript
│   └── App.tsx                  # Componente raiz
│
├── guidelines/                  # Guias de desenvolvimento e padrões
│   ├── ARCHITECTURE.md          # Padrões arquiteturais
│   ├── CODE_STYLE.md            # Guia de estilo de código
│   └── COMPONENTS.md            # Documentação de componentes
│
├── public/                      # Arquivos estáticos
│
├── index.html                   # Arquivo HTML de entrada
├── vite.config.ts              # Configuração do Vite
├── postcss.config.mjs            # Configuração do PostCSS
├── tailwind.config.ts           # Configuração do Tailwind CSS
├── tsconfig.json               # Configuração TypeScript
├── package.json                # Dependências do projeto
├── pnpm-lock.yaml              # Versões bloqueadas das dependências
├── .gitignore                  # Arquivos ignorados pelo Git
├── ATTRIBUTIONS.md             # Atribuições a terceiros
├── README.md                   # Este arquivo
└── LICENSE                     # Licença do projeto
```

## 🎨 Dependências Principais

### Componentes de UI & Estilo
```typescript
// Primitivos de componentes UI sem headless
import * as Accordion from "@radix-ui/react-accordion"
import * as Dialog from "@radix-ui/react-dialog"

// Componentes Material Design
import { Button, Card, TextField } from "@mui/material"

// Tailwind CSS para utilitários
import clsx from "clsx"
import { cn } from "@/utils/cn"
```

### Funcionalidades Interativas
```typescript
// Formulários
import { useForm } from "react-hook-form"

// Arrastar e soltar
import { useDrag, useDrop } from "react-dnd"

// Gráficos
import { LineChart, BarChart, PieChart } from "recharts"

// Ícones
import { Heart, Star, Settings } from "lucide-react"

// Manipulação de datas
import { format, parseISO, addDays } from "date-fns"
```

### Temas e Acessibilidade
```typescript
// Tema dinâmico
import { ThemeProvider, useTheme } from "next-themes"

// Estilo CSS-in-JS
import styled from "@emotion/styled"
```

## 🔧 Arquivos de Configuração

### vite.config.ts
Configuração do bundler Vite com suporte a React e otimizações de build.

### postcss.config.mjs
Pipeline de processamento CSS com:
- Tailwind CSS
- Autoprefixer
- Otimizações de produção

### tailwind.config.ts
Tema customizado do Tailwind com:
- Cores personalizadas
- Tipografia
- Temas escuro/claro

### tsconfig.json
Configurações TypeScript com:
- Strict mode habilitado
- Paths aliases para imports
- Suporte a JSX

## 📝 Scripts Disponíveis

```json
{
  "dev": "vite",                    // Inicia servidor de desenvolvimento
  "build": "vite build",            // Build para produção
  "preview": "vite preview",        // Pré-visualiza o build
  "type-check": "tsc --noEmit"    // Verifica tipos TypeScript
}
```

## 📚 Documentação

### Guidelines de Desenvolvimento
Consulte a pasta `guidelines/` para:

- **ARCHITECTURE.md** - Padrões e estrutura da arquitetura
- **CODE_STYLE.md** - Convenções de código e formatação
- **COMPONENTS.md** - Guia de componentes e best practices

### Usar Componentes Existentes

```typescript
import { Button } from "@/components/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card"
import { Input } from "@/components/Input"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meu Componente</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Digite aqui..." />
        <Button>Enviar</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎯 Melhores Práticas

### TypeScript
- ✅ Use tipos explícitos em funções e variáveis
- ✅ Evite `any` - use `unknown` se necessário
- ✅ Crie interfaces para dados estruturados

### React
- ✅ Use hooks funcionais (não componentes de classe)
- ✅ Memorie callbacks com `useCallback` se necessário
- ✅ Extraia componentes grandes em menores

### Estilo
- ✅ Use classes Tailwind CSS como primeiro recurso
- ✅ Para estilos complexos, use Emotion
- ✅ Mantenha a consistência com o design system

### Acessibilidade
- ✅ Use componentes Radix UI para widgets complexos
- ✅ Adicione `aria-labels` quando necessário
- ✅ Teste com leitores de tela

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o repositório
   ```bash
   git clone https://github.com/seu-usuario/Website-para-Advocacia.git
   ```

2. **Crie uma branch** para sua feature
   ```bash
   git checkout -b feature/MeuRecurso
   ```

3. **Faça suas alterações** e teste localmente
   ```bash
   pnpm dev
   ```

4. **Commit suas alterações** com mensagens descritivas
   ```bash
   git commit -m "feat: adiciona novo recurso"
   ```

5. **Push para a branch**
   ```bash
   git push origin feature/MeuRecurso
   ```

6. **Abra uma Pull Request** descrevendo suas mudanças

### Diretrizes de Commit

Use o padrão Conventional Commits:
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Alterações em documentação
- `style:` - Formatação de código
- `refactor:` - Refatoração sem alterar funcionalidade
- `test:` - Adição ou alteração de testes
- `chore:` - Alterações de build, dependências, etc.

## 📄 Licença

Este projeto é privado e proprietário. Todos os direitos reservados © 2026 Marcos Vinicius.

Para informações sobre licenciamento, consulte as configurações do repositório.

## 👨‍💻 Autor

**Marcos Vinicius**

- 🔗 [GitHub Profile](https://github.com/DevMarcosVinic)
- 📧 Entrar em contato via GitHub Issues

## 🐛 Reportando Bugs

Se encontrou um bug, por favor:

1. Verifique se o bug já não foi reportado em [Issues](https://github.com/DevMarcosVinic/Website-para-Advocacia/issues)
2. Abra uma nova issue com:
   - Descrição clara do problema
   - Passos para reproduzir
   - Comportamento esperado vs. atual
   - Screenshots (se aplicável)
   - Versão do navegador e SO

## 💡 Sugestões e Melhorias

Tem uma ideia para melhorar o projeto? Abra uma issue com tag `enhancement` descrevendo:
- O problema que resolve
- Solução proposta
- Exemplos de uso

## 🙏 Agradecimentos

### Bibliotecas e Ferramentas
Consulte [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) para atribuições completas a:
- Radix UI
- Material-UI
- Tailwind CSS
- React Router
- E muitas outras...

### Comunidade
Obrigado a todos que contribuem com issues, pull requests e feedback!

## 📞 Suporte e Contato

### Problemas com o Projeto?
- 📖 Consulte a [documentação](#-documentação)
- 🐛 Abra uma [issue no GitHub](https://github.com/DevMarcosVinic/Website-para-Advocacia/issues)
- 💬 Verifique discussions existentes

### Links Úteis
- 📚 [Documentação do React](https://react.dev)
- 🎨 [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- ⚡ [Documentação do Vite](https://vitejs.dev)
- 🧩 [Radix UI Components](https://www.radix-ui.com/docs/primitives/overview/introduction)

## 🎓 Recursos de Aprendizado

### Tutoriais Recomendados
- React Hooks: [React Documentation](https://react.dev/reference/react/hooks)
- TypeScript: [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Tailwind CSS: [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)

### Padrões de Código
Este projeto segue:
- **ESLint** - Análise de código estática
- **Prettier** - Formatação automática
- **TypeScript** - Type checking

## 🔐 Segurança

Se descobrir uma vulnerabilidade de segurança, **não** abra uma issue pública. 
Ao invés disso, envie um email privado para o autor.

## 📈 Status do Projeto

| Aspecto | Status |
|--------|--------|
| **Desenvolvimento** | ✅ Ativo |
| **Manutenção** | ✅ Mantido |
| **Testes** | 🔄 Em desenvolvimento |
| **Documentação** | ✅ Completa |
| **Produção Pronta** | ⏳ Em progresso |

## 🎯 Roadmap

- [x] Setup inicial com Vite + React + TypeScript
- [x] Integração de componentes Radix UI
- [x] Tailwind CSS configurado
- [x] Tema claro/escuro
- [ ] Testes unitários com Vitest
- [ ] E2E com Playwright
- [ ] CI/CD pipeline
- [ ] Deploy automático
- [ ] Storybook para documentação de componentes
- [ ] Performance otimização

## ⭐ Se Gostou do Projeto

Se este projeto foi útil, considere dar uma ⭐ no GitHub!

---

<div align="center">

### Desenvolvido com ❤️ para a comunidade jurídica

[![GitHub followers](https://img.shields.io/github/followers/DevMarcosVinic?style=social)](https://github.com/DevMarcosVinic)

[⬆ Voltar ao topo](#-website-para-advocacia)

**Criado em 2026 por [Marcos Vinicius](https://github.com/DevMarcosVinic)**

</div>
