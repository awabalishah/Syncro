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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Service Fees & <span className="text-blue-600">Transparency</span></h2>
                    <h3 className="text-xl text-blue-400 font-bold mb-8 text-center uppercase tracking-widest">CLEAR. FAIR. RESULTS-LINKED</h3>
                    <div className="text-slate-300 text-lg leading-relaxed space-y-4">
                        <p>
                            Fees are calculated monthly and apply only when net positive performance is recorded during that period.
                        </p>
                        <p>
                            No subscription fees. No upfront charges. If no net positive result is recorded for the month, no service fee is applied.
                        </p>
                    </div>
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
                                "Fees apply only when net positive performance is recorded",
                                "High-Water Mark Fee Structure"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-5 items-center text-slate-200 text-xl">
                                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    </div>
                                    <span className="font-medium">
                                        {item}
                                        {item === "High-Water Mark Fee Structure" && (
                                            <span className="block text-sm text-slate-400 font-normal italic mt-1">
                                                (Service fees are calculated only on new net positive results relative to the previous billing period)
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

                        <h3 className="text-2xl font-bold mb-10 text-white">Service Fee Bands</h3>
                        <div className="space-y-4 flex-grow">
                            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col items-start gap-1 transition-colors hover:bg-slate-800/60">
                                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">Lower activity range</span>
                                <span className="text-xl font-bold text-blue-400">Typical retained balance by client: ~80%</span>
                            </div>
                            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col items-start gap-1 transition-colors hover:bg-slate-800/60">
                                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">Moderate activity range</span>
                                <span className="text-xl font-bold text-blue-400">Typical retained balance by client: ~75%</span>
                            </div>
                            <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex flex-col items-start gap-1 transition-colors hover:bg-slate-800/60">
                                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">Higher activity range</span>
                                <span className="text-xl font-bold text-blue-400">Typical retained balance by client: ~70%</span>
                            </div>
                        </div>
                        <p className="mt-10 text-slate-500 text-xs text-center font-medium tracking-wide">
                            Fee bands are indicative and shown for transparency. Actual service fees are calculated based on account activity and disclosed to clients prior to application.
                        </p>
                    </motion.div>
                </div>

                <SectionCTA nextSectionId="referral" label="Referral Rewards" />
            </div>
        </section>
    );
}

