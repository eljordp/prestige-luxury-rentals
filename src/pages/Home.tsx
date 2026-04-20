import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronDown, Phone } from 'lucide-react';
import { getFeaturedCars } from '../data/cars';
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
        poster="https://prestigeluxuryrentals.com/wp-content/uploads/2021/01/Lamborghini-Aventador-Front.jpg"
      >
        <source
          src="https://videos.pexels.com/video-files/17051328/17051328-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-32 sm:px-12 md:px-20 lg:px-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Miami&apos;s Premier
          <br />
          Exotic Car Rental
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-sm font-light tracking-wide text-white/70 sm:text-base md:text-lg"
        >
          Ferrari. Lamborghini. Rolls-Royce. Delivered to your door since 2004.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-start gap-4"
        >
          <Link
            to="/fleet"
            className="inline-block rounded bg-[#C41E2A] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a81923]"
          >
            View Our Fleet
          </Link>
          <a
            href="tel:3055139711"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            (305) 513-9711
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
          <ChevronDown className="h-7 w-7 text-white/40" />
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
    <section className="bg-white px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Heading — left aligned */}
        <AnimatedSection className="mb-6">
          <h2 className="font-serif text-4xl text-[#111111] sm:text-5xl md:text-6xl">
            The Fleet
          </h2>
        </AnimatedSection>
        <AnimatedSection className="mb-16" delay={0.1}>
          <p className="max-w-lg text-base text-[#666666]">
            Hand-picked exotics, maintained in-house, delivered to you
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car, i) => (
            <AnimatedSection key={car.id} delay={i * 0.1}>
              <Link
                to={`/fleet/${car.id}`}
                className="group block overflow-hidden rounded-xl border border-[#E5E5E5] bg-white transition-shadow hover:shadow-sm"
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
                  <p className="text-xs font-medium uppercase tracking-wider text-[#999999]">
                    {car.brand}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-[#111111]">
                    {car.model}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-[#666666]">
                      <span className="text-lg font-semibold text-[#111111]">
                        ${car.pricePerDay.toLocaleString()}
                      </span>
                      /day
                    </p>
                    <span className="text-sm font-medium text-[#999999] transition-colors group-hover:text-[#C41E2A]">
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
   3. FULL-WIDTH IMAGE BREAK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ImageBreak() {
  return (
    <section className="w-full">
      <div className="aspect-[21/9] w-full overflow-hidden">
        <img
          src="https://prestigeluxuryrentals.com/wp-content/uploads/2021/01/Lamborghini-Aventador-Front.jpg"
          alt="Lamborghini Aventador"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. WHY PRESTIGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function WhyPrestige() {
  return (
    <section className="bg-[#F7F7F7] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16">
          <h2 className="font-serif text-4xl text-[#111111] sm:text-5xl md:text-6xl">
            Why Clients Choose Us
          </h2>
        </AnimatedSection>

        {/* 2-column layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — stats */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col gap-12">
              <div>
                <p className="font-serif text-6xl text-[#111111] md:text-7xl">20+</p>
                <p className="mt-2 text-base text-[#666666]">Years in business</p>
              </div>
              <div className="h-px bg-[#E5E5E5]" />
              <div>
                <p className="font-serif text-6xl text-[#111111] md:text-7xl">50%</p>
                <p className="mt-2 text-base text-[#666666]">Repeat clients</p>
              </div>
              <div className="h-px bg-[#E5E5E5]" />
              <div>
                <p className="font-serif text-6xl text-[#111111] md:text-7xl">24/7</p>
                <p className="mt-2 text-base text-[#666666]">Availability</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — text */}
          <AnimatedSection delay={0.25}>
            <div className="flex flex-col justify-center lg:py-8">
              <p className="text-lg leading-relaxed text-[#666666] md:text-xl">
                Since 2004, Prestige Luxury Rentals has been Miami&apos;s trusted source
                for exotic and luxury vehicles. Every car in our fleet is maintained
                in-house by our own technicians — no third-party rentals, no surprises.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-[#666666] md:text-xl">
                We deliver door-to-door, any time of day, anywhere in South Florida.
                From the airport to your hotel, from a weekend escape to a month-long stay
                — our team handles every detail so you can focus on the drive.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-[#666666] md:text-xl">
                Every rental includes comprehensive insurance, 24/7 roadside support,
                and a personal concierge who knows the fleet inside and out. This is
                car rental done properly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. TESTIMONIALS
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
    <section className="bg-white px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16">
          <h2 className="font-serif text-4xl text-[#111111] sm:text-5xl md:text-6xl">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="border-l-2 border-[#C41E2A] bg-white py-6 pl-8 pr-6">
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-[#111111] text-[#111111]"
                    />
                  ))}
                </div>

                <p className="text-base leading-relaxed text-[#666666]">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-8">
                  <p className="font-semibold text-[#111111]">{t.name}</p>
                  <p className="text-sm text-[#999999]">{t.location}</p>
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
   6. CTA — Dark contrast section
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CtaBanner() {
  return (
    <section className="bg-[#111111] px-6 py-32 md:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Ready to drive?
          </h2>

          <div className="mt-12 flex flex-col items-center gap-5">
            <Link
              to="/fleet"
              className="inline-block rounded bg-[#C41E2A] px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#a81923]"
            >
              Explore the Fleet
            </Link>
            <a
              href="tel:3055139711"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
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
   PAGE EXPORT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function Home() {
  return (
    <main>
      <SEO
        title="Exotic & Luxury Car Rental Miami | Prestige Luxury Rentals"
        description="Premium exotic car rentals in Miami, Orlando & Atlanta. Ferrari, Lamborghini, Rolls-Royce, and more. 24/7 delivery. Established 2004."
      />
      <Hero />
      <FeaturedFleet />
      <ImageBreak />
      <WhyPrestige />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
