// Script para medir dimensões do Footer
// Execute no console do navegador (F12) em qualquer página do site

(function() {
  const footer = document.querySelector('footer');
  const container = footer?.querySelector('div'); // O container interno

  if (!footer) {
    console.error('Footer não encontrado');
    return;
  }

  const footerRect = footer.getBoundingClientRect();
  const containerRect = container?.getBoundingClientRect();

  // Encontrar colunas
  const firstLine = footer?.querySelector('.grid-cols-12');
  const marcaCol = firstLine?.children[0];
  const conecteCol = firstLine?.children[3];

  const marcaRect = marcaCol?.getBoundingClientRect();
  const conecteRect = conecteCol?.getBoundingClientRect();

  // Encontrar seção de cabanas
  const cabanasSection = footer?.querySelectorAll('div')[2]; // A segunda faixa
  const cabanasRect = cabanasSection?.getBoundingClientRect();

  // Encontrar copyright
  const copyrightSection = footer?.querySelectorAll('div')[3];
  const copyrightRect = copyrightSection?.getBoundingClientRect();

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('MEDIDAS DO FOOTER');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('Altura total do Footer:', footerRect.height, 'px');
  console.log('Largura do container:', containerRect?.width, 'px');
  console.log('Largura da coluna Marca:', marcaRect?.width, 'px');
  console.log('Largura da coluna Conecte-se:', conecteRect?.width, 'px');
  console.log('Distância primeira linha → Cabanas:', cabanasRect ? cabanasRect.top - footerRect.top : 'N/A', 'px');
  console.log('Distância Cabanas → Copyright:', copyrightRect && cabanasRect ? copyrightRect.top - cabanasRect.bottom : 'N/A', 'px');
  console.log('═══════════════════════════════════════════════════════════════');

  // Checagem visual
  console.log('Validação visual:');
  console.log('✓ Container width deve usar quase toda largura disponível');
  console.log('✓ Coluna Marca deve ser ~1/3 da largura');
  console.log('✓ Coluna Conecte-se deve ser ~1/3 da largura');
  console.log('✓ Distância primeira linha → Cabanas deve ser ~48px');
  console.log('✓ Distância Cabanas → Copyright deve ser ~40px');
  console.log('✓ Footer total deve ser compacto (~300-350px no desktop)');
})();
