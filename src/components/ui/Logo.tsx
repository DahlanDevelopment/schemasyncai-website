import { useId } from "react";

const KNIGHT_GLYPH = "\u265E";
const KNIGHT_FONT_FAMILY =
  "'Segoe UI Symbol', 'Apple Symbols', 'DejaVu Sans', 'Noto Sans Symbols', serif";

type LogoMarkProps = {
  size?: number;
  className?: string;
  title?: string;
};

export function LogoMark({
  size = 40,
  className,
  title = "SchemaSync.AI",
}: LogoMarkProps) {
  const rawId = useId();
  const clipId = `ss-logo-clip-${rawId.replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="64" height="64" rx="14" fill="#0F1D32" />
      <defs>
        <clipPath
          id={clipId}
          transform="translate(64 0) scale(-1 1)"
        >
          <text
            x="32"
            y="38"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily={KNIGHT_FONT_FAMILY}
            fontSize="58"
          >
            {KNIGHT_GLYPH}
          </text>
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect x="0" y="0" width="64" height="64" fill="#2D7FF9" />
        {[38, 44, 50].map((y) => (
          <rect
            key={y}
            x="0"
            y={y}
            width="64"
            height="1.6"
            fill="#0F1D32"
            opacity="0.9"
          />
        ))}
      </g>
      <circle cx="8" cy="32" r="1.6" fill="#2D7FF9" opacity="0.5" />
      <circle cx="56" cy="40" r="1.6" fill="#2D7FF9" opacity="0.5" />
    </svg>
  );
}

type WordmarkProps = {
  size?: number;
  tone?: "dark" | "light";
  className?: string;
};

export function Wordmark({
  size = 20,
  tone = "dark",
  className,
}: WordmarkProps) {
  const baseColor = tone === "dark" ? "#FFFFFF" : "#0F1D32";
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-sans, 'Inter', system-ui, sans-serif)",
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.02em",
        color: baseColor,
        lineHeight: 1,
      }}
    >
      SchemaSync<span style={{ color: "#2D7FF9" }}>.AI</span>
    </span>
  );
}

type LogoProps = {
  markSize?: number;
  wordmarkSize?: number;
  tone?: "dark" | "light";
  className?: string;
};

export default function Logo({
  markSize = 40,
  wordmarkSize = 20,
  tone = "dark",
  className,
}: LogoProps) {
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 12 }}
    >
      <LogoMark size={markSize} />
      <Wordmark size={wordmarkSize} tone={tone} />
    </span>
  );
}
