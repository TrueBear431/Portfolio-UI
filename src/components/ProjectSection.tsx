import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Human Resource Management System',
    description: 'Full employee lifecycle management platform with attendance tracking, payroll processing, performance reviews, and comprehensive analytics dashboard for HR operations.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['.NET Core', 'React', 'SQL Server', 'Azure', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Customer Relationship Management',
    description: 'Advanced CRM portal with sales pipeline tracking, customer analytics, automated reporting, and real-time business intelligence for data-driven decision making.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['ASP.NET', 'Angular', 'PostgreSQL', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Intelligent analytics platform leveraging machine learning algorithms for predictive insights, data visualization, and automated reporting with real-time data processing capabilities.',
    image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Python', 'React', 'TensorFlow', 'GraphQL', 'AWS ML'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'RelativityOne Custom Integration',
    description: 'Document automation and intelligent summary generation tool integrated with RelativityOne for legal document management and processing.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['C#', 'REST API', 'Azure Functions', 'AI/ML', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Inventory Management System',
    description: 'Real-time inventory tracking and warehouse management solution with automated stock alerts, supplier integration, and predictive analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Node.js', 'MongoDB', 'Vue.js', 'AWS', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Financial Analytics Dashboard',
    description: 'Comprehensive financial reporting tool with real-time data visualization, revenue forecasting, expense tracking, and customizable financial metrics.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Python', 'React', 'PostgreSQL', 'Grafana', 'Apache Airflow'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Task Management & Collaboration',
    description: 'Team collaboration platform with task automation, real-time notifications, timeline tracking, and seamless integration with popular tools.',
    image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1200',
    techStack: ['Next.js', 'Supabase', 'TypeScript', 'WebRTC', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePosition({ x, y });

    const moveX = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const moveY = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setCardPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
    setCardPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${featured ? 'lg:col-span-1' : ''}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 overflow-hidden shadow-lg shadow-cyan-500/10"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: isHovered ? mousePosition.y : 0,
          rotateY: isHovered ? mousePosition.x : 0,
          x: cardPosition.x,
          y: cardPosition.y,
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(34, 211, 238, 0.4)'
            : '0 10px 15px -3px rgba(34, 211, 238, 0.1)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden rounded-t-xl bg-gray-950">
          <div className="absolute top-0 left-0 right-0 z-10 bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20 px-2 py-2 flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-md px-2 py-0.5 text-xs text-gray-400 max-w-xs truncate">
                {project.title}
              </div>
            </div>
          </div>

          <div className={`relative mt-8 overflow-hidden ${featured ? 'h-40' : 'h-32'}`}>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover object-top"
              animate={{
                translateY: isHovered ? '-30%' : '0%',
              }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              style={{ minHeight: '150%' }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-80"></div>
        </div>

        <motion.div
          className="p-6 space-y-4"
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-sm shadow-cyan-500/10"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-400 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full hover:bg-gray-800/50 transition-all">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <motion.div
            className="flex gap-2 pt-1"
            style={{
              transform: 'translateZ(30px)',
            }}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 hover:border-cyan-500 text-cyan-300 hover:text-cyan-200 rounded-lg transition-all group/btn hover:shadow-lg hover:shadow-cyan-500/30 font-medium"
                whileHover={{ scale: 1.05, translateZ: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-3 h-3" />
                <span className="text-xs font-medium hidden sm:inline">Demo</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-gray-800/50 hover:bg-gray-700 border border-cyan-500/20 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-300 rounded-lg transition-all group/btn hover:shadow-lg hover:shadow-cyan-500/10 font-medium"
                whileHover={{ scale: 1.05, translateZ: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-3 h-3" />
                <span className="text-xs font-medium hidden sm:inline">GitHub</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 pointer-events-none"
          animate={{
            background: isHovered
              ? 'linear-gradient(to bottom right, rgba(34, 211, 238, 0.08), transparent, rgba(59, 130, 246, 0.08))'
              : 'linear-gradient(to bottom right, rgba(34, 211, 238, 0), transparent, rgba(59, 130, 246, 0))',
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.15), transparent 40%)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            '--mouse-x': `${(mousePosition.x / 20 + 0.5) * 100}%`,
            '--mouse-y': `${(-mousePosition.y / 20 + 0.5) * 100}%`,
          } as any}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of enterprise-level applications and custom solutions built with modern technologies
          </p>
        </motion.div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-white">Featured </span>
              <span className="text-cyan-400">Highlights</span>
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={true}
              />
            ))}
          </div>
        </div>

        {/* All Other Projects Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-white">Other </span>
              <span className="text-cyan-400">Projects</span>
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default ProjectsSection;
