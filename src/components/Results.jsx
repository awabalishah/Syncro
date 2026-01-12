import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionCTA } from './SectionCTA';
import { MobileMockup } from './MobileMockup';

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
                        <MobileMockup key={index} src={src} className="w-[280px] md:w-[320px]" />
                    ))}
                </motion.div>
            </div>

            <div className="container mx-auto px-6">
                <SectionCTA nextSectionId="testimonials" label="Success Stories" />
            </div>
        </section>
    );
}


