import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Star, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { getFeaturedCars } from '../data/cars';

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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster={`https://prestigeluxuryrentals.com/wp-content/uploads/2021/01/Lamborghini-Aventador-Front.jpg`}
      >
        <source
          src="https://videos.pexels.com/video-files/17051328/17051328-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0F0F0F]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-5xl leading-tight text-[#F5F0E8] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Experience Extraordinary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-2xl text-base text-[#B0B0B0] sm:text-lg md:text-xl"
        >
          Miami&apos;s premier exotic car rental. Ferrari, Lamborghini, Porsche,
          and more — delivered to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/fleet"
            className="inline-block rounded bg-[#C9A84C] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-[#0F0F0F] transition-colors hover:bg-[#d4b85e]"
          >
            Explore Fleet
          </Link>
          <a
            href="tel:3055139711"
            className="inline-block rounded border border-[#C9A84C] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-[#C9A84C] transition-colors hover:bg-[#C9A84C]/10"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-7 w-7 text-[#C9A84C]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. FEATURED FLEET
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FeaturedFleet() {
  const featured = getFeaturedCars();

  return (
    <section className="bg-[#0F0F0F] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            Featured Vehicles
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C9A84C]" />
        </AnimatedSection>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car, i) => (
            <AnimatedSection key={car.id} delay={i * 0.12}>
              <Link
                to={`/fleet/${car.id}`}
                className="group block overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] transition-colors hover:border-[#C9A84C]/30"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.year} ${car.brand} ${car.model}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#C9A84C]">
                    {car.brand}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-[#F5F0E8]">
                    {car.model}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-[#B0B0B0]">
                      <span className="text-lg font-semibold text-[#F5F0E8]">
                        ${car.pricePerDay.toLocaleString()}
                      </span>
                      /day
                    </p>
                    <span className="text-sm font-medium text-[#C9A84C] transition-colors group-hover:text-[#d4b85e]">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. WHY PRESTIGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const VALUE_PROPS = [
  {
    icon: Shield,
    title: 'Fully Insured',
    desc: 'Every rental includes comprehensive coverage so you can drive with confidence.',
  },
  {
    icon: Clock,
    title: '24/7 Delivery',
    desc: 'Door-to-door delivery and pickup, any time — airport, hotel, or home.',
  },
  {
    icon: Star,
    title: '20 Years of Excellence',
    desc: 'Trusted by thousands since 2004. Our reputation is our strongest asset.',
  },
];

function WhyPrestige() {
  return (
    <section className="bg-[#0F0F0F] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            Why Prestige
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C9A84C]" />
        </AnimatedSection>

        <div className="grid gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop, i) => (
            <AnimatedSection key={prop.title} delay={i * 0.15} className="text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10">
                <prop.icon className="h-8 w-8 text-[#C9A84C]" />
              </div>
              <h3 className="font-serif text-xl text-[#F5F0E8]">{prop.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B0B0B0]">
                {prop.desc}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. TESTIMONIALS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const TESTIMONIALS = [
  {
    name: 'Carlos M.',
    location: 'Miami Beach, FL',
    text: 'Rented the Aventador for my birthday weekend. The delivery was flawless — they brought it right to my hotel at the Setai. Absolute dream experience.',
  },
  {
    name: 'Jessica R.',
    location: 'New York, NY',
    text: 'Booked the G-Wagon for a week in South Beach. Prestige made everything seamless from start to finish. Already planning my next rental.',
  },
  {
    name: 'David T.',
    location: 'Coral Gables, FL',
    text: 'I have rented from five different companies in Miami. Prestige is in a league of their own — the cars are immaculate and the service is personal.',
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0F0F0F] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-20 text-center">
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-[#C9A84C]" />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-8 md:p-10">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]"
                    />
                  ))}
                </div>

                <p className="text-base leading-relaxed text-[#B0B0B0]">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-8 border-t border-[#2A2A2A] pt-4">
                  <p className="font-semibold text-[#F5F0E8]">{t.name}</p>
                  <p className="text-xs text-[#B0B0B0]">{t.location}</p>
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
   5. CTA BANNER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A] px-6 py-32 md:py-44">
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl text-[#F5F0E8] sm:text-4xl md:text-5xl">
            Ready to Drive Your Dream?
          </h2>
          <p className="mt-6 text-base text-[#B0B0B0] md:text-lg">
            Book now or call us — we&apos;ll have your car ready within hours.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/fleet"
              className="inline-block rounded bg-[#C9A84C] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-[#0F0F0F] transition-colors hover:bg-[#d4b85e]"
            >
              Book Now
            </Link>
            <a
              href="tel:3055139711"
              className="inline-flex items-center gap-2 rounded border border-[#C9A84C] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-[#C9A84C] transition-colors hover:bg-[#C9A84C]/10"
            >
              <Phone className="h-4 w-4" />
              (305) 513-9711
            </a>
          </div>

          <a
            href="https://wa.me/13055139711"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#B0B0B0] transition-colors hover:text-[#C9A84C]"
          >
            <MessageCircle className="h-4 w-4" />
            Or message us on WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE EXPORT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedFleet />
      <SectionDivider />
      <WhyPrestige />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <CtaBanner />
    </main>
  );
}
