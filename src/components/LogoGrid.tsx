interface LogoGridProps {
    logos: { src: string; alt: string }[];
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-32 bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group">
                    {logo.src ? (
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-[80%] max-h-16 grayscale group-hover:grayscale-0 transition-all"
                        />
                    ) : (
                        <span className="text-lg font-bold text-emerald-300 group-hover:text-emerald-500 tracking-wider text-center px-4 transition-colors">
                            {logo.alt}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};
