import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, PlayCircle } from 'lucide-react';

function TrustpilotWidget() {
    return (
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 w-fit mb-8">
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-[#00b67a] p-1">
                        <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                ))}
            </div>
            <span className="text-xs font-medium text-slate-700">Excellent 4.9 out of 5</span>
            <span className="text-xs text-slate-400">| Trustpilot</span>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative pt-20 pb-0 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-1">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <TrustpilotWidget />

                        <h1 className="text-5xl lg:text-7xl font-bold font-manrope mb-6 text-slate-900 leading-[1.1]">
                            Make Your Money <br />
                            <span className="text-blue-600">Work For You.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-2xl">
                            The world’s most successful investors use systems and automation to manage their wealth. Now you can too.
                        </p>

                        <p className="text-lg text-slate-500 mb-10 font-medium">
                            Syncro is your gateway to automated wealth-building opportunities
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <a href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Hero Image Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative w-full max-w-[800px]"
                        >
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/20 blur-[100px] rounded-full -z-1" />

                            <img
                                src="/images/hero_mockup_new.png"
                                alt="Syncro Trading Platform"
                                className="w-full h-auto relative z-10 drop-shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TrendingUpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
    )
}
