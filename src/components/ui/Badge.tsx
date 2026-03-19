interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-navy-800 text-silver-200 border border-white/10",
    blue: "bg-electric-blue/10 text-electric-blue border border-electric-blue/20",
    outline: "bg-transparent text-silver-300 border border-white/15",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
