import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Fund your broker account",
        desc: "Your money stays in your own broker account, and you remain in full control at all times."
    },
    {
        num: "02",
        title: "Connect through Syncro",
        desc: "A simple, step-by-step guide is provided during signup to securely connect your account."
    },
    {
        num: "03",
        title: "Benefit from automation",
        desc: "Once connected, the system runs automatically in the background — no daily involvement required."
    }
];

export function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef(null);

    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} id="how-it-works" className="relative bg-slate-50">

            {/* Desktop Layout: Sticky Left, Scrolling Right */}
            <div className="hidden lg:flex">

                {/* Sticky Sidebar */}
                <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center items-start p-20 border-r border-slate-200 bg-white z-10">
                    <div className="max-w-md">
                        <h2 className="text-4xl font-bold font-manrope text-slate-900 mb-2">How Syncro Works</h2>
                        <p className="text-xl text-blue-600 font-semibold mb-6">Simple. Automated. Hands off.</p>
                        <p className="text-slate-500 mb-12">Get set up in 3 easy steps</p>

                        <div className="relative h-48 overflow-hidden mb-8">
                            <motion.div
                                animate={{ y: -activeStep * 100 + '%' }} // Slide numbers up/down
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="flex flex-col h-full"
                            >
                                {steps.map((step, index) => (
                                    <div key={index} className="h-full flex items-center">
                                        <div className="text-8xl font-black text-slate-900 leading-none tracking-tighter opacity-10">
                                            {step.num}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="h-1 w-full bg-slate-100 mb-8 rounded-full overflow-hidden">
                            <motion.div
                                style={{ scaleX: scrollYProgress }}
                                className="h-full bg-blue-600 origin-left"
                            />
                        </div>

                        <div className="mb-8">
                            <a href="#technology" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
                                Explore the technology
                            </a>
                        </div>
                        <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                            Dedicated support is available inside the private Syncro Discord server to assist with setup, questions, and ongoing support.
                        </p>
                    </div>
                </div>

                {/* Scrolling Content */}
                <div className="w-1/2">
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            step={step}
                            index={index}
                            setActiveStep={setActiveStep}
                        />
                    ))}
                    {/* Extra padding at bottom to allow full scroll */}
                    <div className="h-[50vh]"></div>
                </div>
            </div>

            {/* Mobile Layout: Stacked */}
            <div className="lg:hidden py-24 px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">How Syncro Works</h2>
                    <p className="text-lg text-blue-600 font-semibold mb-2">Simple. Automated. Hands off.</p>
                    <p className="text-slate-500">Get set up in 3 easy steps</p>
                </div>
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50">
                            <div className="text-5xl font-black text-blue-600/20 mb-4">{step.num}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                            {index === 2 && (
                                <p className="text-sm text-slate-400 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    Dedicated support is available inside the private Syncro Discord server.
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a href="#technology" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-600/20">
                        Explore the technology
                    </a>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, setActiveStep }) {
    return (
        <motion.div
            className="h-screen flex items-center p-20"
            onViewportEnter={() => setActiveStep(index)}
            viewport={{ margin: "-50% 0px -50% 0px" }} // Trigger when element is in the middle
        >
            <div className={`transition-opacity duration-500`}>
                <h3 className="text-3xl font-bold mb-6 text-slate-900">{step.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    {step.desc}
                </p>

                {/* Decorative Elements specific to steps */}
                <div className="mt-12 p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
                    {index === 0 && (
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">$</div>
                            <div>
                                <div className="text-sm font-bold text-slate-800">Broker Account</div>
                                <div className="text-xs text-slate-500">Funds Secured</div>
                            </div>
                        </div>
                    )}
                    {index === 1 && (
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">✓</div>
                            <div className="text-sm font-semibold text-slate-700">Syncro Connected</div>
                        </div>
                    )}
                    {index === 2 && (
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Automation</span>
                                <span className="text-green-600 font-bold">Active</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-green-500 animate-pulse"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
