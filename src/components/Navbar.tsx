import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Chauffeur', to: '/chauffeur' },
  { label: 'About', to: '/about' },
  { label: 'FAQs', to: '/faqs' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-dark/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark */}
            <Link to="/" className="flex flex-col leading-none group">
              <span className="font-serif text-xl tracking-[0.3em] text-cream group-hover:text-gold transition-colors duration-300">
                PRESTIGE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-smoke font-light uppercase">
                Luxury Rentals
              </span>
            </Link>

            {/* Center Nav — Desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-sm tracking-widest uppercase text-smoke hover:text-cream transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Side — Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+13055139711"
                className="flex items-center gap-2 text-sm text-smoke hover:text-cream transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="tracking-wide">(305) 513-9711</span>
              </a>
              <Link
                to="/book"
                className="px-6 py-2.5 bg-gold text-charcoal-dark text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Hamburger — Mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-charcoal border-l border-white/5 flex flex-col"
            >
              {/* Close */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
                <span className="font-serif text-lg tracking-[0.3em] text-cream">
                  PRESTIGE
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-smoke hover:text-cream transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-6 py-8 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-lg tracking-widest uppercase text-smoke hover:text-cream hover:pl-2 transition-all duration-300 border-b border-white/5"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-6 pb-8 space-y-4">
                <a
                  href="tel:+13055139711"
                  className="flex items-center gap-3 text-smoke hover:text-cream transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm tracking-wide">(305) 513-9711</span>
                </a>
                <Link
                  to="/book"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center w-full px-6 py-3 bg-gold text-charcoal-dark text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
