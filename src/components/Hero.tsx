import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, FolderGit2 } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { cn } from '../lib/utils';

export default function Hero() {
  const roles = ['Software Engineer', 'Full-stack Developer', 'UI/UX Enthusiast'];
  const currentRole = useTypingAnimation(roles, 100, 50, 2000);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-400 font-medium">Available for Work</span>
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Alex Dev</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 h-8 flex items-center"
              >
                <span className="mr-2">I'm a</span>
                <span className="text-cyan-400 font-semibold">{currentRole}</span>
                <span className="animate-pulse ml-1 text-cyan-400">|</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl"
            >
              Passionate about creating beautiful, functional, and user-friendly digital experiences.
              Specializing in modern web technologies and delivering high-quality solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "p-3 rounded-lg transition-all duration-200",
                    "bg-gray-800/50 border border-gray-700",
                    "hover:border-cyan-500/50 hover:bg-cyan-500/10",
                    "hover:shadow-lg hover:shadow-cyan-500/20"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
                  "bg-gradient-to-r from-cyan-500 to-blue-500",
                  "text-white font-medium text-sm sm:text-base",
                  "shadow-lg shadow-cyan-500/25",
                  "hover:shadow-xl hover:shadow-cyan-500/40",
                  "transition-all duration-200"
                )}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
                  "bg-gray-800/50 border border-gray-700",
                  "text-gray-300 font-medium text-sm sm:text-base",
                  "hover:border-cyan-500/50 hover:bg-cyan-500/10",
                  "hover:text-cyan-400",
                  "transition-all duration-200"
                )}
              >
                <FolderGit2 className="w-4 h-4" />
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-400 to-blue-500 rounded-full blur-xl opacity-40"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-5 blur-3xl"></div>

                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/30 bg-gradient-to-br from-cyan-600 to-blue-600">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 via-cyan-400/60 to-blue-500/80"></div>

                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-white drop-shadow-lg">AD</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400/30 rounded-full blur-2xl"
              ></motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
