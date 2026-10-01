# Configuração WordPress - Carpe Diem

## Instruções para Integrar WordPress da HostGator

### 1. Configurar Variável de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com a URL do seu WordPress:

```env
WORDPRESS_API_URL=https://seu-site.com
```

**Exemplo:**
```env
WORDPRESS_API_URL=https://carpediemcabanas.com.br
```

### 2. Habilitar REST API no WordPress

No painel do WordPress:

1. Acesse: **Configurações > Permalinks**
2. Marque: **Estrutura bonita** (ou qualquer opção exceto "Padrão")
3. Clique em **Salvar alterações**

### 3. Configurar CORS (Opcional - se tiver erro de CORS)

Se o WordPress estiver em domínio diferente do site Next.js, você precisa configurar CORS no WordPress.

Adicione isso ao `functions.php` do seu tema WordPress:

```php
add_action('init', function() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
});
```

Ou use um plugin como "WP REST API Controller".

### 4. Verificar se a API está funcionando

Teste a URL do seu WordPress:

```
https://seu-site.com/wp-json/wp/v2/posts?_embed=1
```

Deve retornar um JSON com os posts.

### 5. Posts Requisitos

Para que os posts apareçam corretamente no site:

- **Imagem destacada**: Cada post deve ter uma imagem destacada configurada
- **Categorias**: Configure categorias para os posts
- **Excerpt**: Use o campo "Resumo" para o texto de preview
- **Slug**: WordPress gera automaticamente, mas pode ser editado

### 6. Estrutura do Post

**Campos utilizados:**
- Título
- Resumo (excerpt)
- Conteúdo completo
- Imagem destacada
- Categoria
- Data

### 7. Fallback

Se o WordPress não estiver configurado ou der erro, o site usa posts de fallback automaticamente. Isso garante que o blog sempre tenha conteúdo.

### 8. Cache

O site usa cache de 5 minutos (300 segundos) para os posts do WordPress. Após postar algo novo no WordPress, espere até 5 minutos para ver no site.

### 9. Depois de Configurar

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse: http://localhost:3000/blog

3. Os posts do WordPress devem aparecer

### 10. Ao Subir para Produção

No ambiente de produção (HostGator ou outro), você precisa:

1. Configurar a variável de ambiente no servidor
2. Verificar se o WordPress permite requisições externas do domínio do site
3. Testar a API do WordPress: `https://seu-site.com/wp-json/wp/v2/posts?_embed=1`

---

## Solução de Problemas

### Erro: "WordPress API error: 404"
- Verifique se a URL está correta
- Verifique se o REST API está habilitado
- Teste a URL no navegador

### Erro: "CORS policy"
- Configure CORS no WordPress (veja passo 3)
- Use um plugin de CORS

### Posts não aparecem
- Verifique se há posts publicados (não rascunhos)
- Verifique se as imagens destacadas estão configuradas
- Espere 5 minutos para o cache expirar

### Imagens não carregam
- Verifique se as URLs das imagens são HTTPS
- Configure permissões de acesso às imagens no WordPress
