interface LogoGridProps {
    logos: { src: string; alt: string }[];
}

export const LogoGrid = ({ logos }: LogoGridProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-4">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center h-28 bg-white border border-[var(--color-border)] p-4 rounded-xl hover:shadow-md transition-all duration-300"
                >
                    {logo.src ? (
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-[80%] max-h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                    ) : (
                        <span className="text-sm text-[var(--color-text-muted)] font-extrabold tracking-widest">
                            SAMPLE LOGO
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};
