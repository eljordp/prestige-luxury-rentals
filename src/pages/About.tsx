import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Wrench,
  BadgeDollarSign,
  Truck,
  MapPin,
  Phone,
  Clock,
} from 'lucide-react';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '50%', label: 'Repeat Clients' },
  { value: '25%', label: 'From Referrals' },
  { value: '4', label: 'Locations' },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'No Hidden Fees',
    description:
      'At Prestige Luxury Rentals, there is no such thing as a hidden fee. Every cost is communicated upfront so you know exactly what you\u2019re paying \u2014 no surprises, no fine print, no games.',
  },
  {
    icon: Wrench,
    title: 'In-House Service',
    description:
      'We own our cars and service them with our own mechanics. That means every vehicle in our fleet is maintained to factory standards and inspected before every rental.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Price Match Guarantee',
    description:
      'Because we own and maintain our fleet in-house, we offer the lowest prices of any company in the market. Find a better price and we\u2019ll match it \u2014 guaranteed.',
  },
  {
    icon: Truck,
    title: 'Door-to-Door Delivery',
    description:
      'We bring the car to you. Door-to-door delivery, personal and luggage transfer, and a dedicated 24/7 agent available whenever you need us.',
  },
];

const locations = [
  {
    city: 'Miami, FL',
    tag: 'Headquarters',
    address: '4019 NW 25th Street, Miami, FL 33142',
    phone: '(305) 513-9711',
    hours: { weekday: 'Mon\u2013Fri: 9am \u2013 7pm', saturday: 'Sat: 10am \u2013 6pm', sunday: 'Sun: 10am \u2013 5pm' },
  },
  {
    city: 'Orlando, FL',
    tag: null,
    address: '9187 Boggy Creek Rd #7, Orlando, FL 32824',
    phone: '(407) 792-5440',
    hours: { weekday: 'Mon\u2013Fri: 9am \u2013 7pm', saturday: 'Sat: 10am \u2013 6pm', sunday: 'Sun: 10am \u2013 5pm' },
  },
  {
    city: 'Atlanta, GA',
    tag: null,
    address: '7100 Buford Hwy NE, Doraville, GA 30340',
    phone: '(404) 810-9070',
    hours: { weekday: 'Mon\u2013Fri: 9am \u2013 7pm', saturday: 'Sat: 10am \u2013 6pm', sunday: 'Sun: 10am \u2013 5pm' },
  },
];

function About() {
  return (
    <main className="min-h-screen">
      <SEO
        title="About Us | Prestige Luxury Rentals"
        description="Miami's most trusted exotic car rental since 2004. 4 locations, 50% repeat clients, in-house service, price match guarantee."
      />
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center h-[55vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/60 to-charcoal-dark" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Est. 2004
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-cream">
            About Prestige
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
            className="font-serif text-3xl md:text-5xl text-cream text-center mb-20"
          >
            Our Story
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl leading-relaxed text-smoke"
            >
              Established in 2004, Prestige Luxury Rentals has been Miami&rsquo;s
              most trusted exotic car rental service for over 20 years. What
              started as a passion for fine automobiles has grown into a premier
              fleet serving clients across Miami, Orlando, Atlanta, and
              nationwide.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl leading-relaxed text-smoke"
            >
              Between owning our cars and servicing them in-house, we are able to
              offer the lowest prices of any company in the market. Our clients
              don&rsquo;t just rent from us once &mdash; over 50% come back, and
              a quarter of our business comes from referrals. That kind of trust
              isn&rsquo;t bought. It&rsquo;s earned, one flawless experience at
              a time.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={3}
              className="text-lg md:text-xl leading-relaxed text-smoke"
            >
              From our four physical locations to 24/7 agent availability, we
              built Prestige around a simple idea: the experience should match
              the car. No hidden fees. No excuses. Just world-class vehicles
              delivered to your door with white-glove service.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/5 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 md:py-44">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <span className="block font-serif text-5xl md:text-6xl lg:text-7xl text-gold">
                  {stat.value}
                </span>
                <span className="block mt-3 text-sm tracking-[0.2em] uppercase text-smoke">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
            className="font-serif text-3xl md:text-5xl text-cream text-center mb-20"
          >
            What Sets Us Apart
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-charcoal border border-white/5 p-10 lg:p-14 hover:border-gold/20 transition-colors duration-500"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 mb-8">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-cream mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-smoke">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Locations ── */}
      <section className="border-y border-white/5 bg-charcoal py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
            className="font-serif text-3xl md:text-5xl text-cream text-center mb-20"
          >
            Our Locations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-charcoal-dark border border-white/5 p-10 lg:p-12 hover:border-gold/20 transition-colors duration-500"
              >
                <h3 className="font-serif text-2xl text-cream mb-1">
                  {loc.city}
                </h3>
                {loc.tag && (
                  <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-6">
                    {loc.tag}
                  </span>
                )}
                {!loc.tag && <div className="mb-6" />}

                <div className="space-y-4 text-sm text-smoke">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`}
                      className="hover:text-gold transition-colors duration-300"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div className="leading-relaxed">
                      <span className="block">{loc.hours.weekday}</span>
                      <span className="block">{loc.hours.saturday}</span>
                      <span className="block">{loc.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 md:py-44">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
              Book Your Dream Rental Today
            </h2>
            <p className="text-smoke text-lg max-w-xl mx-auto mb-12">
              Browse our fleet of exotic and luxury vehicles. Door-to-door
              delivery, no hidden fees, and 24/7 support included.
            </p>
            <Link
              to="/fleet"
              className="inline-block px-12 py-4 bg-gold text-charcoal-dark text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Explore the Fleet
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;
