import { motion } from 'framer-motion';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Project Manager at NeoSOFT',
    quote:
      'Exceptional backend architecture and API development. Delivered scalable solutions that improved system performance by 40%. A true problem-solver who thinks about the big picture.',
    rating: 5,
    initials: 'SC',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Senior Architect',
    quote:
      'Outstanding React expertise with meticulous attention to UI/UX details. Built responsive interfaces that exceeded client expectations. Excellent communication and collaborative approach.',
    rating: 5,
    initials: 'MR',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    name: 'Emily Watson',
    title: 'Lead Designer',
    quote:
      'Brilliant at translating designs into pixel-perfect React components. Great understanding of user experience principles and ability to optimize performance without sacrificing aesthetics.',
    rating: 5,
    initials: 'EW',
    color: 'from-cyan-400 to-green-500',
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'CTO at TechVentures',
    quote:
      'Exceptional problem-solving abilities and leadership qualities. Led cross-functional teams with clarity and confidence. Delivered mission-critical features on tight deadlines.',
    rating: 5,
    initials: 'DK',
    color: 'from-blue-400 to-purple-500',
  },
];

const truncateText = (text: string, maxLength: number = 120) => {
  if (text.length <= maxLength) return { text, isTruncated: false };
  return { text: text.substring(0, maxLength) + '...', isTruncated: true };
};

const TestimonialCard = ({ testimonial, isHovered }: { testimonial: Testimonial; isHovered: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { text: displayText, isTruncated } = isExpanded
    ? { text: testimonial.quote, isTruncated: false }
    : truncateText(testimonial.quote);

  return (
    <motion.div
      animate={{
        rotateZ: isHovered ? 0 : Math.sin(Date.now() / 1000) * 1.5,
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      className="group relative flex-shrink-0 w-80 md:w-96"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative h-80 bg-white/5 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white font-bold text-sm">{testimonial.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-lg font-semibold text-white truncate">{testimonial.name}</h4>
              <p className="text-sm text-gray-400 truncate">{testimonial.title}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6 h-20 overflow-hidden">{displayText}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
            ))}
          </div>
          {isTruncated && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
            >
              {isExpanded ? (
                <>
                  <span>Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>More</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Kind Words from </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Colleagues
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feedback from teammates and collaborators about working together.
          </p>
        </motion.div>

        {/* INFINITE MARQUEE */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

          <motion.div
            ref={marqueeRef}
            animate={{
              x: hoveredId ? 0 : [-2000, 0],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            onMouseEnter={() => setHoveredId(-1)}
            onMouseLeave={() => setHoveredId(null)}
            className="flex gap-6 py-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <TestimonialCard testimonial={testimonial} isHovered={hoveredId === testimonial.id} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE CAROUSEL (VISIBLE ON SMALL SCREENS) */}
        <div className="md:hidden mt-8 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 snap-center">
                <TestimonialCard testimonial={testimonial} isHovered={hoveredId === testimonial.id} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default TestimonialsSection;
