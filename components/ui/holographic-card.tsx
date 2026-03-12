"use client";

import React, { useRef, type CSSProperties, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type HolographicStyle = CSSProperties & {
    "--x": string;
    "--y": string;
};

const baseStyle: HolographicStyle = {
    "--x": "50%",
    "--y": "50%",
};

const HolographicCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / 18;
        const rotateY = (x - centerX) / 18;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        card.style.setProperty("--x", "50%");
        card.style.setProperty("--y", "50%");
    };

    return (
        <div className="h-full w-full">
            <div
                ref={cardRef}
                style={baseStyle}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "group relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-out",
                    "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.22),transparent_22%)] before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100",
                    "after:absolute after:inset-0 after:bg-[linear-gradient(135deg,rgba(45,212,191,0.14),rgba(59,130,246,0.1),rgba(244,63,94,0.14))] after:opacity-80"
                )}
            >
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]" />

                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
                            Premium Matching
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                            Stop chasing roles. Let the right roles find you.
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-white/70">
                            A sharper hiring flow with AI-ranked opportunities, cleaner signals, and faster decisions.
                        </p>
                    </div>

                    <div className="grid min-w-[180px] gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                                Match Score
                            </p>
                            <p className="mt-2 text-3xl font-semibold">92%</p>
                        </div>
                        <div className="h-px bg-white/10" />
                        <p className="text-sm text-white/65">
                            High-fit roles surfaced before manual search.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolographicCard;