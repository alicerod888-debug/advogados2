"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Loader() {
  const [on, setOn] = useState(true);
  useEffect(() => { const t = setTimeout(() => setOn(false), 1500); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>{on && (
      <motion.div exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[100] grid place-items-center bg-ink" aria-hidden>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="#C6A15B" strokeWidth="1.2">
          <motion.path d="M20 100h80M30 100V45M50 100V45M70 100V45M90 100V45M15 45h90L60 15z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
        </svg>
      </motion.div>)}
    </AnimatePresence>
  );
}
