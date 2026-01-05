import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f172a] py-8 border-t border-border-color"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-text-sub text-xs">© 2026 Mohammad Fahim. All rights reserved.</p>
        <p className="text-slate-500 text-[10px] mt-2">
          Designed and developed by me with <span className="text-red-500">♥</span> and clean code.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;