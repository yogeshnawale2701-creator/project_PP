"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCard from "@/components/AnimatedCard";

const features = [
    {
        icon: "🚀",
        title: "Blazing Performance",
        description:
            "Optimized rendering pipeline with server-side generation and edge caching for instant page loads.",
    },
    {
        icon: "🎨",
        title: "3D Experiences",
        description:
            "Immersive Three.js scenes with React Three Fiber for seamless declarative 3D composition.",
    },
    {
        icon: "✨",
        title: "Smooth Animations",
        description:
            "Physics-based motion with Framer Motion for buttery-smooth transitions and micro-interactions.",
    },
    {
        icon: "📱",
        title: "Responsive Design",
        description:
            "Mobile-first layouts with TailwindCSS that adapt beautifully from phones to ultrawide displays.",
    },
    {
        icon: "🧩",
        title: "Modular Architecture",
        description:
            "Component-driven development with clean separation of concerns for scalable applications.",
    },
    {
        icon: "🔒",
        title: "Type Safety",
        description:
            "End-to-end type coverage with TypeScript-ready patterns ensuring robust, maintainable code.",
    },
];

/**
 * Features grid section with scroll-triggered animated cards
 */
export default function FeaturesSection() {
    const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="features" className="relative py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6">
                {/* Section header */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block text-xs font-medium text-cyan-400 uppercase tracking-widest mb-4"
                    >
                        Features
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-outfit)]"
                    >
                        Everything you need
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto max-w-2xl text-gray-400 text-lg"
                    >
                        A complete toolkit for building stunning, performant web applications
                        with modern best practices.
                    </motion.p>
                </motion.div>

                {/* Feature cards grid */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <AnimatedCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
