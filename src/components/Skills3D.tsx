import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Database, Cloud, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

interface SkillCategory {
  id: number;
  title: string;
  primary: {
    icon: React.ReactNode;
    label: string;
  };
  secondary: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
  description: string;
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend Mastery',
    primary: {
      icon: <Code2 className="w-16 h-16" />,
      label: 'React',
    },
    secondary: [
      { icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">TS</div>, label: 'TypeScript' },
      { icon: <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-white text-xs font-bold">TC</div>, label: 'Tailwind' },
      { icon: <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">FM</div>, label: 'Framer' },
    ],
    description: 'Building responsive, performant UIs with modern frameworks and best practices.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Backend Authority',
    primary: {
      icon: <Database className="w-16 h-16" />,
      label: '.NET Core',
    },
    secondary: [
      { icon: <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">C#</div>, label: 'C#' },
      { icon: <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">SQL</div>, label: 'SQL Server' },
      { icon: <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">µS</div>, label: 'Microservices' },
    ],
    description: 'Architecting scalable, robust backend systems with clean code principles.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    primary: {
      icon: <Cloud className="w-16 h-16" />,
      label: 'Azure',
    },
    secondary: [
      { icon: <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">GH</div>, label: 'GitHub' },
      { icon: <div className="w-6 h-6 bg-cyan-600 rounded flex items-center justify-center text-white text-xs font-bold">DK</div>, label: 'Docker' },
      { icon: <div className="w-6 h-6 bg-yellow-600 rounded flex items-center justify-center text-white text-xs font-bold">K8</div>, label: 'K8s' },
    ],
    description: 'Deploying and scaling applications with cloud infrastructure and CI/CD pipelines.',
    color: 'from-cyan-400 to-cyan-600',
  },
];

interface Skill3DCardProps {
  skill: SkillCategory;
  isFocused: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  index: number;
  totalCards: number;
  rotation: number;
}

function Skill3DCard({ skill, isFocused, onHoverStart, onHoverEnd, index, totalCards, rotation }: Skill3DCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  const cardRef = useRef<HTMLDivElement>(null);

  const angle = (index / totalCards) * 360;
  const isLeft = angle > 180;
  const tiltAngle = isLeft ? 30 : -30;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !isFocused) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHoverEnd();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      animate={{
        rotateY: isFocused ? 0 : tiltAngle,
        z: isFocused ? 200 : 0,
        scale: isFocused ? 1.05 : 0.92,
        opacity: isFocused ? 1 : 0.4,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 320,
        height: 380,
        margin: '-190px 0 0 -160px',
      }}
      className="perspective"
    >
      <motion.div
        style={{
          rotateX: isFocused ? rotateX : 0,
          rotateY: isFocused ? rotateY : 0,
        }}
        className="w-full h-full"
      >
        <div
          className={cn(
            'relative w-full h-full rounded-2xl overflow-hidden',
            'bg-gradient-to-br from-gray-900 to-gray-800',
            'border border-gray-700 backdrop-blur-md',
            'shadow-2xl',
            isFocused ? 'shadow-cyan-500/40' : 'shadow-gray-900/50',
            'transition-all duration-300'
          )}
          style={{
            perspective: '1200px',
          }}
        >
          <div className={cn('absolute inset-0 bg-gradient-to-br opacity-5', skill.color)}></div>

          {isFocused && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}

          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{skill.title}</h3>

              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{
                    y: isFocused ? [0, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: isFocused ? Infinity : 0,
                  }}
                  className="text-cyan-400"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))',
                  }}
                >
                  {skill.primary.icon}
                </motion.div>
              </div>

              <p className="text-sm text-cyan-400 font-semibold text-center mb-4">{skill.primary.label}</p>
              <p className="text-xs text-gray-400 text-center leading-relaxed">{skill.description}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 text-center mb-3">Supporting Skills</p>
              <div className="grid grid-cols-3 gap-3">
                {skill.secondary.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className={cn('p-2 rounded-lg', isFocused ? 'bg-gray-800/60' : 'bg-gray-800/40')}>{tech.icon}</div>
                    <span className="text-xs text-gray-400">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={isFocused ? { boxShadow: ['inset 0 0 30px rgba(34, 211, 238, 0)', 'inset 0 0 30px rgba(34, 211, 238, 0.2)', 'inset 0 0 30px rgba(34, 211, 238, 0)'] } : { boxShadow: 'inset 0 0 30px rgba(34, 211, 238, 0)' }}
            transition={{ duration: 2, repeat: isFocused ? Infinity : 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills3D() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || isHovering) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
      setFocusedIndex((prev) => (prev + 1) % skillsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering, isMobile]);

  if (isMobile) {
    return (
      <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
        </div>

        <div className="max-w-2xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn('p-6 rounded-2xl border border-gray-700/50', 'bg-gradient-to-br from-gray-900/50 to-gray-800/50', 'hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20', 'transition-all duration-300')}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-cyan-400 mt-1">{skill.primary.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-medium">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800/50 border border-cyan-500/30 rounded-full text-xs text-cyan-400">{skill.primary.label}</span>
                    {skill.secondary.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-xs text-gray-400">
                        {tech.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">3D Skills</span>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">Hover to explore • Auto-rotates when idle</p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative w-full h-96 mx-auto flex items-center justify-center"
          style={{
            perspective: '1200px',
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {skillsData.map((skill, index) => (
              <Skill3DCard
                key={skill.id}
                skill={skill}
                isFocused={index === focusedIndex}
                onHoverStart={() => {
                  setFocusedIndex(index);
                  setIsHovering(true);
                }}
                onHoverEnd={() => setIsHovering(false)}
                index={index}
                totalCards={skillsData.length}
                rotation={rotation}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {skillsData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setFocusedIndex(index)}
                animate={{
                  width: index === focusedIndex ? 32 : 8,
                  backgroundColor: index === focusedIndex ? 'rgb(34, 211, 238)' : 'rgb(107, 114, 128)',
                }}
                className="h-2 rounded-full transition-all"
              />
            ))}
          </div>
          <p className="text-gray-400 text-sm">Click or hover to explore different skill categories</p>
        </motion.div>
      </div>
    </section>
  );
}
