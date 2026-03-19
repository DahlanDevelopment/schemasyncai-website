interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dots" | "gradient";
}

export default function GridBackground({
  children,
  className = "",
  variant = "dots",
}: GridBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {variant === "dots" && (
        <div className="absolute inset-0 dot-grid opacity-50" />
      )}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(45,127,249,0.08)_0%,transparent_60%)]" />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
