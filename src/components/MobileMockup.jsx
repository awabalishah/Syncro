import React from 'react';
import { motion } from 'framer-motion';

export function MobileMockup({ src, className = "" }) {
    return (
        <motion.div
            className={`relative flex-shrink-0 rounded-[32px] border-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl ${className}`}
            whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
            initial={{ rotate: -2 }}
            whileInView={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ willChange: "transform" }}
        >
            {/* Phone Notch/Bezel details */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-xl z-20"></div>

            <div className="relative aspect-[9/19.5] w-full bg-slate-800 overflow-hidden rounded-[24px]">
                <img
                    src={src}
                    alt="Trading Result"
                    className="w-full h-full object-cover"
                />

                {/* Glass Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
        </motion.div>
    );
}
