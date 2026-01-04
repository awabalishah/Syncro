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
        <div className="flex flex-col items-center justify-center pt-10 pb-4">
            <motion.button
                onClick={scrollToNext}
                whileHover={{ y: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center gap-3 transition-colors"
            >
                <span className="text-sm font-semibold text-slate-400 group-hover:text-blue-600 tracking-widest uppercase transition-colors">
                    {label}
                </span>
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 transition-all">
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </motion.div>
                </div>
            </motion.button>
        </div>
    );
}
