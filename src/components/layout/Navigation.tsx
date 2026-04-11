import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Inline SVGs to remove createLucideIcon.js from Navigation's critical path
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);

const Navigation = ({ pathname = '/' }: { pathname?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Only run scroll spy on homepage
    if (pathname !== '/') {
      return;
    }

    const sectionIds = ['home', 'latest-seminars', 'body-training', 'online-ballroomdance-lesson', 'ken-ono'];
    let rafId: number | null = null;

    const handleScroll = () => {
      // rAF throttle: at most once per frame, no forced reflow on scroll thread
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        let current = 'home';
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 100) {
            current = id;
          }
        }
        setActiveSection((prev) => (prev === current ? prev : current));
      });
    };

    // passive: true — scroll handler never calls preventDefault, lets browser optimize
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const navLinks = [
    { href: '/#latest-seminars', label: '社交ダンスセミナー', id: 'latest-seminars' },
    { href: '/#body-training', label: '体幹トレーニング', id: 'body-training' },
    { href: '/#online-ballroomdance-lesson', label: '個人レッスン', id: 'online-ballroomdance-lesson' },
    { href: '/#ken-ono', label: '講師 大埜健', id: 'ken-ono' },
  ];

  return (
    <nav className="bg-background/80 border-border/40 relative sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-4 shadow-sm backdrop-blur-lg md:px-12">
      <a
        href="/"
        className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <span className="font-heading text-foreground text-2xl font-bold">
          ITxDANCER
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            data-testid={`link-${link.id}`}
            className={`relative w-fit transition-colors ${(pathname === '/' && activeSection === link.id) ||
              (pathname.startsWith(link.href) && link.href !== '/')
              ? 'text-primary font-bold'
              : 'text-muted-foreground hover:text-primary'
              }`}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              {link.label}
              {((pathname === '/' &&
                activeSection === link.id) ||
                (pathname.startsWith(link.href) &&
                  link.href !== '/')) && (
                  <motion.div
                    layoutId="activeIndicatorNav"
                    className="bg-primary absolute right-0 bottom-[-4px] left-0 h-1 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
            </motion.div>
          </a>
        ))}
        <div className="flex flex-col items-center gap-1">
          <a
                   href="https://lin.ee/tviDWfg"
            className="flex items-center bg-[#06C755] text-white px-2 md:px-4 py-1 md:py-1.5 rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex flex-col items-center leading-none -space-y-0.5">
              <span className="text-base font-bold tracking-tighter w-fit text-center flex items-center gap-1">
                LINE ▶
              </span>
              <span className="text-xs md:text-base font-bold tracking-tight">
                ここから参加
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="text-foreground bg-primary/10 hover:bg-primary/25 rounded-full p-2 transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-card border-border/60 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                data-testid={`link-${link.id}-mobile`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                whileHover={{ x: 4 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 ${(pathname === '/' &&
                  activeSection === link.id) ||
                  (pathname.startsWith(link.href) && link.href !== '/')
                  ? 'text-primary font-bold'
                  : 'text-foreground hover:text-primary'
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="border-border/40 border-t pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: navLinks.length * 0.08 + 0.1,
                duration: 0.25,
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <a
                         href="https://lin.ee/tviDWfg"
                  className="flex items-center justify-center w-full bg-[#06C755] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="flex flex-col items-center leading-none -space-y-0.5">
                    <span className="text-base font-bold tracking-tighter w-fit text-center flex items-center gap-1">
                      LINE ▶
                    </span>
                    <span className="text-base font-bold tracking-tight">
                      ここから参加
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
