import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  Phone,
  Gauge,
  Zap,
  Cog,
  Fuel,
  Timer,
  Activity,
} from 'lucide-react';
import { getCarById, cars, type Car } from '../data/cars';
import { useMemo } from 'react';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const specs = [
  { key: 'engine' as const, label: 'Engine', icon: Cog },
  { key: 'horsepower' as const, label: 'Horsepower', icon: Zap },
  { key: 'topSpeed' as const, label: 'Top Speed', icon: Gauge },
  { key: 'acceleration' as const, label: '0-60', icon: Timer },
  { key: 'transmission' as const, label: 'Transmission', icon: Activity },
  { key: 'fuel' as const, label: 'Fuel', icon: Fuel },
];

const inclusions = [
  'Insurance',
  '24/7 Support',
  'Door-to-door delivery',
];

function getRelatedCars(car: Car): Car[] {
  const sameCat = cars.filter(
    (c) => c.category === car.category && c.id !== car.id
  );
  const pool = sameCat.length >= 3 ? sameCat : [...sameCat, ...cars.filter((c) => c.id !== car.id && !sameCat.includes(c))];
  // Shuffle and take 3
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

function CarDetail() {
  const { id } = useParams<{ id: string }>();
  const car = id ? getCarById(id) : undefined;

  const related = useMemo(() => (car ? getRelatedCars(car) : []), [car]);

  if (!car) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-6">
        <h1 className="font-serif text-4xl text-[#111111]">Vehicle Not Found</h1>
        <p className="text-[#666666] text-lg">
          The vehicle you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/fleet"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#C41E2A] text-white font-semibold tracking-widest uppercase text-sm hover:bg-[#a01822] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Fleet
        </Link>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in renting the ${car.year} ${car.brand} ${car.model}. Please let me know availability.`
  );
  const whatsappUrl = `https://wa.me/13055139711?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${car.brand} ${car.model} Rental | Prestige Luxury Rentals`}
        description={`Rent the ${car.year} ${car.brand} ${car.model} starting at $${car.pricePerDay.toLocaleString()}/day. Door-to-door delivery in Miami, Orlando & Atlanta.`}
      />
      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={car.images[0] || car.image}
          alt={`${car.year} ${car.brand} ${car.model}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-24 left-6 lg:left-10 z-10"
        >
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Fleet
          </Link>
        </motion.div>

        {/* Hero text overlay */}
        <div className="absolute bottom-8 left-6 lg:left-10 z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white/70 text-sm tracking-widest uppercase mb-2"
          >
            {car.brand}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white"
          >
            {car.model}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 md:py-44">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left Column — 60% */}
          <div className="lg:w-[60%]">
            {/* Heading + Year */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-serif text-3xl md:text-4xl text-[#111111]">
                  {car.brand} {car.model}
                </h2>
                <span className="px-3 py-1 text-xs tracking-widest uppercase text-[#666666] border border-[#E5E5E5] rounded">
                  {car.year}
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-[#666666] text-lg leading-relaxed mb-12"
            >
              {car.description}
            </motion.p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {specs.map((spec, i) => {
                const Icon = spec.icon;
                const val = car.specs[spec.key];
                return (
                  <motion.div
                    key={spec.key}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={i + 2}
                    className="relative bg-white p-6 border border-[#E5E5E5] rounded-lg overflow-hidden"
                  >
                    {/* Red accent top */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C41E2A]" />
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="w-4 h-4 text-[#C41E2A]" />
                      <span className="text-xs tracking-widest uppercase text-[#999999]">
                        {spec.label}
                      </span>
                    </div>
                    <p className="text-[#111111] text-lg font-medium">
                      {spec.key === 'horsepower' ? `${val} HP` : val}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column — 40% */}
          <div className="lg:w-[40%]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="lg:sticky lg:top-28"
            >
              <div className="bg-white border border-[#E5E5E5] rounded-xl shadow-sm overflow-hidden">
                <div className="p-10">
                  {/* Price */}
                  <p className="text-[#999999] text-sm tracking-widest uppercase mb-1">
                    Starting at
                  </p>
                  <p className="font-serif text-4xl text-[#111111] mb-10">
                    ${car.pricePerDay.toLocaleString()}
                    <span className="text-lg text-[#999999] font-sans">
                      /day
                    </span>
                  </p>

                  {/* WhatsApp CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 bg-[#C41E2A] text-white font-semibold tracking-widest uppercase text-sm rounded-lg hover:bg-[#a01822] transition-colors duration-300 mb-8"
                  >
                    Request This Vehicle
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+13055139711"
                    className="flex items-center justify-center gap-3 text-[#666666] hover:text-[#111111] transition-colors duration-300 mb-10"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm tracking-wide">
                      (305) 513-9711
                    </span>
                  </a>

                  {/* Divider */}
                  <div className="h-px bg-[#E5E5E5] mb-8" />

                  {/* Inclusions */}
                  <p className="text-xs tracking-widest uppercase text-[#999999] mb-5">
                    Includes
                  </p>
                  <ul className="space-y-3">
                    {inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[#111111]"
                      >
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C41E2A]/10">
                          <Check className="w-3 h-3 text-[#C41E2A]" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Cars */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-32 md:pb-44">
        <div className="h-px bg-[#E5E5E5] mb-20" />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="font-serif text-3xl text-[#111111] mb-12"
        >
          You May Also Like
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((r, i) => (
            <motion.div
              key={r.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
            >
              <Link
                to={`/fleet/${r.id}`}
                className="group block bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:shadow-sm transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={r.image}
                    alt={`${r.year} ${r.brand} ${r.model}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#999999] text-xs tracking-widest uppercase mb-1">
                    {r.brand}
                  </p>
                  <h3 className="font-serif text-xl text-[#111111] mb-2">
                    {r.model}
                  </h3>
                  <p className="text-[#666666] text-sm">
                    From{' '}
                    <span className="text-[#111111] font-medium">
                      ${r.pricePerDay.toLocaleString()}/day
                    </span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CarDetail;
