"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Shield, Clock, UtensilsCrossed } from "lucide-react";

const highlights = [
  {
    icon: Flame,
    title: "Wood-Smoked",
    text: "Real pit BBQ cooked low & slow over wood — never gas, never electric.",
  },
  {
    icon: Clock,
    title: "Since 1996",
    text: "Nearly 30 years serving Augusta. That's not a marketing line, it's a legacy.",
  },
  {
    icon: Shield,
    title: "100 Health Score",
    text: "Perfect score. Clean kitchen, clean food, no exceptions.",
  },
  {
    icon: UtensilsCrossed,
    title: "4 House Sauces",
    text: "Mild, Hot, Sweet, and Mustard BBQ — all made from scratch in-house.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Wood background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "url(/images/woodbackround.jpg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />

      {/* Watermark */}
      <UtensilsCrossed
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] text-rust/[0.04] pointer-events-none rotate-12"
        strokeWidth={0.5}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="font-display text-xs uppercase tracking-[0.3em] text-rust mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-cream leading-tight">
              Real Pit BBQ.
              <br />
              <span className="text-rust">No Shortcuts.</span>
            </h2>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed">
              Since 1996, Mot&apos;s Pit BBQ has been doing things the right way
              — low and slow, over real wood, right here in Augusta. No fancy
              gimmicks. Just smoke, time, and recipes perfected over nearly three
              decades.
            </p>
            <p className="mt-4 text-cream/70 text-lg leading-relaxed">
              Every plate comes with your choice of four house-made sauces and
              sides that are just as serious as the meat. This is the BBQ your
              grandparents would recognize — honest, generous, and worth the
              drive.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 border border-rust/30 px-5 py-3 bg-rust/5">
              <Flame className="w-5 h-5 text-rust" />
              <span className="font-display uppercase tracking-wider text-sm text-cream">
                Tailgate Kits Available
              </span>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative"
          >
            {/* Main image on "wood" */}
            <div className="relative">
              <div
                className="absolute -inset-4 sm:-inset-6"
                style={{
                  backgroundImage: "url(/images/woodbackround.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -inset-4 sm:-inset-6 bg-black/20" />
              <div className="relative shadow-2xl shadow-black/40">
                <Image
                  src="/images/Sampledinner.jpeg"
                  alt="Mot's Pit BBQ Sampler Dinner — ribs, pulled pork, chicken, coleslaw and baked beans"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Price callout overlay */}
            <div className="absolute -bottom-4 -left-4 bg-rust px-5 py-3 shadow-lg">
              <span className="font-display text-2xl font-bold text-cream">
                $20
              </span>
              <span className="block font-display text-xs uppercase tracking-wider text-cream/80">
                Sampler Dinner
              </span>
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut" as const,
              }}
              className="text-center"
            >
              <item.icon className="w-8 h-8 text-rust mx-auto mb-3" />
              <h3 className="font-display text-sm uppercase tracking-wider text-cream font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-cream/50 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
