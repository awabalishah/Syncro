import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SCREENSHOTS = [
    "/images/new_result_0.png",
    "/images/new_result_1.png",
    "/images/new_result_2.png",
    "/images/new_result_3.png",
    "/images/uploaded_image_0_1765819164973.png",
    "/images/uploaded_image_5_1766074384626.png",
    "/images/uploaded_image_6_1766074384626.png",
    "/images/uploaded_image_7_1766074384626.png",
    "/images/uploaded_image_1_1765819164973.png",
    "/images/uploaded_image_2_1765819164973.png",
    "/images/uploaded_image_3_1765819164973.png",
    "/images/uploaded_image_4_1765819164973.png"
];

export function Results() {
    // Triple the array to create an infinite loop illusion for the marquee
    const infiniteScroll = [...SCREENSHOTS, ...SCREENSHOTS, ...SCREENSHOTS];

    return (
        <section id="results" className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Client Results</h2>
                    <p className="text-slate-600 text-lg">
                        Real client results using the automated trading system
                    </p>
                </div>
            </div>

            {/* Infinite Marquee Slider */}
            <div className="relative w-full overflow-hidden py-10 mb-20">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                <motion.div
                    className="flex gap-8 px-8"
                    animate={{ x: ["0%", "-33.33%"] }} // Move by one-third (one original set length)
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    whileHover={{ animationPlayState: 'paused' }} // CSS pause ref is harder with purely motion, we can use hover to slow down or pause logic if needed, but framer motion simple loop usually doesn't pause easily on hover without complex state. 
                // Alternative: Simple CSS animation for the marquee if we want easy pause-on-hover.
                // Let's stick to motion for smooth loop, but for "Zoom on Hover" we just apply it to the children.
                >
                    {infiniteScroll.map((src, index) => (
                        <MobileMockup key={index} src={src} />
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6 text-center">
                <a href="#fees" className="px-10 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                    Fees & transparency
                </a>
            </div>
        </section>
    );
}

function MobileMockup({ src }) {
    return (
        <motion.div
            className="relative flex-shrink-0 w-[280px] md:w-[320px] rounded-[32px] border-[8px] border-slate-900 bg-slate-900 overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.1, zIndex: 10, rotate: 0 }}
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
    )
}
