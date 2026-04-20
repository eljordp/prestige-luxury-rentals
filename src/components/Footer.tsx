import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Blog', to: '/blog' },
  { label: 'Rental Policy', to: '/rental-policy' },
];

const fleetLinks = [
  { label: 'Lamborghini', to: '/fleet?brand=lamborghini' },
  { label: 'Ferrari', to: '/fleet?brand=ferrari' },
  { label: 'McLaren', to: '/fleet?brand=mclaren' },
  { label: 'Porsche', to: '/fleet?brand=porsche' },
  { label: 'Rolls-Royce', to: '/fleet?brand=rolls-royce' },
  { label: 'Bentley', to: '/fleet?brand=bentley' },
];

const locationLinks = [
  { label: 'Miami', to: '/locations/miami' },
  { label: 'New York', to: '/locations/new-york' },
  { label: 'Nationwide Delivery', to: '/locations/nationwide' },
];

function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5">
      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-12">
          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-cream mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-smoke hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-cream mb-8">
              Fleet
            </h4>
            <ul className="space-y-4">
              {fleetLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-smoke hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-cream mb-8">
              Locations
            </h4>
            <ul className="space-y-4">
              {locationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-smoke hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-cream mb-8">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+13055139711"
                  className="flex items-center gap-3 text-sm text-smoke hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (305) 513-9711
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/13055139711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-smoke hover:text-gold transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@prestigeluxuryrentals.com"
                  className="flex items-center gap-3 text-sm text-smoke hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@prestigeluxuryrentals.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-smoke">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    4019 NW 25th St,<br />
                    Miami, FL 33142
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke tracking-wide">
            &copy; 2004&ndash;2026 Prestige Luxury Rentals. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/prestigeluxuryrentals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-smoke hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/prestigeluxuryrentals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-smoke hover:text-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@prestigeluxuryrentals"
              target="_blank"
              rel="noopener noreferrer"
              className="text-smoke hover:text-gold transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
