"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Award, Send } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: typeof Home;
  activeColor: string;
  isActive: (pathname: string) => boolean;
}

export default function BottomNav() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);

  // Scroll distance & direction detection (adapted from Brina Rent scroll-awareness)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let accumulatedDelta = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY;

          // Always expand near top of page
          if (currentScrollY < 40) {
            setIsCompact(false);
            accumulatedDelta = 0;
          } else {
            // Scroll down -> compact bar to give reading space
            if (delta > 0) {
              accumulatedDelta = Math.max(0, accumulatedDelta + delta);
              if (accumulatedDelta > 35) {
                setIsCompact(true);
                accumulatedDelta = 0;
              }
            } else if (delta < 0) {
              // Scroll up -> expand for easy tapping
              accumulatedDelta = Math.min(0, accumulatedDelta + delta);
              if (accumulatedDelta < -25) {
                setIsCompact(false);
                accumulatedDelta = 0;
              }
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      id: "home",
      label: "Beranda",
      href: "/",
      icon: Home,
      activeColor: "bg-[#ffdb58]", // Yellow
      isActive: (p) => p === "/",
    },
    {
      id: "about",
      label: "Tentang",
      href: "/about",
      icon: User,
      activeColor: "bg-[#bc95d4]", // Purple
      isActive: (p) => p === "/about" || p.startsWith("/about/"),
    },
    {
      id: "portfolio",
      label: "Porto",
      href: "/portfolio",
      icon: Briefcase,
      activeColor: "bg-[#ffdb58]", // Yellow
      isActive: (p) => p === "/portfolio" || p.startsWith("/portfolio/"),
    },
    {
      id: "certificates",
      label: "Sertif",
      href: "/certificates",
      icon: Award,
      activeColor: "bg-[#a3e635]", // Lime
      isActive: (p) => p === "/certificates" || p.startsWith("/certificates/"),
    },
    {
      id: "contact",
      label: "Kontak",
      href: "/contact",
      icon: Send,
      activeColor: "bg-[#88aaee]", // Blue
      isActive: (p) => p === "/contact" || p.startsWith("/contact/"),
    },
  ];

  // Dynamic responsive sizing tokens
  const currentWidth = isCompact ? 330 : 375;
  const currentPadX = isCompact ? 6 : 8;
  const currentPadY = isCompact ? 5 : 6;
  const currentActivePadX = isCompact ? 10 : 12;
  const currentActivePadY = isCompact ? 5 : 7;
  const iconBtnSize = isCompact ? 34 : 38;
  const iconSize = isCompact ? 16 : 17;
  const activeTextClass = isCompact ? "text-[11px]" : "text-xs";
  const cubicBezierEase = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <nav
      aria-label="Navigasi Bawah Mobile"
      className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] inset-x-0 z-40 flex justify-center pointer-events-none px-2.5 sm:px-4 md:hidden"
    >
      {/* Neobrutalism Floating Capsule Navigation Bar */}
      <div
        style={{
          maxWidth: `${currentWidth}px`,
          paddingLeft: `${currentPadX}px`,
          paddingRight: `${currentPadX}px`,
          paddingTop: `${currentPadY}px`,
          paddingBottom: `${currentPadY}px`,
          transition: `max-width 0.35s ${cubicBezierEase}, padding 0.35s ${cubicBezierEase}, box-shadow 0.35s ${cubicBezierEase}`,
        }}
        className="pointer-events-auto w-full bg-white/95 backdrop-blur-md border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-1 transition-all"
      >
        {navItems.map((item) => {
          const active = item.isActive(pathname);
          const Icon = item.icon;

          if (active) {
            return (
              <Link
                key={item.id}
                href={item.href}
                prefetch={true}
                style={{
                  paddingLeft: `${currentActivePadX}px`,
                  paddingRight: `${currentActivePadX}px`,
                  paddingTop: `${currentActivePadY}px`,
                  paddingBottom: `${currentActivePadY}px`,
                  transition: `padding 0.35s ${cubicBezierEase}`,
                }}
                className={`flex items-center gap-1.5 ${item.activeColor} text-black border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black ${activeTextClass} tracking-tight shrink-0 transition-all duration-200`}
                aria-current="page"
              >
                <Icon
                  style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    transition: `width 0.35s ${cubicBezierEase}, height 0.35s ${cubicBezierEase}`,
                  }}
                  className="stroke-[2.8] shrink-0"
                />
                <span className="whitespace-nowrap animate-in fade-in duration-150">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              prefetch={true}
              aria-label={item.label}
              style={{
                width: `${iconBtnSize}px`,
                height: `${iconBtnSize}px`,
                transition: `width 0.35s ${cubicBezierEase}, height 0.35s ${cubicBezierEase}`,
              }}
              className="flex items-center justify-center rounded-xl text-neutral-800 hover:text-black hover:bg-neutral-100 active:translate-y-0.5 active:translate-x-0.5 shrink-0 transition-all"
            >
              <Icon
                style={{
                  width: `${iconSize + 1}px`,
                  height: `${iconSize + 1}px`,
                  transition: `width 0.35s ${cubicBezierEase}, height 0.35s ${cubicBezierEase}`,
                }}
                className="stroke-[2.3]"
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
