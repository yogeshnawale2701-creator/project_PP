"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Button from "@/components/Button";

/**
 * Contact section with animated form inputs
 */
export default function ContactSection() {
    const { ref, inView } = useScrollAnimation({ threshold: 0.15 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission placeholder
        console.log("Form submitted:", formData);
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Background glows */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className="mx-auto max-w-3xl px-6">
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span
                        variants={fadeInUp}
                        className="inline-block text-xs font-medium text-cyan-400 uppercase tracking-widest mb-4"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-outfit)]"
                    >
                        Let&apos;s build something{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                            amazing
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg">
                        Have a project in mind? Get in touch and let&apos;s make it happen.
                    </motion.p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp}>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
                           px-5 py-3.5 text-white placeholder-gray-600
                           focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20
                           transition-all duration-300"
                                placeholder="Your name"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
                           px-5 py-3.5 text-white placeholder-gray-600
                           focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20
                           transition-all duration-300"
                                placeholder="you@example.com"
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={fadeInUp}>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-400 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
                         px-5 py-3.5 text-white placeholder-gray-600 resize-none
                         focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20
                         transition-all duration-300"
                            placeholder="Tell us about your project..."
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="text-center pt-4">
                        <Button variant="primary" onClick={handleSubmit}>
                            Send Message
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
}
