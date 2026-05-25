# ATLAS — Portfólio Digital

> Suíte de tecnologia estratégica da **Conectcorp** | Porto Velho, Rondônia, Brasil

Site institucional e portfólio de soluções da Atlas, desenvolvido como página estática de alto padrão para apresentação comercial e captação de clientes.

---

## Visão Geral

A Atlas é o eixo de tecnologia estratégica da Conectcorp — uma suíte de sistemas modulares SaaS para governança, gestão de dados e transformação digital de organizações que operam em escala. Este portfólio comunica o posicionamento premium da marca e apresenta o ecossistema de 11+ soluções ativas.

---

## Estrutura do Projeto

```
atlas-portfolio/
├── index.html   # Estrutura semântica completa
├── style.css    # Design system + componentes + responsivo
├── main.js      # Animações, interações e UX
└── README.md    # Este arquivo
```

---

## Tecnologias

- **HTML5** semântico, acessível e otimizado para SEO
- **CSS3** puro — sem frameworks, sem dependências
- **JavaScript** vanilla — sem bibliotecas externas
- **Google Fonts** — Barlow Condensed (display) + Barlow (corpo)

---

## Funcionalidades

- Animações de entrada ao scroll via `IntersectionObserver`
- Navbar com efeito de scroll e link ativo por seção
- Menu hamburguer responsivo para mobile
- Contadores animados na barra de métricas
- Efeito de tilt sutil nos cards de solução (desktop)
- Cursor glow suave que segue o mouse (desktop)
- Scroll suave com offset da navbar fixa
- Design totalmente responsivo (desktop → mobile)

---

## Paleta de Cores

| Token          | Valor                      | Uso                          |
|----------------|----------------------------|------------------------------|
| `--black`      | `#05050a`                  | Background principal         |
| `--surface`    | `#0d0d18`                  | Cards e painéis              |
| `--cyan`       | `#00e5ff`                  | Acento primário / destaques  |
| `--white`      | `#f4f4fa`                  | Texto principal              |
| `--mid`        | `#8888a8`                  | Texto secundário             |
| `--mist`       | `#52526e`                  | Texto terciário / labels     |

---

## Tipografia

| Fonte              | Peso(s)            | Uso                              |
|--------------------|--------------------|----------------------------------|
| Barlow Condensed   | 600 700 800 900    | Títulos, headings, CTAs, nomes   |
| Barlow             | 300 400 500        | Corpo de texto, descrições       |

---

## Como Usar

### Hospedagem Estática

O projeto é 100% estático — nenhum servidor, nenhuma build necessária.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/atlas-portfolio.git

# Abra o index.html no navegador
# — ou sirva localmente com qualquer servidor estático
```

### Com servidor local (opcional)

```bash
# Python 3
python -m http.server 3000

# Node.js (npx)
npx serve .

# VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

---

## Deploy Recomendado

| Plataforma     | Como subir                                                        |
|----------------|-------------------------------------------------------------------|
| **GitHub Pages** | Settings → Pages → Deploy from branch `main` / `root`          |
| **Vercel**       | Importar repositório → Framework: Other → Deploy                |
| **Netlify**      | Arrastar a pasta no dashboard ou conectar ao GitHub             |
| **Cloudflare Pages** | Conectar repo, build command vazio, publish directory `.`   |

---

## Personalização

### Adicionar membros da equipe

No `index.html`, localize a seção `#equipe` e substitua os cards com `.t-avatar--empty`:

```html
<div class="t-card">
  <div class="t-card-bar"></div>
  <div class="t-avatar">XX</div>         <!-- Iniciais -->
  <div class="t-name">Nome Sobrenome</div>
  <div class="t-role">Cargo</div>
  <div class="t-detail">Especialidade · Atlas</div>
</div>
```

### Atualizar status de uma solução

Altere a classe do badge no card correspondente:

```html
<!-- Opções disponíveis: -->
<span class="status s-prod">Produção</span>
<span class="status s-val">Validação</span>
<span class="status s-build">Construção</span>
<span class="status s-idea">Pipeline</span>
```

### Trocar cor de acento

Em `style.css`, linha 7:

```css
--cyan: #00e5ff;  /* Substitua pelo hex desejado */
```

---

## Soluções no Portfólio

| # | Solução            | Status      | URL                                              |
|---|--------------------|-------------|--------------------------------------------------|
| 01 | Gestão Hub        | Validação   | hub.atlasti.tech                                 |
| 02 | Gamifica DF       | Produção    | ava.gamificacop.com.br                           |
| 03 | Gamifica RO       | Produção    | ava.atlasti.tech                                 |
| 04 | Gestão Locação    | Produção    | locloc.atlasti.tech                              |
| 05 | GOV3              | Validação   | atlas.atlasti.tech                               |
| 06 | Atlas Político    | Validação   | atlaspolitico.atlasti.tech                       |
| 07 | Atlas Gov         | Validação   | atlasgov.atlasti.tech                            |
| 08 | Atlas Captação    | Construção  | —                                                |
| 09 | Atlas Urbano      | Pipeline    | —                                                |
| 10 | ConectBot         | Pipeline    | —                                                |
| 11 | Atlas Eventos     | Pipeline    | —                                                |

---

## Equipe

| Nome             | Papel          |
|------------------|----------------|
| Aldo Mello       | Sócio Fundador |
| Kaio Vasconcelos | Sócio          |

---

## Licença

Proprietário — © 2025 Atlas · Conectcorp. Todos os direitos reservados.

Este repositório é privado. O código não pode ser reutilizado, redistribuído ou modificado sem autorização expressa da Conectcorp.
