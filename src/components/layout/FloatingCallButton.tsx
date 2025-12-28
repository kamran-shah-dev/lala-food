import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:03112111191"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-large animate-pulse-glow"
      aria-label="Call Lala's Food"
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
};
