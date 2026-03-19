interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  gradient = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl bg-navy-900/60 backdrop-blur-md border border-white/8
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/30 hover:shadow-[0_0_30px_rgba(45,127,249,0.1)]" : ""}
        ${gradient ? "gradient-border" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
