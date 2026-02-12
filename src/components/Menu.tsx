"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Flame, Check, Bird } from "lucide-react";
import { menuCategories, restaurantInfo } from "@/data/menu";
import type { MenuItem } from "@/data/menu";
import { useOrder } from "./OrderContext";

function AddToCartButton({ item }: { item: MenuItem }) {
  const { addItem, items, updateQuantity } = useOrder();
  const cartItem = items.find((i) => i.name === item.name);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  if (cartItem) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.name, cartItem.quantity - 1)}
          className="w-8 h-8 flex items-center justify-center border border-rust/40 text-rust hover:bg-rust hover:text-cream transition-colors"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="font-display text-lg w-6 text-center text-cream">
          {cartItem.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.name, cartItem.quantity + 1)}
          className="w-8 h-8 flex items-center justify-center bg-rust text-cream hover:bg-rust-dark transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className="flex items-center gap-1.5 bg-rust/10 hover:bg-rust text-rust hover:text-cream border border-rust/30 hover:border-rust px-3 py-1.5 transition-all font-display text-sm uppercase tracking-wider group"
    >
      <AnimatePresence mode="wait">
        {justAdded ? (
          <motion.span
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center gap-1"
          >
            <Check className="w-4 h-4" /> Added
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />{" "}
            Add
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut" as const }}
      className="group relative"
    >
      <div className="flex gap-4">
        {/* Food photo (if available) */}
        {item.image && (
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
            {/* Wood "mat" behind the photo */}
            <div
              className="absolute -inset-1.5 rounded-sm"
              style={{
                backgroundImage: "url(/images/woodbackround.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute -inset-1.5 rounded-sm bg-black/10" />
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="relative z-10 object-cover shadow-lg shadow-black/40"
              sizes="(max-width: 640px) 96px, 112px"
            />
          </div>
        )}

        {/* Item details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-display text-base sm:text-lg font-semibold uppercase tracking-wide text-cream group-hover:text-rust transition-colors leading-tight">
                {item.name}
              </h3>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex gap-2 mt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-display text-[10px] uppercase tracking-widest text-rust border border-rust/30 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <span className="font-display text-lg sm:text-xl font-bold text-rust flex-shrink-0">
              ${item.price.toFixed(2)}
            </span>
          </div>

          {item.description && (
            <p className="mt-1.5 text-cream/55 text-sm leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Add to cart */}
          <div className="mt-3">
            <AddToCartButton item={item} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Wood texture bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/woodbackround.jpg)",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Heavy dark overlay so text is readable */}
      <div className="absolute inset-0 bg-charcoal/[0.88]" />

      {/* Watermark rooster */}
      <Bird
        className="absolute left-8 top-20 w-[350px] h-[350px] text-black/[0.08] pointer-events-none -rotate-12"
        strokeWidth={0.4}
      />
      <Flame
        className="absolute right-8 bottom-20 w-[300px] h-[300px] text-rust/[0.05] pointer-events-none rotate-6"
        strokeWidth={0.4}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs uppercase tracking-[0.3em] text-rust mb-3 block">
            The Menu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-cream">
            Smoked <span className="text-rust">Fresh Daily</span>
          </h2>
          <p className="mt-4 text-cream/50 max-w-lg mx-auto">
            Every plate comes with your choice of sides and house-made sauce.
            Order for pickup — ready when you are.
          </p>

          {/* Sides & sauce info */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/40">
            <span>
              <strong className="text-cream/60">Sides:</strong>{" "}
              {restaurantInfo.sides.join(" · ")}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-cream/40">
            <span>
              <strong className="text-cream/60">Sauces:</strong>{" "}
              {restaurantInfo.sauces.join(" · ")}
            </span>
          </div>
        </motion.div>

        {/* Category tabs */}
        <div
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-8 -mx-4 px-4 sm:justify-center"
        >
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`flex-shrink-0 font-display text-sm uppercase tracking-wider px-5 py-2.5 border transition-all whitespace-nowrap ${
                activeCategory === i
                  ? "bg-rust border-rust text-cream"
                  : "border-cream/20 text-cream/60 hover:border-rust/50 hover:text-cream"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" as const }}
        >
          {/* Category description */}
          {menuCategories[activeCategory].description && (
            <p className="text-center text-cream/40 text-sm uppercase tracking-wider mb-8 font-display">
              {menuCategories[activeCategory].description}
            </p>
          )}

          {/* Items list — paper ticket style */}
          <div
            className="relative p-4 sm:p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,238,223,0.06) 0%, rgba(245,238,223,0.02) 100%)",
              border: "1px solid rgba(194,78,0,0.15)",
            }}
          >
            {/* Decorative corner marks (like a receipt) */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-rust/30" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-rust/30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-rust/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-rust/30" />

            <div className="divide-y divide-cream/[0.08] space-y-0">
              {menuCategories[activeCategory].items.map((item) => (
                <div key={item.name} className="py-5 first:pt-0 last:pb-0">
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA at bottom of menu */}
          <div className="mt-8 text-center">
            <p className="text-cream/40 text-sm mb-4">
              Add items to your cart and checkout when ready
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
