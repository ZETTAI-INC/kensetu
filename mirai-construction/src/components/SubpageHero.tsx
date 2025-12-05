interface SubpageHeroProps {
    titleEn: string;
    titleJa: string;
    backgroundImage?: string;
}

export const SubpageHero = ({ titleEn, titleJa, backgroundImage }: SubpageHeroProps) => {
    return (
        <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[#111]">
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            )}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                    {titleEn}
                </h1>
                <p className="text-white/80 text-sm tracking-wide">{titleJa}</p>
            </div>
        </div>
    );
};
