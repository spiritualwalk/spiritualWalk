"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LotusIcon from "./LotusIcon";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/" },
  { label: "Journey", href: "/journey" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Destinations", href: "/destinations" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Gallery", href: "/gallery" },
  { label: "Director", href: "/director" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = scrolled || open;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        light ? "bg-white/90 backdrop-blur-md shadow-[0_2px_20px_rgba(42,42,42,0.06)]" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <LotusIcon className="w-9 h-9 group-hover:scale-110 transition-transform duration-500" />
          <div className="leading-tight">
            <div className={cn("font-display text-xl tracking-widest2 uppercase", light ? "text-charcoal" : "text-white")}>
              Spiritual Walk
            </div>
            <div className={cn("text-[10px] tracking-wide font-body", light ? "text-charcoal-light/70" : "text-white/70")}>
              Walk in the Footsteps of the Buddha
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={cn(
                "text-sm font-body tracking-wide transition-colors duration-300 relative group",
                light ? "text-charcoal hover:text-gold-deep" : "text-white/90 hover:text-white"
              )}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link href="/booking" className="btn-gold">
            Book Retreat
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className={cn("lg:hidden", light ? "text-charcoal" : "text-white")}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white overflow-hidden border-t border-gold/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <Link key={l.label} href={l.href} className="text-charcoal font-body" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link href="/booking" className="btn-gold w-fit" onClick={() => setOpen(false)}>
                Book Retreat
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
