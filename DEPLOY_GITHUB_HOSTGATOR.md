# Deploy GitHub Actions + HostGator + WordPress

Este projeto usa Next.js com `output: 'export'`. A HostGator serve apenas arquivos estáticos em `public_html/`, enquanto o WordPress continua em `public_html/wp` e em `https://carpediemcabanas.com.br/wp`.

## Arquitetura

1. Código é alterado localmente.
2. `git push origin main`.
3. GitHub Actions roda `npm ci` e `npm run build`.
4. Next.js consulta o WordPress durante o build.
5. A pasta `out/` é publicada na HostGator.
6. O WordPress em `/wp` não é apagado, movido ou sobrescrito.

## Criar Repositório e Primeiro Push

```bash
git init
git add .
git commit -m "Static export deploy architecture"
git branch -M main
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

Substitua `OWNER/REPO` pelo proprietário e nome reais do repositório.

## GitHub Variables

Crie em `Settings > Secrets and variables > Actions > Variables`:

| Nome | Valor |
| --- | --- |
| `WORDPRESS_API_URL` | `https://carpediemcabanas.com.br/wp` |

## GitHub Secrets

Crie em `Settings > Secrets and variables > Actions > Secrets`:

| Nome | O que é | Onde encontrar |
| --- | --- | --- |
| `HOSTGATOR_HOST` | Host FTP/FTPS/SFTP | Portal HostGator ou cPanel, dados de FTP/servidor |
| `HOSTGATOR_USERNAME` | Usuário FTP/cPanel | cPanel ou conta FTP criada |
| `HOSTGATOR_PASSWORD` | Senha FTP/cPanel | Senha da conta FTP/cPanel |
| `HOSTGATOR_PORT` | Porta de conexão | FTP geralmente `21`; FTPS explícito geralmente usa `21`; SFTP/SSH pode variar, frequentemente `2222` na HostGator |
| `HOSTGATOR_REMOTE_PATH` | Pasta remota do site | Normalmente `public_html`; use `public_html/seudominio.com.br` se o cPanel mostrar esse document root |
| `HOSTGATOR_PROTOCOL` | Protocolo do `lftp` | Use `sftp` se SSH/SFTP estiver habilitado; caso contrário use `ftp` com FTPS quando disponível |

Não coloque credenciais no YAML, no código Next.js ou no plugin.

## FTP, FTPS ou SFTP na HostGator

A documentação da HostGator informa que o Plano P possui contas FTP e acesso SSH. Em hospedagem compartilhada, o SSH pode precisar ser habilitado pelo suporte. Preferência:

1. SFTP/SSH, se estiver habilitado e testado.
2. FTPS/FTP pelo cPanel se SFTP não estiver disponível.

Para descobrir o caminho remoto correto:

1. Entre no cPanel.
2. Abra Gerenciador de Arquivos.
3. Confirme onde estão os arquivos públicos do domínio.
4. Para domínio principal, normalmente é `public_html`.
5. Confirme que o WordPress está em `public_html/wp`.

## Segurança do Deploy

O workflow não usa `rm -rf` e não faz limpeza remota destrutiva. Ele envia os arquivos de `out/` para `public_html/` e exclui explicitamente:

```text
wp/
wp/**
wp-admin/**
wp-content/**
wp-includes/**
```

Isso preserva o WordPress. A consequência é que páginas antigas removidas do WordPress podem permanecer no servidor até uma estratégia futura de manifesto apagar apenas arquivos gerenciados por deployments anteriores. Segurança do `/wp` tem prioridade.

## WordPress Plugin

A pasta `wordpress-github-deploy/` contém um plugin simples. Para instalar:

1. Compacte a pasta `wordpress-github-deploy`.
2. No WordPress, acesse `Plugins > Adicionar novo > Enviar plugin`.
3. Envie o ZIP e ative.
4. Configure as constantes no `wp-config.php`.

Exemplo de `wp-config.php`:

```php
define('CARPE_GITHUB_TOKEN', 'github_pat_xxx');
define('CARPE_GITHUB_OWNER', 'seu-usuario-ou-org');
define('CARPE_GITHUB_REPO', 'nome-do-repositorio');
```

O token precisa ter permissão para disparar GitHub Actions no repositório. Use um fine-grained token com acesso mínimo ao repositório e permissão de Actions/workflows quando disponível.

O plugin dispara o workflow quando:

- um post é publicado;
- um post publicado é atualizado;
- um post publicado muda de status;
- um post publicado é removido.

Ele ignora autosaves e revisões, usa debounce de 60 segundos e registra falhas com `error_log` sem expor o token.

## Testar Workflow Manual

1. Abra o repositório no GitHub.
2. Acesse `Actions`.
3. Selecione `Deploy HostGator`.
4. Clique em `Run workflow`.
5. Use a branch `main`.
6. Acompanhe os logs.

## Testar Publicação WordPress

1. Entre em `https://carpediemcabanas.com.br/wp/wp-admin`.
2. Publique ou atualize um post.
3. Veja em `GitHub > Actions` se um novo workflow iniciou.
4. Após finalizar, confira:
   - `https://carpediemcabanas.com.br/`
   - `https://carpediemcabanas.com.br/blog/`
   - `https://carpediemcabanas.com.br/blog/slug-do-post/`

## 404 e .htaccess

Não substitua cegamente o `.htaccess` existente da HostGator/WordPress. Se precisar configurar 404 no Apache, audite o arquivo atual antes e preserve `/wp`, `/wp-admin`, `/wp-content`, `/wp-includes`, `/wp-json` e `/wp-login.php`.

Regra segura para adicionar, se necessário:

```apache
ErrorDocument 404 /404.html
```

Não redirecione todas as URLs para `index.html`; este site não é uma SPA com React Router.

## Recuperação se o Deploy Falhar

1. Veja o erro em `GitHub > Actions > Deploy HostGator`.
2. Se falhou no build, corrija o código ou verifique a API WordPress.
3. Se falhou no FTP/SFTP, confirme host, porta, usuário, senha, protocolo e remote path.
4. Se o site ficou desatualizado, o WordPress segue intacto em `/wp`.
5. Para restaurar arquivos estáticos, rode novamente o workflow após corrigir o problema.

## Cron de Segurança

O workflow roda a cada 6 horas. Isso reconstrói o site mesmo se algum webhook do WordPress falhar.
