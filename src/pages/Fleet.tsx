import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cars, brands } from '../data/cars';
import type { Car } from '../data/cars';
import SEO from '../components/SEO';

type SortOption = 'none' | 'low' | 'high';
type CategoryFilter = 'all' | 'exotic' | 'suv' | 'convertible';

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'All',
  exotic: 'Exotic',
  suv: 'SUV',
  convertible: 'Convertible',
};

export default function Fleet() {
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [priceSort, setPriceSort] = useState<SortOption>('none');

  const filteredCars = useMemo(() => {
    let result: Car[] = [...cars];

    if (activeBrand !== 'all') {
      result = result.filter((c) => c.brand === activeBrand);
    }

    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory);
    }

    if (priceSort === 'low') {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (priceSort === 'high') {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    return result;
  }, [activeBrand, activeCategory, priceSort]);

  const filterBtnClass = (active: boolean) =>
    `whitespace-nowrap px-4 py-2 rounded-full text-sm font-sans transition-colors duration-200 cursor-pointer ${
      active
        ? 'bg-[#111111] text-white font-medium'
        : 'bg-[#F7F7F7] text-[#666666] border border-[#999999] hover:bg-[#E5E5E5] hover:text-[#111111]'
    }`;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Fleet | Prestige Luxury Rentals"
        description="Browse our collection of exotic and luxury cars for rent. Lamborghini, Ferrari, McLaren, Porsche, Mercedes, and more from $395/day."
      />
      {/* Page Header */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl text-[#111111] mb-5"
          >
            Our Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-lg text-[#666666] max-w-xl"
          >
            Explore our collection of the world's finest automobiles
          </motion.p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 py-5 space-y-4">
          {/* Brand Filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveBrand('all')}
              className={filterBtnClass(activeBrand === 'all')}
            >
              All
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={filterBtnClass(activeBrand === brand)}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Category + Sort Row */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide items-center">
            {(Object.keys(categoryLabels) as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={filterBtnClass(activeCategory === cat)}
              >
                {categoryLabels[cat]}
              </button>
            ))}

            <span className="w-px h-6 bg-[#E5E5E5] mx-2 shrink-0" />

            <button
              onClick={() => setPriceSort(priceSort === 'low' ? 'none' : 'low')}
              className={filterBtnClass(priceSort === 'low')}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => setPriceSort(priceSort === 'high' ? 'none' : 'high')}
              className={filterBtnClass(priceSort === 'high')}
            >
              Price: High to Low
            </button>
          </div>
        </div>
      </div>

      {/* Results Count + Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32 md:py-44">
        <p className="text-[#999999] font-sans text-sm mb-10">
          Showing {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''}
        </p>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car, i) => (
              <motion.div
                key={car.id}
                layoutId={car.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden group hover:shadow-sm transition-shadow duration-300"
              >
                {/* Car Image */}
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={car.image}
                    alt={`${car.year} ${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <p className="text-[#999999] text-xs tracking-widest uppercase font-sans mb-1">
                    {car.brand}
                  </p>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl text-[#111111]">
                      {car.model}
                    </h3>
                    <p className="text-[#111111] font-serif text-lg whitespace-nowrap">
                      ${car.pricePerDay.toLocaleString()}
                      <span className="text-xs text-[#999999] font-sans">/day</span>
                    </p>
                  </div>

                  {/* Specs Row */}
                  <div className="flex gap-4 mt-4 text-xs text-[#666666] font-sans">
                    <span>{car.specs.horsepower} HP</span>
                    <span>{car.specs.acceleration}</span>
                    <span>{car.specs.engine}</span>
                  </div>

                  {/* View Details Link */}
                  <Link
                    to={`/fleet/${car.id}`}
                    className="mt-6 block text-center py-2.5 rounded-md border border-[#111111] text-[#111111] font-sans font-medium text-sm hover:bg-[#111111] hover:text-white transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCars.length === 0 && (
          <div className="text-center py-28">
            <p className="text-[#666666] font-sans text-lg">
              No vehicles match your filters.
            </p>
            <button
              onClick={() => {
                setActiveBrand('all');
                setActiveCategory('all');
                setPriceSort('none');
              }}
              className="mt-4 text-[#C41E2A] font-sans underline hover:text-[#a01822] transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
