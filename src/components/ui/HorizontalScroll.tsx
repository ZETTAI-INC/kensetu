'use client';

import { cn } from '@/lib/utils';
import { useRef, useEffect, useState } from 'react';

interface HorizontalScrollProps {
    children: React.ReactNode;
    className?: string;
    itemClassName?: string;
}

export function HorizontalScroll({ children, className, itemClassName }: HorizontalScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showRightFade, setShowRightFade] = useState(true);
    const [showLeftFade, setShowLeftFade] = useState(false);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeftFade(scrollLeft > 0);
        setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            checkScroll(); // Initial check
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (el) el.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    return (
        <div className="relative group">
            {/* Fade Overlays (Mobile/Tablet only usually, but good for UI hint) */}
            <div 
                className={cn(
                    "absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden",
                    showLeftFade ? "opacity-100" : "opacity-0"
                )} 
            />
            <div 
                className={cn(
                    "absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 md:hidden",
                    showRightFade ? "opacity-100" : "opacity-0"
                )} 
            />

            <div
                ref={scrollRef}
                className={cn(
                    "flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:grid md:gap-8 snap-x snap-mandatory scroll-smooth hide-scrollbar",
                    className
                )}
            >
                {/* 
                   We need to treat children; if they are mapped, they need a wrapper or class 
                   Usually the user will pass a mapped list.
                   For snapping to work properly, direct children need snap-center or snap-start.
                */}
                {children}
            </div>
            
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}

// Helper to wrap items if needed, or expected usage:
// <HorizontalScroll className="md:grid-cols-2">
//    <div className="min-w-[85vw] snap-center md:min-w-0">...</div>
// </HorizontalScroll>
