"use client";
import { motion } from "framer-motion";

export default function DateBanner() {
  return (
    <div className="mt-6 flex items-center justify-center gap-6 text-xl font-semibold text-white">
      {/* شهریور از چپ */}
      <motion.span
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="border-b-2 border-t-2 border-white px-4 py-1"
      >
        شهریور
      </motion.span>

      {/* عدد ثابت */}
      <span className="text-7xl font-bold text-orange-600">2</span>

      {/* سه شنبه از راست */}
      <motion.span
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="border-b-2 border-t-2 border-white px-4 py-1"
      >
        سه‌شنبه
      </motion.span>
    </div>
  );
}
