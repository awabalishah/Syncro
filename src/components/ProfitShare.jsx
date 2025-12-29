import React from 'react';
import { motion } from 'framer-motion';

export function ProfitShare() {
    return (
        <section id="fees" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 blur-[120px] rounded-full -z-1" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Profit Share & Transparency</h2>
                    <h3 className="text-xl text-blue-600 font-bold mb-8 text-center uppercase tracking-widest">Clear. Fair. Performance Based</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        If your account doesn’t grow in a given month, you pay nothing.
                        Fees are worked out monthly and apply only to the profit made during that month.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
                    >
                        <h4 className="text-2xl font-bold text-slate-900 mb-8 underline decoration-blue-500/30 underline-offset-8">Our Commitment</h4>
                        <ul className="space-y-6 mb-10">
                            {[
                                "No monthly subscriptions",
                                "Zero charges on your initial deposit",
                                "Fees only apply to new net profits",
                                "High-water mark protection included"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center text-slate-700 text-lg">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a href="#referral" className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
                            View referral rewards
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ rotateY: -10, scale: 1.02 }}
                        className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl perspective-1000"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-white" style={{ transform: 'translateZ(30px)' }}>Profit Retention Model</h3>
                        <div className="space-y-4">
                            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-start gap-1" style={{ transform: 'translateZ(20px)' }}>
                                <span className="text-slate-300 font-medium text-lg">0% – 6% Monthly Balance Growth</span>
                                <span className="text-xl font-bold text-blue-400">You keep 80% of net profits</span>
                            </div>
                            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex flex-col items-start gap-1" style={{ transform: 'translateZ(40px)' }}>
                                <span className="text-slate-300 font-medium text-lg">6% – 10% Monthly Balance Growth</span>
                                <span className="text-xl font-bold text-blue-400">You keep 75% of net profits</span>
                            </div>
                            <div className="p-6 bg-blue-600 rounded-2xl flex flex-col items-start gap-1 shadow-xl shadow-blue-600/20" style={{ transform: 'translateZ(60px)' }}>
                                <span className="text-blue-50 font-medium text-lg">10%+ Monthly Balance Growth</span>
                                <span className="text-xl font-bold text-white">You keep 70% of net profits</span>
                            </div>
                        </div>
                        <p className="mt-8 text-slate-400 text-sm text-center">
                            Transparent. Automated. Results-driven.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
