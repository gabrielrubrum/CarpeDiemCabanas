export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string | null;
  category: string;
  categorySlug?: string | null;
  featuredImage: string | null;
  readTime?: string;
}

export const fallbackPosts: BlogPost[] = [
  {
    id: 'destinos',
    slug: 'destinos',
    title: 'Um fim de semana para desacelerar no Paraná',
    category: 'Destinos',
    excerpt: 'Descubra paisagens, silêncio e experiências para aproveitar Campo Largo de outro jeito.',
    content: `
      <p>Descubra paisagens, silêncio e experiências para aproveitar Campo Largo de outro jeito.</p>
      <h2>Por que escolher Paraná?</h2>
      <p>Paraná oferece uma combinação única de natureza preservada e conforto contemporâneo. As cabanas em Campo Largo são projetadas para proporcionar uma experiência imersiva no ambiente natural.</p>
      <h3>O que esperar</h3>
      <ul>
        <li>Tranquilidade absoluta</li>
        <li>Paisagens deslumbrantes</li>
        <li>Conforto premium</li>
        <li>Conexão com a natureza</li>
      </ul>
      <blockquote>"Um refúgio perfeito para quem busca paz e renovação."</blockquote>
      <p>Seja qual for a estação, Paraná oferece experiências únicas que transformam sua pausa em memórias inesquecíveis.</p>
    `,
    date: '2026-09-30',
    readTime: '5 min',
    featuredImage: '/images/cabins/parana/pr-01/03.jpg',
  },
  {
    id: 'experiencias',
    slug: 'experiencias',
    title: 'O poder de desconectar na natureza',
    category: 'Experiências',
    excerpt: 'Momentos únicos que transformam sua estadia em memórias inesquecíveis.',
    content: `
      <p>Momentos únicos que transformam sua estadia em memórias inesquecíveis.</p>
      <h2>A importância de desconectar</h2>
      <p>Em um mundo cada vez mais conectado, encontrar momentos de verdadeira desconexão é essencial para o bem-estar. Nossas cabanas oferecem o ambiente perfeito para isso.</p>
      <h3>Benefícios da desconexão</h3>
      <ul>
        <li>Redução do estresse</li>
        <li>Melhor qualidade de sono</li>
        <li>Reconexão consigo mesmo</li>
        <li>Apresente mental renovado</li>
      </ul>
      <p>A experiência de ficar em um refúgio contemporâneo na natureza vai muito além de uma simples hospedagem. É uma oportunidade de recarregar energias e renovar perspectivas.</p>
    `,
    date: '2026-09-28',
    readTime: '4 min',
    featuredImage: '/images/cabins/santa-catarina/sc-01/01.jpg',
  },
  {
    id: 'natureza',
    slug: 'natureza',
    title: 'Conexão essencial com o entorno',
    category: 'Natureza',
    excerpt: 'A importância de se reconectar com o ambiente natural em refúgios contemporâneos.',
    content: `
      <p>A importância de se reconectar com o ambiente natural em refúgios contemporâneos.</p>
      <h2>Natureza como parte da experiência</h2>
      <p>Nossas cabanas são projetadas para integrar-se harmoniosamente ao entorno natural. Grandes janelas, materiais sustentáveis e posicionamento estratégico permitem que você vivencie a natureza de forma imersiva.</p>
      <h3>Arquitetura e ambiente</h3>
      <p>A arquitetura contemporânea de nossos refúgios não apenas respeita o ambiente, mas o incorpora como elemento central da experiência. Cada detalhe é pensado para maximizar a conexão com a paisagem.</p>
      <blockquote>"A natureza não é apenas o cenário, é parte da experiência."</blockquote>
    `,
    date: '2026-09-25',
    readTime: '6 min',
    featuredImage: '/images/cabins/santa-catarina/sc-02/02.jpg',
  },
  {
    id: 'gastronomia',
    slug: 'gastronomia',
    title: 'Sabores locais que complementam a experiência',
    category: 'Gastronomia',
    excerpt: 'Descubra como a gastronomia regional pode elevar sua estadia nas cabanas.',
    content: `
      <p>Descubra como a gastronomia regional pode elevar sua estadia nas cabanas.</p>
      <h2>Culinária local</h2>
      <p>A região de Paraná e Santa Catarina oferece uma culinária rica e diversificada. De produtos orgânicos a pratos tradicionais, há muito para explorar.</p>
      <h3>O que experimentar</h3>
      <ul>
        <li>Produtos locais orgânicos</li>
        <li>Pratos tradicionais da região</li>
        <li>Vinhos e bebidas artesanais</li>
        <li>Experiências de culinária in loco</li>
      </ul>
    `,
    date: '2026-09-22',
    readTime: '5 min',
    featuredImage: '/images/cabins/parana/pr-02/01.jpg',
  },
  {
    id: 'viagem',
    slug: 'viagem',
    title: 'Dicas para planejar sua próxima escapada',
    category: 'Viagem',
    excerpt: 'Planeje sua viagem perfeita para refúgios de natureza com nosso guia completo.',
    content: `
      <p>Planeje sua viagem perfeita para refúgios de natureza com nosso guia completo.</p>
      <h2>Planejamento essencial</h2>
      <p>Uma escapada para a natureza requer um planejamento cuidadoso para garantir que você aproveite ao máximo cada momento.</p>
      <h3>O que levar</h3>
      <ul>
        <li>Roupas confortáveis e adequadas</li>
        <li>Calçados para trilhas</li>
        <li>Itens de higiene pessoal</li>
        <li>Câmera para capturar momentos</li>
      </ul>
      <h4>Melhor época</h4>
      <p>Cada estação oferece experiências únicas. Escolha a que melhor se adapta às suas preferências.</p>
    `,
    date: '2026-09-20',
    readTime: '7 min',
    featuredImage: '/images/cabins/santa-catarina/sc-01/03.jpg',
  },
  {
    id: 'cabanas',
    slug: 'cabanas',
    title: 'Arquitetura contemporânea na natureza',
    category: 'Cabanas',
    excerpt: 'A arquitetura que redefine o conceito de refúgio em meio à paisagem.',
    content: `
      <p>A arquitetura que redefine o conceito de refúgio em meio à paisagem.</p>
      <h2>Design contemporâneo</h2>
      <p>Nossas cabanas combinam design moderno com conforto rústico. Linhas limpas, materiais naturais e integração com o ambiente criam espaços únicos.</p>
      <h3>Características</h3>
      <ul>
        <li>Arquitetura minimalista</li>
        <li>Materiais sustentáveis</li>
        <li>Integração com natureza</li>
        <li>Conforto premium</li>
      </ul>
      <blockquote>"A arquitetura não é apenas forma, é experiência."</blockquote>
    `,
    date: '2026-09-18',
    readTime: '6 min',
    featuredImage: '/images/cabins/parana/pr-02/03.jpg',
  },
];

export function getFallbackPostBySlug(slug: string): BlogPost | undefined {
  return fallbackPosts.find(post => post.slug === slug);
}
