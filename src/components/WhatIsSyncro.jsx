import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

export function WhatIsSyncro() {
    const features = [
        {
            icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
            title: "Automated Growth",
            description: "Your trading account grows automatically. 5–12% monthly gains have been experienced based on 2 years of verified performance."
        },
        {
            icon: <Users className="w-6 h-6 text-indigo-600" />,
            title: "Referral Income",
            description: "Earn referral income from everyone you introduce to the Syncro ecosystem. A powerful secondary income stream."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            title: "Verified Results",
            description: "Receive a live results link where you can track the bot's weekly performance transparently."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">What is Syncro?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Syncro is a service provider that connects you to a fully automated trading bot.
                        Unlock two powerful earnings streams in one ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-blue-500/30 transition-all group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
