import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import React from 'react';

interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    skills: string[];
    side: 'left' | 'right';
    current?: boolean;
}

const experiences: Experience[] = [
    {
        id: 1,
        role: 'Software Engineer',
        company: 'NeoSOFT',
        period: '2022 - Present',
        description: 'Lead developer architecting and delivering enterprise-level solutions with focus on document automation and integration platforms.',
        highlights: [
            'Lead developer for RelativityOne custom integrations',
            'Built intelligent document summary generation tools',
            'Optimized workflows reducing processing time by 40%',
            'Mentored junior developers on best practices',
        ],
        skills: ['#DotNetCore', '#RelativityOne', '#React', '#Azure', '#TypeScript'],
        side: 'right',
        current: true,
    },
    {
        id: 2,
        role: 'Full-stack Developer',
        company: 'ConvergeSolution',
        period: '2020 - 2022',
        description: 'Designed and implemented comprehensive enterprise management systems handling complex business logic and data workflows.',
        highlights: [
            'Developed HRMS and CRM systems from scratch',
            'Secured APIs using JWT authentication and role-based access control',
            'Managed SQL Server databases with advanced query optimization',
            'Implemented real-time reporting dashboards',
        ],
        skills: ['#ASP.NET', '#Angular', '#SQLServer', '#JWT', '#Docker'],
        side: 'left',
    },
    {
        id: 3,
        role: 'Junior Developer',
        company: 'TechVision Solutions',
        period: '2019 - 2020',
        description: 'Contributed to cross-functional projects while developing web applications and strengthening core development fundamentals.',
        highlights: [
            'Developed responsive web applications using React and Redux',
            'Collaborated with senior developers on feature implementation',
            'Fixed critical bugs and improved application performance',
            'Participated in code reviews and knowledge sharing sessions',
        ],
        skills: ['#React', '#JavaScript', '#CSS', '#MongoDB', '#Node.js'],
        side: 'right',
    },
    {
        id: 4,
        role: 'Frontend Developer Intern',
        company: 'DigitalCore',
        period: '2018 - 2019',
        description: 'Gained practical experience building user interfaces and learning industry best practices in modern web development.',
        highlights: [
            'Built pixel-perfect UI components from design mockups',
            'Implemented responsive layouts using HTML, CSS, and JavaScript',
            'Optimized website performance and accessibility',
            'Assisted in migrating legacy codebase to modern frameworks',
        ],
        skills: ['#HTML5', '#CSS3', '#JavaScript', '#Bootstrap', '#Git'],
        side: 'left',
    },
];

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
    const isLeft = experience.side === 'left';
    const [isHovered, setIsHovered] = React.useState(false);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex gap-6 md:gap-8 items-start ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col`}
            style={{ perspective: '1000px' }}
        >
            <div className="w-full md:w-5/12">
                <motion.div
                    animate={{
                        rotateX: isHovered ? mousePosition.y : 0,
                        rotateY: isHovered ? mousePosition.x : 0,
                        scale: isHovered ? 1.05 : 1,
                        boxShadow: isHovered
                            ? '0 25px 50px -12px rgba(34, 211, 238, 0.4)'
                            : '0 10px 15px -3px rgba(34, 211, 238, 0.1)',
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 20,
                    }}
                    className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-cyan-500/30 p-8 shadow-lg shadow-cyan-500/10"
                    style={{ transformStyle: 'preserve-3d' }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="space-y-4 relative z-10"
                        style={{
                            transform: 'translateZ(20px)',
                        }}
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-3">
                                {experience.current && (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-cyan-400"
                                    />
                                )}
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {experience.role}
                                </h3>
                            </div>
                            <p className="text-cyan-400 font-semibold text-sm flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                {experience.company}
                            </p>
                            <p className="text-gray-400 text-sm flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {experience.period}
                            </p>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            {experience.description}
                        </p>

                        <motion.div
                            className="space-y-2 pt-2"
                            style={{
                                transform: 'translateZ(10px)',
                            }}
                        >
                            {experience.highlights.map((highlight, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-2 text-sm text-gray-300"
                                    animate={{
                                        opacity: isHovered ? 1 : 0.7,
                                    }}
                                    transition={{
                                        delay: i * 0.05,
                                    }}
                                >
                                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-2 pt-3"
                            style={{
                                transform: 'translateZ(15px)',
                            }}
                        >
                            {experience.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 py-1 text-xs font-medium text-cyan-400 bg-gray-800/50 border border-gray-700/50 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all"
                                    whileHover={{
                                        scale: 1.08,
                                        backgroundColor: 'rgba(34, 211, 238, 0.15)',
                                        borderColor: 'rgba(34, 211, 238, 0.5)',
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        animate={{
                            background: isHovered
                                ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.1), transparent, rgba(59, 130, 246, 0.08))'
                                : 'linear-gradient(135deg, rgba(34, 211, 238, 0), transparent, rgba(59, 130, 246, 0))',
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                            background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.12), transparent 40%)',
                        }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            '--mouse-x': `${(mousePosition.x / 15 + 0.5) * 100}%`,
                            '--mouse-y': `${(-mousePosition.y / 15 + 0.5) * 100}%`,
                        } as any}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>
            </div>

            <div className="hidden md:flex w-2/12 justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 ring-4 ring-slate-950 relative z-20 shadow-lg shadow-cyan-500/60"
                // style={{
                //     boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 10px rgba(34, 211, 238, 0.3)',
                // }}
                />
            </div>

            <div className="w-full md:w-5/12" />
        </motion.div>
    );
};

const TimelineScroller = ({ scrollYProgress, containerRef }: { scrollYProgress: any; containerRef: any }) => {
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-cyan-500 to-cyan-400 origin-top hidden md:block"
            style={{ scaleY, x: '-50%', bottom: 0 }}
            ref={containerRef}
        />
    );
};

const ExperienceSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    return (
        <section
            ref={containerRef}
            id="experience"
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
                        <span className="text-white">Professional </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
                        A journey of building enterprise solutions and driving technological innovation
                    </p>
                </motion.div>

                <div className="relative">
                    <TimelineScroller scrollYProgress={scrollYProgress} containerRef={timelineRef} />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
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

export default ExperienceSection;
