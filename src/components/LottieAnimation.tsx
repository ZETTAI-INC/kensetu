'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
    src: string;
    className?: string;
}

export const LottieAnimation = ({ src, className }: LottieAnimationProps) => {
    return (
        <DotLottieReact
            src={src}
            loop
            autoplay
            className={className}
        />
    );
};
