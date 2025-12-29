import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

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
        <section className="relative pt-20 pb-0 md:pt-32 overflow-hidden bg-white min-h-[90vh] flex items-stretch">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 blur-[120px] rounded-full -z-1 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-50/30 blur-[100px] rounded-full -z-1 -translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10 flex items-stretch">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start text-left py-20"
                    >
                        <TrustpilotWidget />

                        <h1 className="text-5xl lg:text-7xl font-bold font-manrope mb-6 text-slate-900 leading-[1.1]">
                            Make Your Money <br />
                            <span className="text-blue-600">Work For You.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-xl">
                            The world’s most successful investors use systems and automation to manage their wealth. Now you can too.
                        </p>

                        <p className="text-lg text-slate-500 mb-10 font-medium max-w-lg">
                            Syncro is your gateway to automated wealth-building opportunities
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href="#how-it-works" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <button className="bg-white border-2 border-solid border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                                Join the waitlist
                            </button>
                        </div>

                        <div className="flex items-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm font-medium text-slate-500">Verified Results</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-sm font-medium text-slate-500">Dedicated Support</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image Section - Bleeding to right and bottom */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full self-end lg:mr-[-10%]"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-600/10 blur-[100px] rounded-full -z-1" />

                        <img
                            src="/images/hero-phone-highres.png"
                            alt="Syncro Trading Platform"
                            className="w-full h-auto block relative z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
