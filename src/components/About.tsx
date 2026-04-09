import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Database, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2;
    const increment = target / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
    </div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div
              className={cn(
                "p-8 rounded-2xl border border-cyan-500/30",
                "bg-gradient-to-br from-gray-900/50 to-gray-800/50",
                "shadow-lg shadow-cyan-500/10",
                "hover:shadow-xl hover:shadow-cyan-500/20",
                "transition-all duration-300"
              )}
            >
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <Counter target={3} suffix="+" />
                  <p className="text-gray-400 text-sm font-medium">Years of Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <Counter target={20} suffix="+" />
                  <p className="text-gray-400 text-sm font-medium">Projects Completed</p>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700/50 flex items-center gap-4">
                <div className="flex gap-3">
                  {[
                    { icon: Code2, color: 'text-cyan-400' },
                    { icon: Database, color: 'text-blue-400' },
                    { icon: Zap, color: 'text-cyan-300' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={cn('p-2 rounded-lg bg-gray-800/50 border border-gray-700/50', item.color)}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Passionate about clean code</p>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 8 }}
              className={cn(
                "p-6 rounded-lg border border-gray-700/50",
                "bg-gray-800/30 hover:bg-gray-800/50",
                "transition-all duration-300"
              )}
            >
              <p className="text-gray-400 leading-relaxed">
                Building robust full-stack applications with modern technologies. Specialized in .NET backend and React frontend development.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Senior Full-Stack Engineer</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate developer focused on creating scalable, maintainable applications. With expertise in both backend and frontend technologies, I bridge the gap between complex business logic and intuitive user experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Backend Expertise</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Strong foundation in .NET Core and C#, specializing in RESTful APIs, microservices architecture, and SQL Server database optimization. Committed to SOLID principles and clean architecture patterns.
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Frontend Development</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Proficient in modern React development with TypeScript, creating responsive and performant user interfaces. Expertise in state management, component architecture, and accessibility standards.
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Full-Stack Philosophy</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Advocate for end-to-end quality and collaboration. Every project reflects commitment to best practices, code quality, and delivering exceptional user value.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span className="font-medium">Learn more about my work</span>
              <span>→</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
