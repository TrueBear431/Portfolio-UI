import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Education {
    id: number;
    degree: string;
    university: string;
    period: string;
    current?: boolean;
}

interface Certification {
    id: number;
    name: string;
    issuer: string;
    icon: string;
    color: string;
    verifyUrl?: string;
}

const educationData: Education[] = [
    {
        id: 1,
        degree: 'Advanced Web Development Specialization',
        university: 'Technical Institute',
        period: '2023 - Present',
        current: true,
    },
    {
        id: 2,
        degree: 'Bachelor of Engineering',
        university: 'University of Engineering & Technology',
        period: '2019 - 2023',
        current: false,
    },
    {
        id: 3,
        degree: 'Higher Secondary Certificate (HSC)',
        university: 'Central Board of Secondary Education',
        period: '2017 - 2019',
        current: false,
    },
    {
        id: 4,
        degree: 'Secondary School Certificate (SSC)',
        university: 'Central Board of Secondary Education',
        period: '2015 - 2017',
        current: false,
    },
];

const certificationsData: Certification[] = [
    {
        id: 1,
        name: 'Microsoft .NET Certified',
        issuer: 'Microsoft',
        icon: 'dotnet',
        color: '512BD4',
        verifyUrl: '#',
    },
    {
        id: 2,
        name: 'Meta React Developer',
        issuer: 'Meta',
        icon: 'react',
        color: '61DAFB',
        verifyUrl: '#',
    },
    {
        id: 3,
        name: 'SQL Server Specialist',
        issuer: 'Microsoft',
        icon: 'MySQL',
        color: '4479A1',
        verifyUrl: '#',
    },
    {
        id: 4,
        name: 'Azure Fundamentals',
        issuer: 'Microsoft',
        icon: 'microsoftazure',
        color: '0078D4',
        verifyUrl: '#',
    },
];

interface EducationItemProps {
    education: Education;
    index: number;
}

const EducationItem = ({ education, index }: EducationItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-8 last:pb-0"
        >
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`absolute left-0 top-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${education.current
                        ? 'border-cyan-400 bg-cyan-500/20 shadow-lg shadow-cyan-500/50'
                        : 'border-gray-600 bg-gray-900/50'
                    }`}
            >
                <GraduationCap
                    className={`w-3 h-3 ${education.current ? 'text-cyan-400' : 'text-gray-400'
                        }`}
                />
            </motion.div>

            <div className="space-y-1">
                <h3
                    className={`font-bold transition-colors ${education.current
                            ? 'text-cyan-400 text-lg'
                            : 'text-white text-base'
                        }`}
                >
                    {education.degree}
                </h3>
                <p className="text-gray-300 text-sm">{education.university}</p>
                <p className="text-gray-500 text-xs">{education.period}</p>
                {education.current && (
                    <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block mt-2 px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-xs text-cyan-300"
                    >
                        Current
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

interface CertificationCardProps {
    certification: Certification;
    index: number;
}

const CertificationCard = ({ certification, index }: CertificationCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                className="relative group h-64 cursor-pointer"
                style={{
                    transformStyle: 'preserve-3d',
                }}
                animate={{
                    rotateX: isHovered ? mousePosition.y : 0,
                    rotateY: isHovered ? mousePosition.x : 0,
                    scale: isHovered ? 1.06 : 1,
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(217,119,6,0.03)_2px,rgba(217,119,6,0.03)_4px)]"></div>

                    <div className="absolute inset-0 border-2 border-amber-700/20 rounded-2xl pointer-events-none"></div>

                    <div className="absolute top-4 left-6 right-6">
                        <div className="text-xs font-serif text-amber-900/60 tracking-widest">CERTIFICATE OF</div>
                        <div className="text-xl font-serif font-bold text-amber-900 mt-1">ACHIEVEMENT</div>
                    </div>

                    <div className="absolute top-1/3 left-0 right-0 flex flex-col items-center justify-center px-6 gap-3">
                        <motion.div
                            animate={{
                                scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border-2 border-amber-700/30 flex items-center justify-center flex-shrink-0"
                        >
                            <img
                                src={`https://cdn.simpleicons.org/${certification.icon}/${certification.color}`}
                                alt={certification.name}
                                className="w-10 h-10 object-contain"
                                onError={(e) => {
                                    const img = e.currentTarget;
                                    img.style.display = 'none';
                                }}
                            />
                        </motion.div>

                        <div className="text-center">
                            <h3 className="text-sm font-serif font-bold text-amber-900 leading-tight">
                                {certification.name}
                            </h3>
                            <p className="text-xs text-amber-900/70 mt-1 font-medium">{certification.issuer}</p>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-amber-900/40 font-serif">
                        <span>Professional Grade</span>
                        <span>Verified</span>
                    </div>

                    <div className="absolute top-1/2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent transform -translate-y-1/2"></div>
                </div>

                <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 pointer-events-none"
                    animate={{
                        background: isHovered
                            ? 'linear-gradient(to bottom right, rgba(34, 211, 238, 0.15), transparent, rgba(59, 130, 246, 0.1))'
                            : 'linear-gradient(to bottom right, rgba(34, 211, 238, 0), transparent, rgba(59, 130, 246, 0))',
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.25), transparent 40%)',
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        '--mouse-x': `${(mousePosition.x / 15 + 0.5) * 100}%`,
                        '--mouse-y': `${(-mousePosition.y / 15 + 0.5) * 100}%`,
                    } as any}
                    transition={{ duration: 0.2 }}
                />

                <motion.div
                    className="absolute inset-0 rounded-2xl shadow-xl"
                    animate={{
                        boxShadow: isHovered
                            ? '0 30px 60px -15px rgba(34, 211, 238, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
                            : '0 15px 30px -10px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                />

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                        if (certification.verifyUrl) {
                            window.open(certification.verifyUrl, '_blank');
                        }
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-cyan-500/90 hover:bg-cyan-600 border border-cyan-400 rounded-lg text-xs font-medium text-white transition-all flex items-center gap-1.5 shadow-lg"
                >
                    <ExternalLink className="w-3 h-3" />
                    Verify
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

const CredentialsSection = () => {
    return (
        <section
            id="credentials"
            className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Foundation & </span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Credentials
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-8"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Educational background and professional certifications demonstrating expertise and commitment to continuous learning
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold">
                                <span className="text-white">Education</span>
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent"></div>
                            <div className="space-y-0">
                                {educationData.map((education, index) => (
                                    <EducationItem
                                        key={education.id}
                                        education={education}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold">
                                <span className="text-white">Certifications</span>
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {certificationsData.map((certification, index) => (
                                <CertificationCard
                                    key={certification.id}
                                    certification={certification}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </section>
    );
};

export default CredentialsSection;
