"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/menu";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-rust fill-rust" : "text-cream/20"
          }`}
        />
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-display uppercase tracking-wider text-cream/40 border border-cream/10 px-2 py-0.5">
      {source}
    </span>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle wood bg */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url(/images/woodbackround.jpg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-smoke to-charcoal" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-rust mb-3 block">
            What Folks Are Saying
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-cream">
            Straight From <span className="text-rust">The Table</span>
          </h2>
        </motion.div>

        {/* Spotlight review */}
        <div className="relative min-h-[280px] flex items-center">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-6 z-20 w-10 h-10 flex items-center justify-center border border-cream/20 hover:border-rust text-cream/40 hover:text-rust transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:-right-6 z-20 w-10 h-10 flex items-center justify-center border border-cream/20 hover:border-rust text-cream/40 hover:text-rust transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-full px-12 sm:px-16 overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" as const }}
                className="text-center"
              >
                <Quote className="w-10 h-10 text-rust/30 mx-auto mb-6" />
                <blockquote className="font-body text-xl sm:text-2xl text-cream/90 leading-relaxed italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </blockquote>
                <div className="mt-6 flex flex-col items-center gap-2">
                  <StarRating rating={reviews[current].rating} />
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm uppercase tracking-wider text-cream/70">
                      {reviews[current].author}
                    </span>
                    <SourceBadge source={reviews[current].source} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-rust w-6" : "bg-cream/20 hover:bg-cream/40"
              }`}
            />
          ))}
        </div>

        {/* Review summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 text-center"
        >
          <div>
            <div className="flex items-center gap-1 justify-center">
              <Star className="w-5 h-5 text-rust fill-rust" />
              <span className="font-display text-2xl font-bold text-cream">
                4.9
              </span>
            </div>
            <span className="text-cream/40 text-xs uppercase tracking-wider font-display">
              Average Rating
            </span>
          </div>
          <div className="w-px bg-cream/10 hidden sm:block" />
          <div>
            <span className="font-display text-2xl font-bold text-cream block">
              28+
            </span>
            <span className="text-cream/40 text-xs uppercase tracking-wider font-display">
              Years Serving Augusta
            </span>
          </div>
          <div className="w-px bg-cream/10 hidden sm:block" />
          <div>
            <span className="font-display text-2xl font-bold text-cream block">
              100
            </span>
            <span className="text-cream/40 text-xs uppercase tracking-wider font-display">
              Health Score
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
