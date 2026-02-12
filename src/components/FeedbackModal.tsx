"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Send } from "lucide-react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function StarInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);

  return (
    <div>
      <label className="font-display text-xs uppercase tracking-wider text-cream/60 mb-1 block">
        {label}
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="transition-colors"
          >
            <Star
              className={`w-6 h-6 ${
                star <= (hover || value)
                  ? "text-rust fill-rust"
                  : "text-cream/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FeedbackModal({ isOpen, onClose }: FeedbackModalProps) {
  const [food, setFood] = useState(0);
  const [service, setService] = useState(0);
  const [atmosphere, setAtmosphere] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ food, service, atmosphere, comment }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFood(0);
      setService(0);
      setAtmosphere(0);
      setComment("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/60"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] w-full max-w-md mx-4"
          >
            <div className="bg-smoke border border-rust/20 p-6 shadow-2xl shadow-black/40">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wider text-cream">
                    Leave Feedback
                  </h3>
                  <p className="text-cream/40 text-sm mt-1">
                    Help us keep doing what we love
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-cream/40 hover:text-cream transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="text-4xl mb-3">🔥</div>
                  <h4 className="font-display text-lg uppercase tracking-wider text-cream">
                    Thank You!
                  </h4>
                  <p className="text-cream/50 text-sm mt-2">
                    Your feedback means the world to us.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 border border-rust/30 text-rust hover:bg-rust hover:text-cream px-6 py-2 font-display uppercase text-sm tracking-wider transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <StarInput label="Food" value={food} onChange={setFood} />
                  <StarInput
                    label="Service"
                    value={service}
                    onChange={setService}
                  />
                  <StarInput
                    label="Atmosphere"
                    value={atmosphere}
                    onChange={setAtmosphere}
                  />

                  <div>
                    <label className="font-display text-xs uppercase tracking-wider text-cream/60 mb-1 block">
                      Comments (optional)
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      className="w-full bg-charcoal border border-cream/10 focus:border-rust px-3 py-2 text-cream text-sm placeholder-cream/20 outline-none resize-none transition-colors"
                      placeholder="Tell us what you thought..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || (food === 0 && service === 0 && atmosphere === 0)}
                    className="w-full bg-rust hover:bg-rust-dark disabled:opacity-40 disabled:cursor-not-allowed text-cream font-display uppercase tracking-wider py-3 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Sending..." : "Submit Feedback"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
