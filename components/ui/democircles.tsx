"use client"

import { useState, useEffect } from "react";
import { HeroText } from "@/components/ui/HeroText";
import { BackgroundCircles } from "@/components/component/background-circles"

export function DemoCircles() {
    const [currentVariant, setCurrentVariant] =
        useState<keyof typeof COLOR_VARIANTS>("octonary");

    const variants = Object.keys(
        COLOR_VARIANTS
    ) as (keyof typeof COLOR_VARIANTS)[];

    function getNextVariant() {
        const currentIndex = variants.indexOf(currentVariant);
        const nextVariant = variants[(currentIndex + 1) % variants.length];
        return nextVariant;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVariant((prev) => {
                const currentIndex = variants.indexOf(prev);
                return variants[(currentIndex + 1) % variants.length];
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <BackgroundCircles variant={currentVariant} />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <HeroText />
            </div>
            <div className="absolute top-12 right-12 z-30">
                <button
                    type="button"
                    className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-4 py-1 rounded-md z-10 text-sm font-medium pointer-events-auto"
                    onClick={() => {
                        setCurrentVariant(getNextVariant());
                    }}
                >
                    Change Variant
                </button>
            </div>
        </div>
    );
}

export default DemoCircles

const COLOR_VARIANTS = {
        primary: {
            border: [
                "border-emerald-500/60",
                "border-cyan-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-emerald-500/30",
        },
        secondary: {
            border: [
                "border-violet-500/60",
                "border-fuchsia-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-violet-500/30",
        },
        tertiary: {
            border: [
                "border-orange-500/60",
                "border-yellow-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-orange-500/30",
        },
        quaternary: {
            border: [
                "border-purple-500/60",
                "border-pink-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-purple-500/30",
        },
        quinary: {
            border: [
                "border-red-500/60",
                "border-rose-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-red-500/30",
        }, // red
        senary: {
            border: [
                "border-blue-500/60",
                "border-sky-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-blue-500/30",
        }, // blue
        septenary: {
            border: [
                "border-gray-500/60",
                "border-gray-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-gray-500/30",
        },
        octonary: {
            border: [
                "border-red-500/60",
                "border-rose-400/50",
                "border-slate-600/30",
            ],
            gradient: "from-red-500/30",
        },
    } as const;