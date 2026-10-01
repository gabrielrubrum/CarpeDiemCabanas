# Deploy na HostGator

## Pré-requisitos

- Acesso SSH ao servidor HostGator
- Node.js instalado no servidor (versão 18+)
- Git instalado no servidor
- Domínio configurado: carpediemcabanas.com.br

## Opção 1: Deploy com Node.js (Recomendado)

### 1. Acessar o servidor via SSH

```bash
ssh usuario@carpediemcabanas.com.br
```

### 2. Criar diretório do projeto

```bash
cd ~/public_html
mkdir carpe-diem
cd carpe-diem
```

### 3. Upload dos arquivos

**Opção A: Via Git (recomendado)**

```bash
git init
git remote add origin https://github.com/SEU-USUARIO/cabana-carpe-diem.git
git pull origin main
```

**Opção B: Via SFTP**

Use FileZilla ou similar para enviar:
- Todos os arquivos do projeto (exceto `node_modules`, `.next`, `.env.local`)
- Pasta `public/` com imagens
- Arquivos de configuração

### 4. Instalar dependências

```bash
npm install --production
```

### 5. Configurar variáveis de ambiente

```bash
nano .env.production
```

Adicionar:

```env
WORDPRESS_API_URL=https://carpediemcabanas.com.br/wp
```

### 6. Build de produção

```bash
npm run build
```

### 7. Configurar PM2 (Process Manager)

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar o aplicativo
pm2 start npm --name "carpe-diem" -- start

# Configurar para iniciar automaticamente
pm2 startup
pm2 save
```

### 8. Configurar Proxy no cPanel/Nginx

**Se usar Nginx:**

Adicionar ao arquivo de configuração:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

**Se usar Apache no cPanel:**

Criar arquivo `.htaccess` na raiz:

```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

### 9. Atualizar o site

```bash
git pull origin main
npm install --production
npm run build
pm2 restart carpe-diem
```

---

## Opção 2: Deploy Estático (Next.js Export)

Se você não quiser rodar Node.js no servidor:

### 1. Adicionar script no package.json

```json
"scripts": {
  "export": "next build && next export"
}
```

### 2. Modificar next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'carpediemcabanas.com.br',
        pathname: '/wp/wp-content/uploads/**',
      },
    ],
  },
};
```

### 3. Gerar build estático

```bash
npm run export
```

### 4. Upload da pasta `out/`

Enviar todo o conteúdo da pasta `out/` para `public_html/` via SFTP.

**⚠️ Limitações do modo estático:**
- Blog dinâmico do WordPress não funcionará (ISG não suportado)
- Revalidação de cache não funcionará
- `/blog/[slug]` será gerado estático apenas no build

---

## Arquivos para NÃO enviar

- `node_modules/`
- `.next/`
- `.env.local` (contém segredos locais)
- `.git/`
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `IMAGES.md`
- `RESUMO_IMPLEMENTACAO.md`
- `WORDPRESS_SETUP.md`
- `DEPLOY_HOSTGATOR.md` (este arquivo)

## Arquivos para enviar

- Todos os arquivos TypeScript/JSX
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tailwind.config.ts`
- `tsconfig.json`
- `public/` (todas as imagens)
- `.env.example` (como referência)

## Configurar WordPress na HostGator

O WordPress já está instalado em:
https://carpediemcabanas.com.br/wp

Certifique-se de que:

1. Permalinks estão configurados: `/wp-admin/options-permalink.php`
2. Selecionar "Estrutura personalizada" e usar: `/%year%/%monthnum%/%day%/%postname%/`
3. API REST está acessível: `https://carpediemcabanas.com.br/wp/wp-json/`

## Variáveis de Ambiente no Servidor

No servidor, criar `.env.production`:

```env
WORDPRESS_API_URL=https://carpediemcabanas.com.br/wp
```

**NÃO colocar:**
- Senhas do WordPress
- Senhas do banco de dados
- Tokens de API privados

## Verificação Pós-Deploy

Após o deploy, verificar:

1. [ ] Site carrega em https://carpediemcabanas.com.br
2. [ ] Imagens das cabanas aparecem
3. [ ] Blog mostra posts do WordPress
4. [ ] Links funcionam corretamente
5. [ ] Footer aparece com ícones
6. [ ] Navegação funciona
7. [ ] Reservar direciona para Airbnb

## Monitoramento com PM2

```bash
# Ver status
pm2 status

# Ver logs
pm2 logs carpe-diem

# Reiniciar
pm2 restart carpe-diem

# Parar
pm2 stop carpe-diem
```

## Troubleshooting

### Erro: Porta 3000 já em uso

```bash
pm2 list
pm2 delete <id-do-processo>
pm2 start npm --name "carpe-diem" -- start
```

### Erro: Módulos não encontrados

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: Imagens não carregam

Verifique se `next.config.ts` tem os `remotePatterns` corretos configurados.

### Erro: Blog não atualiza

Verifique se `WORDPRESS_API_URL` está correto no `.env.production` e se a API do WordPress está acessível.

---

## Suporte HostGator

- Painel cPanel: https://cpanel.carpediemcabanas.com.br
- Documentação: https://www.hostgator.com/help
- Suporte via chat/ticket no painel
