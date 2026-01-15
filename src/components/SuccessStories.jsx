import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionCTA } from './SectionCTA';
import myfxbookLogo from '../assets/myfxbook-logo.png';

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
        content: <div className="flex flex-col gap-2">
            <p>"The transparency is what sold me. Being able to see the live results verified by:</p>
            <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="self-start">
                <img src={myfxbookLogo} alt="Myfxbook" className="h-4 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <p>before depositing gave me total confidence. Best investment I've made this year."</p>
        </div>,
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
        <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white mb-6">
                        What Our <span className="text-blue-600">Clients Say</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Real experiences from people using Syncro for hands-off access to automated trading.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-none border border-slate-200 shadow-sm hover:shadow-md transition-all group relative"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-1">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <div key={i} className="bg-[#00b67a] p-1">
                                            <Star className="w-4 h-4 text-white fill-white" />
                                        </div>
                                    ))}
                                </div>
                                <img src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-black.svg" alt="Trustpilot" className="h-5 opacity-50" />
                            </div>

                            <h4 className="font-bold text-slate-900 mb-2">{item.title || "Experience with Syncro"}</h4> {/* Added title placeholder if not in data, or just use generic */}

                            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                                <div className="text-slate-400 text-xs">Verified Client</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <SectionCTA nextSectionId="faq" label="Common Questions" />
            </div>
        </section>
    );
}
