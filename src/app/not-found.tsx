import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F3ED]">
      <Header variant="light" />
      <main className="flex flex-1 items-center px-6 py-32 lg:px-12">
        <section className="mx-auto w-full max-w-[900px]">
          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-black/45">
            404
          </p>
          <h1 className="mb-8 font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.035em] text-[#171714]">
            Página não encontrada.
          </h1>
          <p className="mb-10 max-w-[520px] text-[16px] leading-[1.7] text-black/60">
            O endereço pode ter mudado ou não existir mais.
          </p>
          <Link
            href="/"
            className="inline-flex border-b border-black/40 pb-1 text-[11px] uppercase tracking-[0.16em] text-black/70 transition-colors duration-300 hover:border-black hover:text-black"
          >
            Voltar para o início →
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
