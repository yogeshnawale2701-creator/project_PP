"use client";

import { motion } from "motion/react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/utils/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Scene3D from "@/components/Scene3D";

const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "< 50ms", label: "Response" },
    { value: "60fps", label: "Rendering" },
    { value: "100+", label: "Components" },
];

/**
 * About section with two-column layout, left text + right 3D scene
 * Includes stats grid and parallax mouse interaction
 */
export default function AboutSection() {
    const { ref, inView } = useScrollAnimation({ threshold: 0.15 });

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left: Text content */}
                    <motion.div variants={slideInLeft}>
                        <span className="inline-block text-xs font-medium text-violet-400 uppercase tracking-widest mb-4">
                            About
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-[var(--font-outfit)]">
                            Designed for the{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                                modern web
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Our architecture combines the power of Next.js server components with
                            immersive Three.js 3D scenes, smooth Framer Motion animations, and
                            responsive TailwindCSS layouts. The result is a web experience that
                            feels native and performs flawlessly.
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeInUp}
                                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center"
                                >
                                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: 3D Scene */}
                    <motion.div
                        variants={slideInRight}
                        className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
                        <Scene3D enableOrbit cameraPosition={5} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
