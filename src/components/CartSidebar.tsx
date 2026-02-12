"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, Flame } from "lucide-react";
import { useOrder } from "./OrderContext";

export default function CartSidebar() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    itemCount,
    subtotal,
  } = useOrder();

  // Estimated tax (Georgia 8% for Augusta/Richmond County)
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleCheckout = async () => {
    // In production: POST to /api/checkout which creates a Stripe Checkout Session
    // For demo: show alert explaining the flow
    alert(
      `🔥 Order Total: $${total.toFixed(2)}\n\n` +
        `In production, this redirects to Stripe Checkout where the customer:\n` +
        `• Enters payment info (card)\n` +
        `• Selects a pickup time\n` +
        `• Adds special instructions\n\n` +
        `After payment:\n` +
        `• Customer gets email/SMS confirmation\n` +
        `• Restaurant gets notified via email + SMS\n` +
        `• Order appears on kitchen dashboard\n\n` +
        `Stripe fee on this order: ~$${(total * 0.029 + 0.30).toFixed(2)}\n` +
        `Your 10% platform fee: $${(total * 0.10).toFixed(2)}\n` +
        `Net to restaurant: $${(total - (total * 0.029 + 0.30) - (total * 0.10)).toFixed(2)}`
    );
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" as const }}
            className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-charcoal border-l border-rust/20 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-cream/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-rust" />
                <h2 className="font-display text-xl uppercase tracking-wider text-cream">
                  Your Order
                </h2>
                {itemCount > 0 && (
                  <span className="bg-rust text-cream text-xs font-bold px-2 py-0.5 font-display">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-cream/50 hover:text-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Flame className="w-16 h-16 text-rust/20 mb-4" />
                  <p className="font-display text-lg text-cream/40 uppercase tracking-wider">
                    Cart is empty
                  </p>
                  <p className="text-cream/30 text-sm mt-2">
                    Add items from the menu to get started
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 border border-rust/30 text-rust hover:bg-rust hover:text-cream px-6 py-2 font-display uppercase text-sm tracking-wider transition-all"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex gap-3 p-3 border border-cream/[0.06] bg-cream/[0.02]"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm uppercase tracking-wide text-cream leading-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-cream/40 text-xs mt-0.5">
                          ${item.price.toFixed(2)} each
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-rust hover:text-rust transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-display text-sm w-5 text-center text-cream">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.name, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center border border-cream/20 text-cream/60 hover:border-rust hover:text-rust transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between">
                        <span className="font-display text-base font-bold text-rust">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="text-cream/30 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Clear cart */}
                  <button
                    onClick={clearCart}
                    className="text-cream/30 hover:text-red-400 text-xs font-display uppercase tracking-wider transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>

            {/* Footer with totals */}
            {items.length > 0 && (
              <div className="border-t border-cream/10 p-4 sm:p-6 space-y-3">
                <div className="flex justify-between text-sm text-cream/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-cream/60">
                  <span>Est. Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-display text-lg text-cream font-bold pt-2 border-t border-cream/10">
                  <span>Total</span>
                  <span className="text-rust">${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-rust hover:bg-rust-dark text-cream font-display uppercase text-lg tracking-wider py-4 transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Flame className="w-5 h-5" />
                  Checkout — Pickup Order
                </button>

                <p className="text-center text-cream/30 text-xs">
                  Secure payment via Stripe. You&apos;ll select a pickup time at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
