"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_ITEMS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { direction, scrollY } = useScrollDirection();

  const isHidden = direction === "down" && scrollY > 100;
  const isScrolled = scrollY > 20;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? "glass-strong shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-electric-blue/20 border border-electric-blue/30 flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors">
                <span className="text-electric-blue font-bold text-sm">S</span>
              </div>
              <span className="text-white font-bold text-lg">
                SchemaSync<span className="text-electric-blue">.AI</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-silver-200 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-electric-blue after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button href="/contact" size="sm" className="hidden sm:inline-flex">
                Request Demo
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-silver-200 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
