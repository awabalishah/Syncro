import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, Sparkles } from 'lucide-react';

export function ThankYou() {
    const cards = [
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Thank You for Visiting",
            description: "We appreciate your interest in Syncro. We're committed to helping you build a smarter financial future."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-blue-500" />,
            title: "Our Mission",
            description: "To democratize access to institutional-grade automated trading strategies for everyone."
        },
        {
            icon: <Send className="w-8 h-8 text-emerald-500" />,
            title: "Ready to Start?",
            description: "Join hundreds of successful investors today and let your capital work for you around the clock."
        }
    ];

    return (
        <section id="thank-you" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30 -z-1" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-30 -z-1" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">A Simple Thank You</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        We're glad you've come this far. Here's a bit more about why we do what we do.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 10,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center perspective-1000"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 shadow-inner" style={{ transform: 'translateZ(20px)' }}>
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ transform: 'translateZ(10px)' }}>{card.title}</h3>
                            <p className="text-slate-600 leading-relaxed" style={{ transform: 'translateZ(5px)' }}>
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
