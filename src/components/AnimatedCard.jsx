"use client";

import { motion } from "motion/react";
import { scaleOnHover, glowOnHover, fadeInUp } from "@/utils/animations";

/**
 * Animated card component with glassmorphism styling
 * Reveals on scroll and has hover effects
 *
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.icon - Emoji or icon character
 * @param {number} props.index - Card index for stagger delay
 */
export default function AnimatedCard({ title, description, icon, index = 0 }) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={{ ...scaleOnHover, ...glowOnHover }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 
                 backdrop-blur-xl p-8 transition-colors duration-300
                 hover:border-cyan-400/30 hover:bg-white/[0.08]"
        >
            {/* Gradient glow background */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 -z-10
                    bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"
            />

            {/* Icon */}
            <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl
                    bg-gradient-to-br from-cyan-500/20 to-violet-500/20
                    text-2xl shadow-lg shadow-cyan-500/10"
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-semibold text-white font-[var(--font-outfit)]">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-400">{description}</p>

            {/* Bottom gradient line */}
            <div
                className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2
                    bg-gradient-to-r from-cyan-400 to-violet-500
                    transition-all duration-500 group-hover:w-3/4"
            />
        </motion.div>
    );
}
