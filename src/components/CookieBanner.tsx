'use client';

import { useState, useRef, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      // Check if user has already accepted cookies
      const hasAccepted = localStorage.getItem('cookieConsent');
      setIsVisible(!hasAccepted);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookieConsent', 'true');
      setIsVisible(false);
    } catch (error) {
      console.error('Error saving cookie consent:', error);
      // Fallback: use sessionStorage if localStorage fails
      sessionStorage.setItem('cookieConsent', 'true');
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#171714] text-white px-6 py-6 md:px-12 md:py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm md:text-base leading-relaxed text-white/80">
            Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button
            onClick={handleAccept}
            className="px-6 py-3 bg-white text-[#171714] text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-white/90 transition-colors duration-300 cursor-pointer"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
