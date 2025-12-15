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
        <section className="relative pt-20 pb-32 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 skew-x-12 translate-x-32 -z-1" />
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -z-1 opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <TrustpilotWidget />

                        <h1 className="text-5xl lg:text-7xl font-bold font-manrope mb-6 text-slate-900 leading-[1.1]">
                            Automate Your <br />
                            <span className="text-blue-600">Trading Income.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Unlock two powerful income streams with one verified system.
                            No trading experience required.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                                Start Earning Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-semibold">
                                <PlayCircle className="w-5 h-5 text-blue-600" />
                                See How It Works
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                Verified Results
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                Instant Withdrawals
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                24/7 Support
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000"
                                alt="Trading Dashboard"
                                className="rounded-2xl w-full"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <TrendingUpIcon />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase">Monthly Return</p>
                                    <p className="text-xl font-bold text-slate-900">+12.08%</p>
                                </div>
                            </div>
                        </div>
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
