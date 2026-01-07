import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function SectionCTA({ nextSectionId, label = "Next Section" }) {
    const scrollToNext = () => {
        const element = document.getElementById(nextSectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center pt-16 pb-8">
            <motion.button
                onClick={scrollToNext}
                whileHover={{ y: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300"
            >
                <span className="text-base font-bold text-white leading-none">
                    {label}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shadow-inner">
                    <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-5 h-5 text-white" />
                    </motion.div>
                </div>

                {/* Subtle outer glow */}
                <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl -z-1 group-hover:bg-blue-600/40 transition-colors" />
            </motion.button>
        </div>
    );
}
