import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

/* ─── Types ─── */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

/* ─── FAQ Data ─── */
const categories: FAQCategory[] = [
  {
    title: 'Booking & Process',
    items: [
      {
        question: 'How does the rental process work?',
        answer:
          'Send us over your drivers license and insurance policy for verification. Once verified, we will send a credit card authorization form via email and ask for delivery details to finalize your reservation.',
      },
      {
        question: 'What is the rental process?',
        answer:
          "Send us your driver's license and insurance for verification. Once verified, we send a credit card authorization form and finalize delivery details.",
      },
      {
        question: 'Do you offer delivery?',
        answer:
          'Yes! We offer nationwide delivery depending on rental duration. Please provide us with a 1 hour window.',
      },
      {
        question: 'Do you deliver to the airport?',
        answer:
          'Yes! We deliver to Miami International, Fort Lauderdale, Palm Beach, and Naples airports.',
      },
      {
        question: 'Do you do hourly rentals?',
        answer:
          'On Tuesdays and Wednesdays we offer hourly rentals. There is a 4 hour minimum and the rental must be local.',
      },
      {
        question: 'How many days minimum?',
        answer:
          'We require a 24 hour minimum rental. Certain cities, holidays, or weekends may require a 2-3 day minimum rental.',
      },
      {
        question: 'One way rentals?',
        answer:
          'Yes we offer one way rentals. There is a fee depending on the pick up and drop off point.',
      },
      {
        question: 'Do you offer chauffeur services?',
        answer: 'Yes. On select vehicles in select locations. 4 hour minimum.',
      },
      {
        question: 'Hours of operation?',
        answer:
          'Monday-Friday 9am-7pm, Saturday 10am-6pm, and Sunday 10am-5pm EST.',
      },
      {
        question: 'Special requests?',
        answer:
          'Any special requests inquire by calling us at +1 (305) 513.9711.',
      },
    ],
  },
  {
    title: 'Requirements',
    items: [
      {
        question: 'Do you require auto insurance?',
        answer:
          'Yes. The renter is required to have full coverage auto insurance.',
      },
      {
        question: 'Do you offer insurance?',
        answer:
          'Insurance can be offered on certain vehicles to International clients only. Certain premium credit cards also provide insurance coverage — including but not limited to: AMEX Platinum, Centurion, VISA Infinite, MasterCard Black.',
      },
      {
        question: 'How old do I have to be?',
        answer: 'You must be at least 25 years of age to rent with us.',
      },
      {
        question: 'Can someone else rent for me?',
        answer:
          'No. Operation of any of our vehicles by any person not listed on the signed rental agreement is strictly prohibited.',
      },
      {
        question: 'How far can I drive / miles per day?',
        answer:
          'All vehicles are required to stay within state lines unless there is written approval prior to the rental. Rentals include 100 complimentary miles per day.',
      },
    ],
  },
  {
    title: 'Pricing & Fees',
    items: [
      {
        question: 'Do you accept cash?',
        answer:
          'Yes. However, the renter is still required to provide 2 forms of identification.',
      },
      {
        question: 'Can I pay with cash?',
        answer:
          'We accept cash, however the security hold must be on a major credit card or debit card.',
      },
      {
        question: 'Additional fees?',
        answer:
          'All rentals have a $12.99 toll fee and $2.99 vehicle license recovery fee that are billed per day.',
      },
      {
        question: 'Security deposit?',
        answer: 'Security deposits can range between $1,000-$5,000.',
      },
      {
        question: 'Do rentals have taxes?',
        answer:
          'Yes. All rentals have additional sales and rental tax.',
      },
      {
        question: 'Security hold duration?',
        answer:
          'A security hold can be held for up to 30 days. If there are no damages or additional charges, you can expect it back within 24-72 hours.',
      },
    ],
  },
  {
    title: 'Policies',
    items: [
      {
        question: 'Refund policy?',
        answer:
          'The 20% reservation deposit is nonrefundable, but can be applied to a future rental.',
      },
      {
        question: 'Can I smoke in the vehicle?',
        answer:
          'Smoking in our vehicles is strictly prohibited and will result in a $500 fee.',
      },
    ],
  },
];

/* ─── Animated Section ─── */
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

/* ─── Accordion Item ─── */
function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-colors duration-300 ${
        isOpen ? 'bg-light border-l-4 border-red' : 'bg-white border-l-4 border-transparent'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-8 text-left cursor-pointer group"
      >
        <span
          className={`font-serif text-lg md:text-xl transition-colors duration-300 ${
            isOpen ? 'text-red' : 'text-dark group-hover:text-red'
          }`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors duration-300 ${
              isOpen ? 'text-red' : 'text-gray'
            }`}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-8 pb-8 text-gray leading-relaxed font-sans">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FAQs PAGE
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FAQs() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenIndex((prev) => (prev === key ? null : key));
  };

  return (
    <main className="min-h-screen bg-white">
      <SEO
        title="FAQs | Prestige Luxury Rentals"
        description="Frequently asked questions about renting exotic and luxury cars from Prestige Luxury Rentals. Booking, requirements, pricing, and policies."
      />
      {/* ── Hero ── */}
      <section className="relative flex items-center justify-center h-[50vh] min-h-[360px] overflow-hidden bg-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide text-dark">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-px bg-red mx-auto mt-6" />
          <p className="mt-6 text-gray text-lg md:text-xl max-w-2xl mx-auto font-sans">
            Everything you need to know about renting with Prestige
          </p>
        </motion.div>
      </section>

      {/* ── FAQ Categories ── */}
      <section className="py-32 md:py-44 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {categories.map((category, catIdx) => (
            <AnimatedSection key={category.title} delay={catIdx * 0.1} className="mb-20">
              <h2 className="font-serif text-2xl md:text-3xl text-dark mb-8">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      isOpen={openIndex === key}
                      onToggle={() => handleToggle(key)}
                    />
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-32 md:py-44 border-t border-gray-muted bg-light">
        <AnimatedSection className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark mb-6">
            Still have questions?
          </h2>
          <p className="text-gray text-lg mb-12 font-sans">
            Our team is standing by to help you find the perfect vehicle for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13055139711"
              className="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              (305) 513-9711
            </a>
            <a
              href="https://wa.me/13055139711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-red text-red hover:bg-red/5 font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

export default FAQs;
