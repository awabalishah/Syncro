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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                rotateY: 5,
                                rotateX: 2,
                                transition: { duration: 0.3 }
                            }}
                            className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col perspective-1000"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 shadow-inner border border-blue-100/50" style={{ transform: 'translateZ(20px)' }}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900" style={{ transform: 'translateZ(10px)' }}>{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm" style={{ transform: 'translateZ(5px)' }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
