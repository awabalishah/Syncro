import React from 'react';
import { motion } from 'framer-motion';
import { SectionCTA } from './SectionCTA';
import { BackgroundIcons } from './BackgroundIcons';

export function ProfitShare() {
    return (
        <section id="profit-share" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-1" />

            <BackgroundIcons />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Profit Share & <span className="text-blue-600">Transparency</span></h2>
                    <h3 className="text-xl text-blue-400 font-bold mb-8 text-center uppercase tracking-widest">Clear. Fair. Performance Based</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        If your account doesn’t grow in a given month, you pay nothing.
                        Fees are worked out monthly and apply only to the profit made during that month.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col h-full"
                    >
                        <h3 className="text-2xl font-bold mb-10 text-white">Our Commitment</h3>
                        <ul className="space-y-10">
                            {[
                                "No monthly subscriptions",
                                "Zero charges on your initial deposit",
                                "Fees only apply to new net profits",
                                "New-Profit-Only Fee Protection"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-5 items-center text-slate-200 text-xl">
                                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    </div>
                                    <span className="font-medium">
                                        {item}
                                        {item === "New-Profit-Only Fee Protection" && (
                                            <span className="block text-sm text-slate-400 font-normal italic mt-1">
                                                (Performance fees are only charged on new profits, and the profit level resets after each fee is paid.)
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/40 backdrop-blur-md p-12 rounded-[3rem] border border-slate-800 shadow-2xl flex flex-col relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />

                        <h3 className="text-2xl font-bold mb-10 text-white">Profit Retention Model</h3>
                        <div className="space-y-4 flex-grow">
                            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col items-start gap-1 transition-colors hover:bg-slate-800/60">
                                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">0% – 6% Monthly Growth</span>
                                <span className="text-xl font-bold text-blue-400">You keep 80% of net profits</span>
                            </div>
                            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col items-start gap-1 transition-colors hover:bg-slate-800/60">
                                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">6% – 10% Monthly Growth</span>
                                <span className="text-xl font-bold text-blue-400">You keep 75% of net profits</span>
                            </div>
                            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col items-start gap-1 transition-colors hover:bg-slate-800/60">
                                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">10%+ Monthly Growth</span>
                                <span className="text-xl font-bold text-blue-400">You keep 70% of net profits</span>
                            </div>
                        </div>
                        <p className="mt-10 text-slate-500 text-sm text-center font-medium tracking-wide">
                            Transparent. Automated. Results-driven.
                        </p>
                    </motion.div>
                </div>

                <SectionCTA nextSectionId="referral" label="Referral Rewards" />
            </div>
        </section>
    );
}

