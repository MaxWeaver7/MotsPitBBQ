"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { galleryImages } from "@/data/menu";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Wood bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/woodbackround.jpg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/[0.85]" />

      {/* Watermark */}
      <Flame
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-rust/[0.03] pointer-events-none"
        strokeWidth={0.3}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-rust mb-3 block">
            From The Pit
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-cream">
            See What&apos;s <span className="text-rust">Cookin&apos;</span>
          </h2>
        </motion.div>

        {/* Photo grid — food on wood, like plates on a picnic table */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut" as const,
              }}
              className={`relative group ${
                i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""
              }`}
            >
              {/* Wood "placemat" behind the image */}
              <div
                className="absolute -inset-2 hidden sm:block"
                style={{
                  backgroundImage: "url(/images/woodbackround.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -inset-2 bg-black/20 hidden sm:block" />

              <div
                className={`relative overflow-hidden shadow-xl shadow-black/30 ${
                  i === 0 ? "aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                />
                {/* Hover caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <p className="font-display text-xs sm:text-sm uppercase tracking-wider text-cream">
                    {img.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
