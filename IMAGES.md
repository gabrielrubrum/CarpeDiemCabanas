# Imagens do Site - Instruções para Adicionar Fotos do Airbnb

## Status: PRECISA ADICIONAR IMAGENS REAIS

O site está configurado e pronto para receber as fotografias reais das cabanas do Airbnb.
A estrutura de diretórios já foi criada, mas as imagens ainda não foram adicionadas.

## Estrutura de Diretórios Criada

```
public/
└── images/
    └── cabins/
        ├── parana/
        │   ├── pr-01/
        │   │   ├── INSTRUCTIONS.txt (instruções detalhadas)
        │   │   ├── cover.webp (ADICIONAR)
        │   │   ├── 01.webp (ADICIONAR)
        │   │   ├── 02.webp (ADICIONAR)
        │   │   ├── 03.webp (ADICIONAR)
        │   │   ├── 04.webp (ADICIONAR)
        │   │   └── 05.webp (ADICIONAR)
        │   └── pr-02/
        │       ├── INSTRUCTIONS.txt (instruções detalhadas)
        │       ├── cover.webp (ADICIONAR)
        │       ├── 01.webp (ADICIONAR)
        │       ├── 02.webp (ADICIONAR)
        │       ├── 03.webp (ADICIONAR)
        │       ├── 04.webp (ADICIONAR)
        │       └── 05.webp (ADICIONAR)
        └── santa-catarina/
            ├── sc-01/
            │   ├── INSTRUCTIONS.txt (instruções detalhadas)
            │   ├── cover.webp (ADICIONAR)
            │   ├── 01.webp (ADICIONAR)
            │   ├── 02.webp (ADICIONAR)
            │   ├── 03.webp (ADICIONAR)
            │   ├── 04.webp (ADICIONAR)
            │   └── 05.webp (ADICIONAR)
            └── sc-02/
                ├── INSTRUCTIONS.txt (instruções detalhadas)
                ├── cover.webp (ADICIONAR)
                ├── 01.webp (ADICIONAR)
                ├── 02.webp (ADICIONAR)
                ├── 03.webp (ADICIONAR)
                ├── 04.webp (ADICIONAR)
                └── 05.webp (ADICIONAR)
```

## Como Adicionar as Imagens

### Passo 1: Acesse os Anúncios do Airbnb

**PARANÁ - Campo Largo**
- PR 01: https://www.airbnb.com.br/rooms/1403049730359012341
  - Nome: Cabana Romântica com Hidro
- PR 02: https://www.airbnb.com.br/rooms/1073480283238243483
  - Nome: Cabana Romântica em meio a natureza

**SANTA CATARINA - Benedito Novo**
- SC 01: https://www.airbnb.com.br/rooms/1502725732524921064
  - Nome: Cabana do lago
- SC 02: https://www.airbnb.com.br/rooms/1502770501209272623
  - Nome: Cabana do Bosque

### Passo 2: Baixe as Fotos

Para cada cabana:

1. Navegue pela galeria de fotos do anúncio
2. Identifique a foto principal (primeira foto do anúncio)
3. Baixe a foto principal e salve como `cover.webp` na pasta correspondente
4. Baixe as melhores fotos subsequentes e salve como `01.webp`, `02.webp`, etc.
5. Use preferencialmente formato WebP para melhor performance
6. Se não conseguir converter para WebP, use JPG de alta qualidade

### Passo 3: Critérios de Seleção

**Para COVER (cover.webp):**
- Use a foto que mostre a cabana claramente
- Boa iluminação
- Mostre a arquitetura
- Mostre integração com natureza
- Composição horizontal quando possível
- Evite fotos muito escuras

**Para GALERIA (01.webp, 02.webp, etc.):**
- Varie os ângulos (interior, exterior, detalhes)
- Evite fotos repetidas
- Mostre diferentes áreas da cabana
- Inclua fotos de comodidades (jacuzzi, cozinha, etc.)

### Passo 4: Otimização

- Tamanho ideal: 1920x1080px ou maior
- Compressão: moderada (qualidade 80-90%)
- Não estique ou distorça as imagens
- Mantenha o aspect ratio original

## Dados das Cabanas (Já Configurados)

### PR 01 - Cabana Romântica com Hidro
- Local: Campo Largo, Paraná
- Capacidade: 2 hóspedes
- Quarto: 1
- Cama: 1 cama queen
- Banheiro: 1
- Nota: 4.92/5 (24 avaliações)
- Comodidades: banheira de hidromassagem, self check-in, região tranquila, cozinha, Wi-Fi, estacionamento gratuito, jacuzzi privativa

### PR 02 - Cabana Romântica em meio a natureza
- Local: Campo Largo, Paraná
- Capacidade: 2 hóspedes
- Quarto: 1
- Cama: 1 cama queen
- Banheiro: 1
- Nota: 4.96/5 (47 avaliações)
- Comodidades: banheira/jacuzzi privativa, self check-in, ambiente tranquilo, cozinha, Wi-Fi, estacionamento gratuito, TV de 50 polegadas

### SC 01 - Cabana do lago
- Local: Benedito Novo, Santa Catarina
- Capacidade: 2 hóspedes
- Quarto: 1
- Camas: 2
- Banheiro: 1
- Nota: 5.0/5 (13 avaliações)
- Comodidades: piscina, self check-in, região tranquila

### SC 02 - Cabana do Bosque
- Local: Benedito Novo, Santa Catarina
- Capacidade: 2 hóspedes
- Quarto: 1
- Cama: 1
- Banheiro: 1
- Comodidades: self check-in, região tranquila

## Verificação

Depois de adicionar as imagens:

1. Verifique se cada pasta tem pelo menos 6 imagens (cover + 01-05)
2. As imagens devem estar em formato .webp ou .jpg
3. Nomes devem seguir exatamente o padrão especificado
4. Teste o site para verificar se as imagens aparecem corretamente

## Performance

O site está configurado com:
- Next.js Image optimization
- Lazy loading
- Responsive images
- Tamanhos adequados para cada breakpoint

Ao adicionar imagens reais, o site se beneficiará automaticamente dessas otimizações.

## Links Airbnb Configurados

Todos os botões "Reservar no Airbnb" estão configurados para os links corretos:
- PR 01 → https://www.airbnb.com.br/rooms/1403049730359012341
- PR 02 → https://www.airbnb.com.br/rooms/1073480283238243483
- SC 01 → https://www.airbnb.com.br/rooms/1502725732524921064
- SC 02 → https://www.airbnb.com.br/rooms/1502770501209272623
