"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/20 dark:bg-primary/10 blur-[120px] mix-blend-screen dark:mix-blend-lighten"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/20 dark:bg-secondary/10 blur-[120px] mix-blend-screen dark:mix-blend-lighten"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[20%] left-[30%] w-[200px] h-[200px] rounded-full bg-purple-500/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <motion.div 
            className="order-2 lg:order-1 flex flex-col items-start space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/20 dark:bg-emerald-900/30 border border-emerald-200/30 dark:border-emerald-800/50 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 dark:text-emerald-400">
                Available for Work
              </span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-main leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Mohammad Fahim
                </span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-text-sub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Full Stack Developer.
              </motion.h2>
            </div>

            <motion.p 
              className="text-lg text-text-sub max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I design and develop modern, scalable web applications focused on performance and delivering exceptional user experiences. Specialized in React, Node.js, and cloud technologies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-slate-900 transition-all duration-200 bg-primary rounded-xl hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-slate-900"
                href="#projects"
              >
                View Projects
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link 
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-text-sub transition-all duration-200 bg-transparent border border-border-color rounded-xl hover:bg-slate-100/10 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-900"
                href="https://drive.google.com/file/d/1uQKgfLmiAEqT4MAMFGNEbMyRYvV_zjZd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <i className="fas fa-download ml-2 text-primary"></i>
              </Link>
            </motion.div>

            <motion.div 
              className="pt-4 flex items-center gap-6 text-text-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="text-sm font-medium uppercase tracking-widest">Tech Stack</span>
              <div className="h-px w-12 bg-slate-300/30 dark:bg-slate-700"></div>
              <div className="flex gap-4">
                <i className="devicon-react-original text-2xl hover:text-primary transition-colors cursor-default" title="React"></i>
                <i className="devicon-nodejs-plain text-2xl hover:text-green-500 transition-colors cursor-default" title="NodeJS"></i>
                <i className="devicon-mongodb-plain text-2xl hover:text-green-400 transition-colors cursor-default" title="MongoDB"></i>
                <i className="devicon-typescript-plain text-2xl hover:text-blue-600 transition-colors cursor-default" title="TypeScript"></i>
              </div>
            </motion.div>
          </motion.div>

          {/* Image content */}
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[60px] animate-pulse"></div>
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 rounded-full border border-primary/30 dark:border-primary/20 scale-105"></div>
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-300/30 dark:border-slate-700 scale-110 animate-spin"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card-bg shadow-2xl relative z-10 bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-700/50 to-slate-900/50"></div>
                <Image
                  alt="Fahim Developer Portrait"
                  src="https://i.ibb.co.com/Q73cXWq7/IMG-20210606-235551.jpg"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 brightness-90 contrast-110 saturate-110"
                  width={450}
                  height={450}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -left-4 top-20 md:top-32 md:-left-12 z-20 animate-bounce bg-card-bg/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-border-color"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-12 h-12 bg-background-alt rounded-xl flex items-center justify-center">
                  <i className="fas fa-code text-primary text-3xl"></i>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-4 bottom-20 md:bottom-32 md:-right-8 z-20 animate-bounce bg-card-bg/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-border-color"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-background-alt rounded-xl flex items-center justify-center">
                  <i className="fas fa-rocket text-secondary text-3xl"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;