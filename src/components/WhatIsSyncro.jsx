import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { SectionCTA } from './SectionCTA';

export function WhatIsSyncro() {
    const features = [
        {
            icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
            title: "Automation Access",
            description: "Access third-party automated trading technology designed to operate without manual trade execution from the user"
        },
        {
            icon: <Users className="w-6 h-6 text-indigo-600" />,
            title: "Referral Thank-You Programme",
            description: "Syncro offers discretionary referral rewards for people you introduce to the platform. Participation is optional."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
            title: "Performance Transparency",
            description: "View independently tracked strategy performance data via myfxbook, a third-party verification platform."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">What is Syncro?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Syncro helps you connect your trading account to independent automated trading technology - with guided set up and ongoing support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                rotateY: 2,
                                transition: { duration: 0.3 }
                            }}
                            className="p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl shadow-blue-900/10 flex flex-col perspective-1000 group transition-all duration-300"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 shadow-inner border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-300" style={{ transform: 'translateZ(20px)' }}>
                                {React.cloneElement(feature.icon, { className: `w-8 h-8 ${index === 0 ? 'text-blue-400' : index === 1 ? 'text-indigo-400' : 'text-emerald-400'}` })}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white" style={{ transform: 'translateZ(10px)' }}>{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm" style={{ transform: 'translateZ(5px)' }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <SectionCTA nextSectionId="performance" label="Potential Growth" />
            </div>
        </section>
    );
}
