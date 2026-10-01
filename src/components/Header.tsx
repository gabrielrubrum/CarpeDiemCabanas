'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export default function Header({ variant = 'dark' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/parana', label: 'Paraná' },
    { href: '/santa-catarina', label: 'Santa Catarina' },
    { href: '/blog', label: 'Blog' },
  ];

  const isLight = variant === 'light';

  return (
    <>
      <motion.header
        className={`absolute top-0 left-0 right-0 z-50 bg-transparent transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12">
          <div className="flex items-start justify-between h-[150px]">
            <Link
              href="/"
              className="flex-shrink-0 mt-[34px]"
            >
              <Image
                src="/logo-header.png"
                alt="Carpe Diem Cabanas"
                width={180}
                height={180}
                priority
                className={`h-auto object-contain w-[145px] sm:w-[150px] lg:w-[205px] xl:w-[220px] transition-all duration-300 ${
                  !isLight ? 'brightness-0 opacity-90' : ''
                }`}
              />
            </Link>

            <div className="hidden md:flex items-center gap-[42px] mt-[42px]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.20em] font-medium transition-colors duration-300 ${
                    isLight
                      ? 'text-white hover:text-white/90'
                      : 'text-black/90 hover:text-black'
                  }`}
                  style={isLight ? { textShadow: '0 1px 12px rgba(0,0,0,0.35)' } : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/parana"
                className={`text-xs tracking-[0.18em] px-7 py-3 border rounded-full uppercase transition-all duration-300 ${
                  isLight
                    ? 'border-white/65 text-white bg-[rgba(10,10,8,0.18)] backdrop-blur-[8px] hover:bg-white/95 hover:text-[#171714] hover:border-white'
                    : 'border-black/50 text-black hover:bg-black hover:text-white hover:border-black'
                }`}
              >
                Reservar
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 mt-[24px]"
              aria-label="Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-px transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  } ${isLight ? 'bg-white' : 'bg-black'}`}
                />
                <span
                  className={`w-full h-px transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  } ${isLight ? 'bg-white' : 'bg-black'}`}
                />
                <span
                  className={`w-full h-px transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  } ${isLight ? 'bg-white' : 'bg-black'}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-foreground hover:text-foreground/60 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link
                  href="/parana"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs tracking-[0.15em] px-8 py-4 border border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all duration-300 rounded-full uppercase"
                >
                  Reservar
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
