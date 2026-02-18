interface SubpageHeroProps {
    titleEn: string;
    titleJa: string;
    backgroundImage?: string;
}

export const SubpageHero = ({ titleEn, titleJa, backgroundImage }: SubpageHeroProps) => {
    return (
        <div className="relative pt-44 pb-20 md:pt-56 md:pb-28 overflow-hidden bg-[var(--color-dark)]">
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-[var(--color-dark)]/50" />
                </div>
            )}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <p className="text-[var(--color-primary)] text-sm font-bold tracking-[0.3em] mb-3">{titleEn}</p>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    {titleJa}
                </h1>
            </div>
        </div>
    );
};
