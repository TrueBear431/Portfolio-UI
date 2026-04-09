import { motion } from 'framer-motion';
import { Database, Code2, Lock, GitBranch, Package, Cpu, Cloud, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface SkillCard {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  size: 'large' | 'medium' | 'small';
  colSpan?: number;
  rowSpan?: number;
}

const SkillCard = ({
  title,
  skills,
  icon,
  size,
}: {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  size: 'large' | 'medium' | 'small';
}) => {
  const sizeClasses = {
    large: 'p-8',
    medium: 'p-6',
    small: 'p-4',
  };

  const textSizes = {
    large: 'text-2xl',
    medium: 'text-xl',
    small: 'text-lg',
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative group overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-gray-900/50 to-gray-800/50',
        'border border-gray-700/50 hover:border-cyan-500/50',
        'shadow-lg shadow-gray-900/20',
        'hover:shadow-xl hover:shadow-cyan-500/20',
        'transition-all duration-300',
        sizeClasses[size]
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className={cn('text-cyan-400 mb-4', size === 'small' ? 'w-8 h-8' : 'w-10 h-10')}>
            {icon}
          </div>
          <h3 className={cn('font-bold text-white mb-3', textSizes[size])}>{title}</h3>
        </div>

        <div>
          {size === 'large' ? (
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                  {skill}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-0.5 h-0.5 bg-cyan-400 rounded-full"></span>
                  {skill}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        animate={{
          boxShadow: [
            'inset 0 0 20px rgba(34, 211, 238, 0)',
            'inset 0 0 20px rgba(34, 211, 238, 0.2)',
            'inset 0 0 20px rgba(34, 211, 238, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const skillsData: SkillCard[] = [
    {
      title: 'Core Power',
      skills: ['.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'ASP.NET', 'Linq'],
      icon: <Cpu className="w-full h-full" />,
      size: 'large',
      colSpan: 2,
      rowSpan: 2,
    },
    {
      title: 'Modern Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
      icon: <Code2 className="w-full h-full" />,
      size: 'medium',
    },
    {
      title: 'Auth & Security',
      skills: ['JWT', 'OAuth2', 'Encryption', 'SSL/TLS'],
      icon: <Lock className="w-full h-full" />,
      size: 'small',
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'CI/CD'],
      icon: <GitBranch className="w-full h-full" />,
      size: 'small',
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Azure', 'Kubernetes', 'Linux'],
      icon: <Package className="w-full h-full" />,
      size: 'medium',
    },
    {
      title: 'Database',
      skills: ['SQL', 'NoSQL', 'MongoDB', 'Redis', 'PostgreSQL'],
      icon: <Database className="w-full h-full" />,
      size: 'small',
    },
    {
      title: 'Performance',
      skills: ['Optimization', 'Caching', 'Load Balancing', 'Monitoring'],
      icon: <Zap className="w-full h-full" />,
      size: 'small',
    },
    {
      title: 'Cloud Solutions',
      skills: ['Azure Cloud', 'AWS', 'Deployment', 'Scalability'],
      icon: <Cloud className="w-full h-full" />,
      size: 'small',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                skill.size === 'large' && 'lg:col-span-2 lg:row-span-2',
                skill.size === 'medium' && 'lg:col-span-2',
                skill.size === 'small' && 'lg:col-span-1'
              )}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Constantly learning and staying up-to-date with the latest technologies and best practices. Always excited to work with new tools and frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
