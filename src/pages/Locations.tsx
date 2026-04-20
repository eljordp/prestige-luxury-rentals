import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, Navigation, Car } from 'lucide-react';
import SEO from '../components/SEO';

/* ─── Reusable animation wrapper ─── */
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const physicalLocations = [
  {
    city: 'Miami, FL',
    badge: 'Headquarters',
    address: '4019 NW 25th Street, Miami, FL 33142',
    phone: '(305) 513-9711',
    phoneHref: 'tel:+13055139711',
    mapsHref: 'https://maps.google.com/?q=4019+NW+25th+Street+Miami+FL+33142',
  },
  {
    city: 'Orlando, FL',
    badge: null,
    address: '9187 Boggy Creek Rd #7, Orlando, FL 32824',
    phone: '(407) 792-5440',
    phoneHref: 'tel:+14077925440',
    mapsHref: 'https://maps.google.com/?q=9187+Boggy+Creek+Rd+%237+Orlando+FL+32824',
  },
  {
    city: 'Atlanta, GA',
    badge: null,
    address: '7100 Buford Hwy NE, Doraville, GA 30340',
    phone: '(404) 810-9070',
    phoneHref: 'tel:+14048109070',
    mapsHref: 'https://maps.google.com/?q=7100+Buford+Hwy+NE+Doraville+GA+30340',
  },
];

const hours = 'Mon-Fri 9am-7pm | Sat 10am-6pm | Sun 10am-5pm';

const serviceAreas = [
  'Atlantic City', 'Baltimore', 'Birmingham', 'Boca Raton', 'Boston',
  'Charleston', 'Charlotte', 'Clearwater', 'Daytona Beach', 'Fort Lauderdale',
  'Fort Myers', 'Gainesville', 'Hilton Head', 'Jacksonville', 'Key West',
  'Las Vegas', 'Los Angeles', 'Miami', 'Miami Beach', 'Naples',
  'Nashville', 'New Orleans', 'New York City', 'Ocala', 'Orlando',
  'Palm Beach', 'Panama City', 'Pensacola', 'Philadelphia', 'Raleigh',
  'Richmond', 'Sarasota', 'Savannah', 'St. Augustine', 'St. Petersburg',
  'Tallahassee', 'Tampa', 'Washington D.C.', 'West Palm Beach',
];

const fleetBrands = [
  'Lamborghini', 'Ferrari', 'McLaren', 'Porsche', 'Mercedes-Benz',
  'Rolls-Royce', 'Bentley', 'BMW', 'Corvette', 'Land Rover',
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. HERO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function Hero() {
  return (
    <section className="relative flex items-center justify-center h-[50vh] min-h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/60 to-[#0F0F0F]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-[#F5F0E8]">
          Our Locations
        </h1>
        <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-6" />
        <p className="mt-6 text-base text-[#B0B0B0] md:text-lg max-w-xl mx-auto">
          Three locations. 50+ cities served. Nationwide delivery.
        </p>
      </motion.div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. PHYSICAL LOCATIONS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function PhysicalLocations() {
  return (
    <section className="bg-[#0F0F0F] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            Visit Us
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C9A84C]" />
        </AnimatedSection>

        <div className="grid gap-10 md:grid-cols-3">
          {physicalLocations.map((loc, i) => (
            <AnimatedSection key={loc.city} delay={i * 0.12}>
              <div className="relative rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-10 hover:border-[#C9A84C]/30 transition-colors duration-500 h-full flex flex-col">
                {/* Gold accent top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-[#C9A84C]" />

                {/* City + Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0" />
                  <h3 className="font-serif text-2xl text-[#F5F0E8]">{loc.city}</h3>
                  {loc.badge && (
                    <span className="px-2.5 py-0.5 text-[10px] tracking-widest uppercase bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/30 rounded-full">
                      {loc.badge}
                    </span>
                  )}
                </div>

                {/* Address */}
                <a
                  href={loc.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 mb-5 group"
                >
                  <Navigation className="w-4 h-4 text-[#B0B0B0] mt-0.5 shrink-0 group-hover:text-[#C9A84C] transition-colors duration-300" />
                  <span className="text-sm text-[#B0B0B0] leading-relaxed group-hover:text-[#F5F0E8] transition-colors duration-300">
                    {loc.address}
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={loc.phoneHref}
                  className="flex items-center gap-3 mb-5 group"
                >
                  <Phone className="w-4 h-4 text-[#B0B0B0] shrink-0 group-hover:text-[#C9A84C] transition-colors duration-300" />
                  <span className="text-sm text-[#B0B0B0] group-hover:text-[#F5F0E8] transition-colors duration-300">
                    {loc.phone}
                  </span>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-3 mt-auto pt-5 border-t border-[#2A2A2A]">
                  <Clock className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-xs text-[#B0B0B0] leading-relaxed">
                    {hours}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. SERVICE AREAS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ServiceAreas() {
  return (
    <section className="bg-[#0F0F0F] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            50+ Cities Served Nationwide
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C9A84C]" />
          <p className="mt-6 text-[#B0B0B0] text-base max-w-xl mx-auto">
            We deliver exotic vehicles directly to your door in all of these cities and beyond.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#B0B0B0] hover:border-[#C9A84C]/40 hover:text-[#F5F0E8] transition-colors duration-300 cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FLEET BRANDS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FleetBrands() {
  return (
    <section className="bg-[#0F0F0F] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            Fleet Brands Available
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C9A84C]" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {fleetBrands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5 hover:border-[#C9A84C]/30 transition-colors duration-500"
              >
                <Car className="w-4 h-4 text-[#C9A84C]" />
                <span className="text-sm font-medium text-[#F5F0E8]">{brand}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. BOTTOM CTA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function BottomCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] px-6 py-32 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            Available Nationwide
          </h2>
          <p className="mt-6 text-base text-[#B0B0B0] md:text-lg">
            Don&apos;t see your city? We deliver anywhere in the continental U.S. Call us for custom delivery options.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+13055139711"
              className="inline-flex items-center gap-2 rounded bg-[#C9A84C] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-[#0F0F0F] transition-colors hover:bg-[#d4b85e]"
            >
              <Phone className="h-4 w-4" />
              (305) 513-9711
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SECTION DIVIDER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE EXPORT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Locations() {
  return (
    <main>
      <SEO
        title="Locations | Prestige Luxury Rentals"
        description="Visit Prestige Luxury Rentals in Miami, Orlando, or Atlanta. 50+ cities served nationwide with door-to-door exotic car delivery."
      />
      <Hero />
      <PhysicalLocations />
      <SectionDivider />
      <ServiceAreas />
      <SectionDivider />
      <FleetBrands />
      <SectionDivider />
      <BottomCta />
    </main>
  );
}
