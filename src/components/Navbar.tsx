"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { useOrder } from "./OrderContext";
import { restaurantInfo } from "@/data/menu";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsCartOpen, itemCount } = useOrder();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display text-xl sm:text-2xl font-bold text-rust tracking-wide uppercase group-hover:text-rust-light transition-colors">
                Mot&apos;s Pit BBQ
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display text-sm uppercase tracking-widest text-cream/80 hover:text-rust transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side: CTA + Cart + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${restaurantInfo.phoneRaw}`}
                className="hidden sm:flex items-center gap-1.5 text-cream/70 hover:text-rust transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">{restaurantInfo.phone}</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-cream hover:text-rust transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-rust text-cream text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </button>

              <a
                href="#menu"
                className="hidden sm:inline-flex bg-rust hover:bg-rust-dark text-cream font-display uppercase text-sm tracking-wider px-5 py-2.5 transition-colors"
              >
                Order Now
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-cream hover:text-rust transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" as const }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-charcoal border-l border-rust/20 p-8 md:hidden"
              style={{
                backgroundImage: "url(/images/woodbackround.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-charcoal/90" />
              <div className="relative z-10">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="mb-8 text-cream/70 hover:text-rust transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-lg uppercase tracking-widest text-cream/90 hover:text-rust transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <hr className="border-rust/20" />
                  <a
                    href="#menu"
                    onClick={() => setMobileOpen(false)}
                    className="bg-rust hover:bg-rust-dark text-cream font-display uppercase text-center tracking-wider px-5 py-3 transition-colors"
                  >
                    Order Now
                  </a>
                  <a
                    href={`tel:${restaurantInfo.phoneRaw}`}
                    className="flex items-center gap-2 text-cream/70 hover:text-rust transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
