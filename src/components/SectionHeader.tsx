import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    titleEn: string;
    titleJa: string;
    className?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

export const SectionHeader = ({ titleEn, titleJa, className, align = 'left', light = false }: SectionHeaderProps) => {
    return (
        <div className={cn('mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
            <p className={cn(
                "text-sm font-bold tracking-widest mb-2",
                light ? "text-blue-300" : "text-blue-500"
            )}>
                {titleEn.toUpperCase()}
            </p>
            <h2 className={cn(
                "text-3xl md:text-4xl font-bold tracking-tight",
                light ? "text-white" : "text-[#1E3A5F]"
            )}>
                {titleJa}
            </h2>
        </div>
    );
};
