import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171714] text-white">
      <div className="w-full max-w-[1500px] mx-auto px-8 lg:px-12 xl:px-16 pt-14 lg:pt-16 pb-6">
        {/* Grid Principal - 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 xl:gap-x-12 items-start">
          {/* MARCA */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <div className="mb-4">
              <Image
                src="/logo-header.png"
                alt="Carpe Diem Cabanas"
                width={180}
                height={180}
                className="h-auto w-[190px] xl:w-[205px]"
              />
            </div>
            <p className="max-w-[260px] mt-5 text-[15px] leading-[1.55] text-white/58">
              Refúgios contemporâneos em
              <br />
              Paraná e Santa Catarina.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium mb-5">
              Navegação
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-[15px] lg:text-[16px] text-white/78 hover:text-white transition-colors duration-300 leading-none"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[15px] lg:text-[16px] text-white/78 hover:text-white transition-colors duration-300 leading-none"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/parana"
                  className="text-[15px] lg:text-[16px] text-white/78 hover:text-white transition-colors duration-300 leading-none"
                >
                  Reservar
                </Link>
              </li>
            </ul>
          </div>

          {/* CABANAS */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium mb-5">
              Cabanas
            </h4>

            {/* PARANÁ */}
            <p className="text-[9px] uppercase tracking-[0.20em] text-white/38 mb-4">
              Paraná
            </p>
            <div className="space-y-3 mb-7">
              <Link
                href="/parana/cabana-01"
                className="inline-flex items-center gap-2 text-[14px] lg:text-[15px] text-white/78 hover:text-white transition-colors duration-300"
              >
                Cabana Romântica com Hidro
                <span className="text-white/45">↗</span>
              </Link>
              <br />
              <Link
                href="/parana/cabana-02"
                className="inline-flex items-center gap-2 text-[14px] lg:text-[15px] text-white/78 hover:text-white transition-colors duration-300"
              >
                Cabana Romântica em meio a natureza
                <span className="text-white/45">↗</span>
              </Link>
            </div>

            {/* SANTA CATARINA */}
            <p className="text-[9px] uppercase tracking-[0.20em] text-white/38 mb-4">
              Santa Catarina
            </p>
            <div className="space-y-3">
              <Link
                href="/santa-catarina/cabana-01"
                className="inline-flex items-center gap-2 text-[14px] lg:text-[15px] text-white/78 hover:text-white transition-colors duration-300"
              >
                Cabana do Lago
                <span className="text-white/45">↗</span>
              </Link>
              <br />
              <Link
                href="/santa-catarina/cabana-02"
                className="inline-flex items-center gap-2 text-[14px] lg:text-[15px] text-white/78 hover:text-white transition-colors duration-300"
              >
                Cabana do Bosque
                <span className="text-white/45">↗</span>
              </Link>
            </div>
          </div>

          {/* CONECTE-SE */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium mb-5">
              Conecte-se
            </h4>
            <p className="max-w-[280px] text-[14px] leading-[1.5] text-white/58 mb-5">
              Acompanhe novos refúgios,
              <br />
              experiências e histórias.
            </p>
            <div className="flex flex-col gap-0 max-w-[280px]">
              <a
                href="https://www.instagram.com/carpe_diemcabanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-white/12 text-[15px] text-white/80 hover:text-white hover:border-white/35 transition-all duration-300"
              >
                Instagram
                <span className="text-white/45 group-hover:text-white group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-300">↗</span>
              </a>
              <a
                href="https://www.facebook.com/people/Carpe-diem-Cabanas/61581725873040/?rdid=7wSYJd6DN3zNVoZw&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F16M6MwNKVYn%252F"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-white/12 text-[15px] text-white/80 hover:text-white hover:border-white/35 transition-all duration-300"
              >
                Facebook
                <span className="text-white/45 group-hover:text-white group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-300">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
          <p className="text-[12px] lg:text-[13px] text-white/38">
            © {currentYear} Carpe Diem Cabanas
          </p>
          <p className="text-[12px] lg:text-[13px] text-white/38">
            Desenvolvido por <span className="text-white/65 tracking-[0.08em] font-medium">NEX ANÚNCIOS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
