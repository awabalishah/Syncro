import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Bitcoin, TrendingUp, Coins, BarChart2, PieChart } from 'lucide-react';

const icons = [
    { Icon: DollarSign, color: 'text-blue-500' },
    { Icon: Bitcoin, color: 'text-orange-500' },
    { Icon: TrendingUp, color: 'text-emerald-500' },
    { Icon: Coins, color: 'text-indigo-500' },
    { Icon: BarChart2, color: 'text-blue-400' },
    { Icon: PieChart, color: 'text-purple-500' },
];

export function BackgroundIcons() {
    // Generate some random positions and animation properties
    const elements = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        iconData: icons[i % icons.length],
        size: Math.random() * 20 + 15,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.03] lg:opacity-[0.05]">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className={`absolute ${el.iconData.color}`}
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        rotate: [0, 10, -10, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: "linear",
                    }}
                >
                    <el.iconData.Icon size={el.size} strokeWidth={1} />
                </motion.div>
            ))}
        </div>
    );
}
