"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background — wood texture */}
      <Image
        src="/images/woodbackround.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-charcoal" />

      {/* Watermark flame — cattle brand style */}
      <Flame
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-rust/[0.06] pointer-events-none"
        strokeWidth={0.5}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          {/* Established badge */}
          <div className="inline-flex items-center gap-2 mb-6 border-2 border-rust/60 bg-black/40 backdrop-blur-sm px-5 py-2">
            <Flame className="w-4 h-4 text-rust" />
            <span className="font-display text-sm sm:text-base uppercase tracking-[0.3em] text-cream font-semibold">
              Est. 1996 &bull; Augusta, GA
            </span>
            <Flame className="w-4 h-4 text-rust" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut" as const,
          }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold uppercase tracking-wide text-cream text-shadow-lg leading-[0.9]"
        >
          Mot&apos;s Pit
          <span className="block text-rust">BBQ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut" as const,
          }}
          className="mt-6 text-lg sm:text-xl text-cream/80 font-body max-w-xl mx-auto text-shadow-sm"
        >
          Authentic wood-smoked barbecue — slow-cooked over real wood since
          &apos;96. Four house sauces. Made with love in Augusta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.45,
            ease: "easeOut" as const,
          }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="bg-rust hover:bg-rust-dark text-cream font-display uppercase text-lg tracking-wider px-8 py-4 transition-colors inline-flex items-center gap-2 group"
          >
            <Flame className="w-5 h-5 group-hover:animate-pulse" />
            Order for Pickup
          </a>
          <a
            href="#menu"
            className="border-2 border-cream/30 hover:border-rust text-cream font-display uppercase text-lg tracking-wider px-8 py-4 transition-colors"
          >
            View Menu
          </a>
        </motion.div>

        {/* Skip the apps callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-sm text-cream/50 font-body"
        >
          Skip the apps. Support local.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-cream/40" />
      </motion.div>
    </section>
  );
}
