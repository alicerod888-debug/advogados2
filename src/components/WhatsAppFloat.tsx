"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { waLink } from "@/lib/site";
export default function WhatsAppFloat() {
  return <motion.a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_0_30px_#C6A15B55]"><MessageCircle /></motion.a>;
}
