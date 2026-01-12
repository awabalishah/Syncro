import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowRight, Link, Percent, Users, ShieldCheck } from 'lucide-react';
import { SectionCTA } from './SectionCTA';

export function Referral() {
    const rewards = [
        {
            icon: <Link className="w-6 h-6" />,
            title: "Personal Referral Link",
            description: "Receive a unique personal referral link to share with your network."
        },
        {
            icon: <Percent className="w-6 h-6" />,
            title: "20% Performance Fee Share",
            description: "Earn 20% of the performance fees charged on accounts you introduce, whenever they profit."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Performance Based",
            description: "Rewards are based on actual performance fees earned, not simply on sign-ups, ensuring quality and long-term consistency."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Direct Introductions Only",
            description: "Simple, one-level structure. You only earn from people you directly introduce."
        }
    ];

    return (
        <section id="referral" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <div className="inline-block p-6 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <Gift className="w-12 h-12" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        A Simple <span className="text-blue-600">Thank-You</span> For <br /> Genuine <span className="text-blue-600">Introductions</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
                        Syncro offers an optional referral reward for clients who introduce others to the service.
                        No obligation — just a transparent way to earn alongside your own activity.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
                        {rewards.map((reward, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    rotateY: 5,
                                    rotateX: 5,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-slate-900 p-8 rounded-[2rem] border border-slate-700 shadow-xl shadow-slate-900/50 text-left perspective-1000 group hover:border-blue-500/50 transition-colors duration-300"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors duration-300" style={{ transform: 'translateZ(20px)' }}>
                                    {reward.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3" style={{ transform: 'translateZ(10px)' }}>{reward.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed" style={{ transform: 'translateZ(5px)' }}>
                                    {reward.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-600/30 mb-20"
                    >
                        {/* Decorative bubbles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to start earning?</h3>
                            </div>
                            <button
                                disabled
                                className="inline-flex items-center gap-2 bg-white/20 text-white/50 px-10 py-5 rounded-full font-bold text-lg cursor-not-allowed"
                            >
                                Discord Coming Soon
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>

                    <SectionCTA nextSectionId="hero" label="Back to Top" direction="up" />
                </motion.div>
            </div>
        </section>
    );
}
