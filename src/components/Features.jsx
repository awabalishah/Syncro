import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap,
    ChevronRight
} from 'lucide-react';

export function Features() {
    return (
        <section id="features" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-white/15 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold mb-8 border border-white/20"
                            >
                                <Zap className="w-4 h-4 text-blue-300" />
                                <span>Powerful Automation</span>
                            </motion.div>

                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                One System. <br />
                                <span className="text-blue-200">Endless Possibilities.</span>
                            </h2>

                            <p className="text-blue-100 text-lg md:text-xl font-medium mb-10 leading-relaxed">
                                Experience the future of automated trading. Syncro combines advanced algorithms with strict risk management to deliver consistent, long-term growth.
                            </p>

                            <Link
                                to="/features"
                                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shadow-black/20"
                            >
                                Learn About All Features
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="hidden lg:block relative">
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/30 flex items-center justify-center p-8 shadow-2xl">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                                            <Zap className="w-10 h-10 text-blue-600" />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="h-2 w-32 bg-white/20 rounded-full mx-auto" />
                                            <div className="h-2 w-24 bg-white/10 rounded-full mx-auto" />
                                            <div className="h-2 w-28 bg-white/15 rounded-full mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative blur underlying the floating card */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/30 rounded-full blur-[80px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
