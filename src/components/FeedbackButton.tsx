"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

export default function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.3, ease: "easeOut" as const }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-rust hover:bg-rust-dark text-cream rounded-full shadow-lg shadow-black/30 flex items-center justify-center transition-colors group"
        aria-label="Leave feedback"
      >
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </motion.button>

      <FeedbackModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
