"use client";

import { motion } from "motion/react";

/**
 * Reusable animated button with gradient and glow effects
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - "primary" | "secondary"
 * @param {string} props.href - Optional link URL
 * @param {Function} props.onClick - Optional click handler
 * @param {string} props.className - Additional classes
 */
export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}) {
    const baseClasses =
        "relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 overflow-hidden";

    const variants = {
        primary: `${baseClasses} bg-gradient-to-r from-cyan-500 to-violet-600 text-white 
              shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-xl`,
        secondary: `${baseClasses} border border-white/20 text-white bg-white/5 
                backdrop-blur-sm hover:bg-white/10 hover:border-white/30`,
    };

    const MotionTag = href ? motion.a : motion.button;

    return (
        <MotionTag
            href={href}
            onClick={onClick}
            className={`${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Shimmer effect */}
            <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                   from-transparent via-white/20 to-transparent
                   group-hover:translate-x-full transition-transform duration-700"
            />
            <span className="relative z-10">{children}</span>
        </MotionTag>
    );
}
