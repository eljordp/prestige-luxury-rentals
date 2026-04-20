import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  Building2,
  Heart,
  Clock,
  Car,
  Shield,
  UserCheck,
  Phone,
  MessageCircle,
} from 'lucide-react';

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
   1. HERO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark via-charcoal/80 to-charcoal-dark" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_#C9A84C_1px,_transparent_1px)] bg-[length:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-gold"
        >
          Prestige Transportation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl font-semibold leading-tight tracking-tight text-cream md:text-7xl lg:text-8xl"
        >
          Luxury Chauffeur
          <br />
          Services
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-8 h-px w-24 bg-gold md:w-32"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="max-w-2xl text-lg leading-relaxed text-smoke md:text-xl"
        >
          Premium transportation with top-of-the-line vehicles and unmatched
          professionalism
        </motion.p>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. SERVICE AREAS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ServiceAreas() {
  const areas = ['Miami', 'Palm Beach', 'Fort Lauderdale', 'New York City'];

  return (
    <section className="py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gold">
            Where We Operate
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-5xl mb-20">
            Serving the Most Prestigious Destinations
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mb-12 max-w-2xl mx-auto text-lg text-smoke leading-relaxed">
            Prestige Transportation is the newest division of Prestige Luxury
            Rentals, building on over 20 years of experience delivering
            excellence in luxury transportation.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {areas.map((area, i) => (
            <AnimatedSection key={area} delay={0.3 + i * 0.1}>
              <div className="flex items-center gap-3">
                {i > 0 && (
                  <span className="hidden text-gold/40 md:inline">|</span>
                )}
                <span className="font-serif text-xl font-medium text-cream md:text-2xl">
                  {area}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. FLEET & PRICING
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const fleet = [
  {
    name: 'Mercedes Sprinter',
    price: 250,
    description:
      'Spacious luxury van perfect for group transfers, corporate outings, and VIP transportation with premium amenities.',
  },
  {
    name: 'Cadillac Escalade ESV',
    price: 195,
    description:
      'Commanding presence with refined comfort, ideal for executive travel and special occasions.',
  },
  {
    name: 'Mercedes Maybach',
    price: 295,
    description:
      'The pinnacle of automotive luxury. First-class seating, whisper-quiet cabin, and unrivaled sophistication.',
  },
];

function FleetPricing() {
  return (
    <section className="bg-charcoal py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gold">
            Our Fleet
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-5xl mb-20">
            Fleet &amp; Pricing
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {fleet.map((vehicle, i) => (
            <AnimatedSection key={vehicle.name} delay={0.15 * i}>
              <div className="group relative overflow-hidden rounded-2xl border border-charcoal-light bg-charcoal-light p-10 transition-all duration-500 hover:border-gold/30 hover:bg-charcoal-light/80">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <Car className="mb-6 h-8 w-8 text-gold" />

                  <h3 className="font-serif text-2xl font-semibold text-cream">
                    {vehicle.name}
                  </h3>

                  <div className="mt-4 mb-6">
                    <span className="font-serif text-4xl font-bold text-gold">
                      ${vehicle.price}
                    </span>
                    <span className="ml-1 text-sm text-smoke">/hour</span>
                  </div>

                  <p className="text-sm leading-relaxed text-smoke">
                    {vehicle.description}
                  </p>

                  <p className="mt-6 text-xs font-medium tracking-wider uppercase text-gold/70">
                    4-hour minimum
                  </p>
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
   4. SERVICES OFFERED
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const services = [
  {
    icon: Briefcase,
    title: 'Airport Transfers',
    description: 'Luxury pickup and dropoff at all major airports',
  },
  {
    icon: Building2,
    title: 'Corporate Travel',
    description:
      'Professional transportation for business meetings and events',
  },
  {
    icon: Heart,
    title: 'Special Events',
    description: 'Weddings, galas, private parties, and celebrations',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service whenever you need us',
  },
];

function ServicesOffered() {
  return (
    <section className="py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gold">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-5xl mb-20">
            Services Offered
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1 * i}>
              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-charcoal transition-all duration-500 group-hover:border-gold/50 group-hover:bg-charcoal-light">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>

                <h3 className="mb-3 font-serif text-xl font-semibold text-cream">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-smoke">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. WHY CHOOSE US
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const valueProps = [
  {
    icon: Car,
    title: 'World-Class Fleet',
    description:
      'A curated selection of luxury vehicles, meticulously maintained to the highest standards of comfort and performance.',
  },
  {
    icon: UserCheck,
    title: 'Professional Chauffeurs',
    description:
      'Punctual, discreet, and experienced drivers who prioritize your safety and comfort on every journey.',
  },
  {
    icon: Shield,
    title: 'Personalized Service',
    description:
      'Every detail tailored to your individual needs, ensuring a seamless and unforgettable experience.',
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gold">
            The Prestige Difference
          </p>
          <h2 className="font-serif text-3xl font-semibold text-cream md:text-5xl mb-20">
            Why Choose Us
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {valueProps.map((prop, i) => (
            <AnimatedSection key={prop.title} delay={0.15 * i}>
              <div className="rounded-2xl border border-charcoal-light bg-charcoal-light p-10 text-center transition-all duration-500 hover:border-gold/30">
                <prop.icon className="mx-auto mb-6 h-10 w-10 text-gold" />

                <h3 className="mb-4 font-serif text-2xl font-semibold text-cream">
                  {prop.title}
                </h3>

                <p className="text-sm leading-relaxed text-smoke">
                  {prop.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. CTA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function BookCTA() {
  return (
    <section className="py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-gold">
            Ready to Ride
          </p>
          <h2 className="font-serif text-4xl font-semibold text-cream md:text-6xl mb-20">
            Book Your Chauffeur
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mb-12 text-lg text-smoke leading-relaxed">
            Contact us to arrange your luxury transportation. Our team is
            available 24/7 to accommodate your schedule.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {/* Phone */}
            <a
              href="tel:+13055139711"
              className="group inline-flex items-center gap-3 rounded-full border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal-dark"
            >
              <Phone className="h-5 w-5" />
              (305) 513-9711
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/13055139711"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-charcoal-light bg-charcoal-light px-8 py-4 font-medium text-cream transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Chauffeur() {
  return (
    <>
      <Hero />
      <ServiceAreas />
      <FleetPricing />
      <ServicesOffered />
      <WhyChooseUs />
      <BookCTA />
    </>
  );
}
