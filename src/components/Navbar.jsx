"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

/**
 * Responsive navigation bar with glassmorphism effect
 * Becomes more opaque on scroll, has mobile hamburger menu
 */
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#hero"
                    className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-[var(--font-outfit)]"
                    whileHover={{ scale: 1.05 }}
                >
                    Nexus3D
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-white transition-colors relative group"
                            whileHover={{ y: -1 }}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                    <Button variant="primary" href="#contact">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        className="block h-[2px] w-6 bg-white"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-[2px] w-6 bg-white"
                    />
                    <motion.span
                        animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        className="block h-[2px] w-6 bg-white"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button variant="primary" href="#contact">
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
