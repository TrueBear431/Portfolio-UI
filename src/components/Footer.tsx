import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LEFT SIDE - COPYRIGHT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-semibold text-white">Alex Dev</span>. Built with{' '}
              <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Framer Motion</span>.
            </p>
          </motion.div>

          {/* CENTER - TIME & LOCATION BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            {/* TIME BADGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white/5 backdrop-blur-md border border-gray-700 rounded-full flex items-center gap-2 text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span>{currentTime}</span>
            </motion.div>

            {/* LOCATION BADGE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-white/5 backdrop-blur-md border border-gray-700 rounded-full flex items-center gap-2 text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>San Francisco, CA</span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - BACK TO TOP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-full hover:border-cyan-500 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM GRADIENT LINE */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
