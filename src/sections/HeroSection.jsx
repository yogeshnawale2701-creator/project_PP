"use client";

import { motion } from "motion/react";
import { fadeInUp, fadeInDown, staggerContainer } from "@/utils/animations";
import Button from "@/components/Button";
import CyberpunkScene from "@/components/CyberpunkScene";

/**
 * Immersive full-screen hero section with cyberpunk 3D background
 * Features mouse-reactive 3D scene, gradient overlays, animated text, and CTAs
 */
export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Immersive 3D Background */}
            <div className="absolute inset-0 z-0">
                <CyberpunkScene />
            </div>

            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0f1c]/40 via-transparent to-[#0a0f1c]" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0f1c_70%)]" />

            {/* Scanline overlay for cyberpunk feel */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.1) 2px, rgba(0,229,255,0.1) 4px)",
                }}
            />

            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-5xl px-6 text-center"
            >
                {/* Badge */}
                <motion.div variants={fadeInDown} className="mb-8 inline-block">
                    <span
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 
                       bg-cyan-500/10 backdrop-blur-md px-5 py-2 text-xs font-medium 
                       text-cyan-300 uppercase tracking-[0.2em]
                       shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00e5ff]" />
                        Next-Gen Web Experience
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8 font-[var(--font-outfit)]"
                >
                    <span className="block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
                        Build the
                    </span>
                    <span
                        className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent
                       drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                    >
                        Future of Web
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mb-12 max-w-2xl text-lg text-gray-300/80 leading-relaxed"
                >
                    Craft immersive digital experiences with blazing-fast performance,
                    stunning 3D visuals, and pixel-perfect responsive design.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Button variant="primary" href="#features">
                        Explore Features
                    </Button>
                    <Button variant="secondary" href="#about">
                        Learn More
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div variants={fadeInUp} className="mt-20">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="mx-auto h-10 w-6 rounded-full border-2 border-cyan-400/30 flex items-start justify-center p-1.5
                       shadow-[0_0_10px_rgba(0,229,255,0.15)]"
                    >
                        <motion.div className="h-2 w-1 rounded-full bg-cyan-400 shadow-[0_0_4px_#00e5ff]" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
