import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "I've tried multiple automated trading bots, but Syncro is the only one that delivers consistent results without the stress. The daily updates are fantastic.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "The transparency is what sold me. Being able to see the live MyFXBook link before depositing gave me total confidence. Best investment I've made this year.",
        rating: 5
    },
    {
        name: "Emma Thompson",
        role: "Small Business Owner",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "Passive income was always a dream until I found Syncro. Now my account grows while I focus on my business. The support team is also incredibly helpful.",
        rating: 5
    }
];

export function SuccessStories() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm bg-blue-50 px-4 py-1 rounded-full">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">
                        Trusted by Investors <br />
                        <span className="text-blue-600">Worldwide.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            <Quote className="w-10 h-10 text-blue-100 mb-6 group-hover:text-blue-500 transition-colors" />

                            <p className="text-slate-600 leading-relaxed mb-8">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
