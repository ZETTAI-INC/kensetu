interface SubpageHeroProps {
    titleEn: string;
    titleJa: string;
}

export const SubpageHero = ({ titleEn, titleJa }: SubpageHeroProps) => {
    return (
        <div className="bg-[#064E3B] pt-32 pb-16 md:pt-40 md:pb-24 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-widest font-sans">{titleEn}</h1>
                <p className="text-emerald-200/70 font-medium tracking-wider">{titleJa}</p>
            </div>
        </div>
    );
};
