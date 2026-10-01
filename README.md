# Carpe Diem - Site de Cabanas Premium

Site premium para apresentação de cabanas em Campo Largo (Paraná) e Benedito Novo (Santa Catarina), com design editorial contemporâneo e foco em experiência visual.

## 🏠 Cabanas

### Paraná - Campo Largo
- **Cabana Romântica com Hidro** (PR 01)
  - 2 hóspedes • 1 quarto • 1 banheiro
  - Nota: 4.92/5 (24 avaliações)
  - Comodidades: banheira de hidromassagem, self check-in, cozinha, Wi-Fi, estacionamento, jacuzzi privativa
  - [Ver no Airbnb](https://www.airbnb.com.br/rooms/1403049730359012341)

- **Cabana Romântica em meio a natureza** (PR 02)
  - 2 hóspedes • 1 quarto • 1 banheiro
  - Nota: 4.96/5 (47 avaliações)
  - Comodidades: banheira/jacuzzi privativa, self check-in, cozinha, Wi-Fi, estacionamento, TV 50"
  - [Ver no Airbnb](https://www.airbnb.com.br/rooms/1073480283238243483)

### Santa Catarina - Benedito Novo
- **Cabana do lago** (SC 01)
  - 2 hóspedes • 1 quarto • 2 camas • 1 banheiro
  - Nota: 5.0/5 (13 avaliações)
  - Comodidades: piscina, self check-in
  - [Ver no Airbnb](https://www.airbnb.com.br/rooms/1502725732524921064)

- **Cabana do Bosque** (SC 02)
  - 2 hóspedes • 1 quarto • 1 cama • 1 banheiro
  - Comodidades: self check-in, região tranquila
  - [Ver no Airbnb](https://www.airbnb.com.br/rooms/1502770501209272623)

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Styling utility-first
- **Framer Motion** - Animações suaves
- **Playfair Display + Inter** - Tipografia premium

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas Next.js
│   ├── blog/              # Blog com posts dinâmicos
│   ├── parana/            # Página do Paraná
│   ├── santa-catarina/   # Página de Santa Catarina
│   └── layout.tsx         # Layout raiz
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LocationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── CabanasSection.tsx
│   ├── CabinCard.tsx
│   ├── CabinGallery.tsx
│   ├── BlogSection.tsx
│   └── FinalCTA.tsx
├── data/                  # Dados centralizados
│   └── cabins.ts         # Informações das cabanas
├── lib/                   # Utilitários
│   └── fonts.ts          # Configuração de fontes
└── types/                 # Definições TypeScript
    └── cabin.ts
```

## 🏗️ Comandos

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Cria uma build de produção otimizada.

### Lint

```bash
npm run lint
```

Verifica o código com ESLint.

### Start

```bash
npm start
```

Inicia o servidor de produção.

## 📝 Adicionar Imagens

**IMPORTANTE:** As imagens reais do Airbnb ainda precisam ser adicionadas.

Para adicionar as fotos reais das cabanas do Airbnb, consulte o arquivo [IMAGES.md](./IMAGES.md) para instruções detalhadas.

Estrutura de diretórios já criada:
- `public/images/cabins/parana/pr-01/`
- `public/images/cabins/parana/pr-02/`
- `public/images/cabins/santa-catarina/sc-01/`
- `public/images/cabins/santa-catarina/sc-02/`

Cada pasta contém um arquivo `INSTRUCTIONS.txt` com instruções específicas.

## 🎨 Design

O site segue uma estética premium e editorial com:
- Paleta de cores baseada na natureza (off-white, areia, bege, madeira)
- Tipografia sofisticada (serif para títulos, sans-serif para corpo)
- Animações sutis com Framer Motion
- Layouts assimétricos e editoriais
- Foco em fotografia e espaçamento generoso

## 📄 Páginas

- **/** - Home com hero cinematográfico e apresentação das localizações
- **/parana** - Página das cabanas de Campo Largo, Paraná
- **/santa-catarina** - Página das cabanas de Benedito Novo, Santa Catarina
- **/parana/cabana-01** - Cabana Romântica com Hidro individual
- **/parana/cabana-02** - Cabana Romântica em meio a natureza individual
- **/santa-catarina/cabana-01** - Cabana do lago individual
- **/santa-catarina/cabana-02** - Cabana do Bosque individual
- **/blog** - Blog com posts editoriais
- **/blog/[slug]** - Página individual de post

## 🎯 Próximos Passos

1. ✅ Configurar dados reais das cabanas (NOMES, LOCALIZAÇÕES, COMODIDADES)
2. ✅ Criar estrutura de diretórios para imagens
3. ⏳ **ADICIONAR FOTOS REAIS DO AIRBNB** (veja IMAGES.md)
4. ⏳ Personalizar textos conforme necessário
5. ⏳ Adicionar favicon personalizado
6. ⏳ Configurar deploy em produção

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1440px+)
- Laptop (1280px, 1024px)
- Tablet (768px)
- Mobile (430px, 390px, 375px)

## ♿ Acessibilidade

- HTML semântico
- Navegação por teclado
- Contraste adequado
- Suporte a reduced motion
- Aria labels quando necessário

## 🚀 Deploy

O projeto está pronto para deploy em Vercel ou qualquer plataforma que suporte Next.js.

## 📌 Importante

- **SEM WHATSAPP** - O site não possui botão de WhatsApp conforme solicitado pelo cliente
- **CTA Principal** - "Reservar no Airbnb" aponta para cada anúncio específico
- **Dados Reais** - Utiliza informações reais dos anúncios (nomes, localizações, comodidades, avaliações)
- **Fotografias** - Estrutura pronta para receber fotos reais do Airbnb
