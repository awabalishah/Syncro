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
                    </div>
                </div>

                {/* Fee Commitment Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 md:p-14 rounded-[3rem] border-2 border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -mr-32 -mt-32" />

                        <h3 className="text-3xl font-bold mb-12 text-white">Our Fee Commitment</h3>
                        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                {
                                    title: "Flat 25% Service Fee",
                                    description: "A single, flat fee of 25% on realised net profits, settled daily via the STARTRADER portal."
                                },
                                {
                                    title: "Zero Upfront Costs",
                                    description: "No monthly subscriptions or charges on your initial deposit."
                                },
                                {
                                    title: "Results-Based Only",
                                    description: "Fees are strictly results-based. No fees are charged unless net performance is positive."
                                },
                                {
                                    title: "High-Water Mark Protection",
                                    description: "You only pay for new profits. If your balance is below your previous high, no fees are charged until that value is exceeded."
                                }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-5 items-start text-slate-200">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 mt-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white leading-tight">{item.title}</h4>
                                        <p className="text-slate-400 text-base leading-relaxed">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-12">
                    <SectionCTA nextSectionId="referral" label="Referral Rewards" />
                </div>
            </div>
        </section>
    );
}


