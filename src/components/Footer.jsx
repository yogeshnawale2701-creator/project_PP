"use client";

import { motion } from "motion/react";

const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "Changelog"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Cookies"],
};

const socialLinks = [
    { label: "GitHub", icon: "⚡" },
    { label: "Twitter", icon: "🐦" },
    { label: "Discord", icon: "💬" },
];

/**
 * Site footer with gradient divider, link columns, and socials
 */
export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-[#060a14]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <motion.h3
                            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-4 font-[var(--font-outfit)]"
                            whileHover={{ scale: 1.02 }}
                        >
                            Nexus3D
                        </motion.h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Building the future of immersive web experiences with cutting-edge 3D technology.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Nexus3D. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href="#"
                                whileHover={{ scale: 1.2, y: -2 }}
                                className="flex items-center justify-center w-10 h-10 rounded-full
                           border border-white/10 bg-white/5 text-lg
                           hover:border-cyan-400/30 hover:bg-white/10 transition-colors"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
