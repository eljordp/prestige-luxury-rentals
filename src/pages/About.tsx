import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Shield, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: '20+', label: 'Years' },
  { value: '50+', label: 'Vehicles' },
  { value: '50%', label: 'Repeat Clients' },
  { value: '24/7', label: 'Availability' },
];

const values = [
  {
    icon: Car,
    title: 'Unmatched Selection',
    description:
      'From Lamborghini to Rolls-Royce, our fleet features the world\'s most coveted exotics — meticulously maintained and ready for any occasion.',
  },
  {
    icon: Star,
    title: 'White-Glove Service',
    description:
      'Complimentary delivery, 24/7 concierge support, and personalized itineraries. Every detail is handled so you can focus on the experience.',
  },
  {
    icon: Shield,
    title: 'Trusted Reputation',
    description:
      'Two decades of five-star service, thousands of satisfied clients, and a name synonymous with luxury in Miami and beyond.',
  },
];

function About() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[360px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/60 to-charcoal-dark" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-cream">
            About Prestige
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Story */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={0}
            className="text-lg md:text-xl leading-relaxed text-smoke"
          >
            Established in 2004, Prestige Luxury Rentals has been Miami's most trusted
            exotic car rental service for over 20 years. What started as a passion for
            fine automobiles has grown into a premier fleet serving clients across Miami,
            New York, and nationwide.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i}
              >
                <span className="block font-serif text-4xl md:text-5xl lg:text-6xl text-gold">
                  {stat.value}
                </span>
                <span className="block mt-2 text-sm tracking-[0.2em] uppercase text-smoke">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          custom={0}
          className="font-serif text-3xl md:text-4xl text-cream text-center mb-20"
        >
          Why Clients Choose Prestige
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i + 1}
                className="bg-charcoal border border-white/5 p-10 lg:p-12 flex flex-col items-center text-center hover:border-gold/20 transition-colors duration-500"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 mb-8">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-cream mb-4">{val.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-10">
              Ready to experience the Prestige difference?
            </h2>
            <Link
              to="/fleet"
              className="inline-block px-10 py-4 bg-gold text-charcoal-dark text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
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
