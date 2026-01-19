import React from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
                        Client <span className="text-blue-600">Trade Activity Examples</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-2">
                        Examples of live trade execution from accounts connected to the automated trading system.
                    </p>
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                        Screenshots are provided for transparency and demonstration purposes only. Individual account activity and outcomes will vary.
                    </p>
                </div>
            </div>

            {/* Infinite Marquee Slider */}
            <div className="relative w-full overflow-hidden py-10 mb-20">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

                <motion.div
                    className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -2000, right: 2000 }} // Larger constraints to allow free movement
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    whileHover={{ scale: 1.01 }}
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


