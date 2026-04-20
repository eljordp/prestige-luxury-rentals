import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Building2,
  Truck,
} from 'lucide-react';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(305) 513-9711',
    href: 'tel:+13055139711',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+1 305-513-9711',
    href: 'https://wa.me/13055139711',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@prestigeluxuryrentals.com',
    href: 'mailto:info@prestigeluxuryrentals.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '4019 NW 25th St, Miami, Florida 33142',
    href: 'https://maps.google.com/?q=4019+NW+25th+St+Miami+FL+33142',
    external: true,
  },
];

const vehicleOptions = [
  'Lamborghini',
  'Ferrari',
  'McLaren',
  'Porsche',
  'Rolls-Royce',
  'Bentley',
  'Mercedes-Benz',
  'BMW',
  'Other',
];

const locations = [
  {
    icon: Building2,
    city: 'Miami',
    description: 'Our flagship location — exotic rentals, chauffeur services, and same-day delivery across South Florida.',
  },
  {
    icon: Building2,
    city: 'New York',
    description: 'Luxury fleet available throughout Manhattan, the Hamptons, and the tri-state area.',
  },
  {
    icon: Truck,
    city: 'Nationwide Delivery',
    description: 'We deliver anywhere in the continental United States. Contact us for custom logistics.',
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="Contact Us | Prestige Luxury Rentals"
        description="Get in touch with Prestige Luxury Rentals. Call (305) 513-9711 or visit our Miami, Orlando, or Atlanta locations."
      />
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
            Get In Touch
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
          {/* Left — Contact Info */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={0}
              className="font-serif text-2xl md:text-3xl text-cream mb-4"
            >
              Contact Information
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={1}
              className="text-smoke text-sm leading-relaxed mb-12"
            >
              Reach out by phone, WhatsApp, or email — our team is available around the
              clock to assist with reservations, quotes, and special requests.
            </motion.p>

            <div className="space-y-5">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeUp}
                    custom={i + 2}
                    className="flex items-start gap-4 p-6 bg-charcoal border border-white/5 hover:border-gold/20 transition-colors duration-500 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <span className="block text-xs tracking-[0.15em] uppercase text-smoke mb-1">
                        {item.label}
                      </span>
                      <span className="text-sm text-cream group-hover:text-gold transition-colors duration-300">
                        {item.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Send a Message
            </h2>
            <p className="text-smoke text-sm leading-relaxed mb-12">
              Tell us what you're looking for and we'll get back to you within the hour.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-20 bg-charcoal border border-white/5"
              >
                <CheckCircle className="w-12 h-12 text-gold mb-4" />
                <h3 className="font-serif text-2xl text-cream mb-2">Thank You</h3>
                <p className="text-sm text-smoke max-w-xs">
                  We've received your message and will be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-[0.15em] uppercase text-smoke mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 text-cream text-sm placeholder:text-smoke/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-smoke mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-white/10 text-cream text-sm placeholder:text-smoke/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs tracking-[0.15em] uppercase text-smoke mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-charcoal border border-white/10 text-cream text-sm placeholder:text-smoke/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-xs tracking-[0.15em] uppercase text-smoke mb-2">
                    Vehicle Interest
                  </label>
                  <select
                    id="vehicle"
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 text-cream text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-smoke">
                      Select a brand
                    </option>
                    {vehicleOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-charcoal text-cream">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.15em] uppercase text-smoke mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 text-cream text-sm placeholder:text-smoke/50 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your rental needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gold text-charcoal-dark text-sm font-semibold tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Locations We Serve */}
      <section className="border-t border-white/5 bg-charcoal">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            custom={0}
            className="font-serif text-3xl md:text-4xl text-cream text-center mb-20"
          >
            Locations We Serve
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {locations.map((loc, i) => {
              const Icon = loc.icon;
              return (
                <motion.div
                  key={loc.city}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="bg-charcoal-light border border-white/5 p-10 text-center hover:border-gold/20 transition-colors duration-500"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 mx-auto mb-6">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-cream mb-2">{loc.city}</h3>
                  <p className="text-sm text-smoke leading-relaxed">{loc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
