import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main soft-glow-text">
            About Me
          </h2>
          <div className="gradient-line"></div>
        </motion.div>
        <motion.div variants={container} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={item} className="space-y-6">
            <motion.p variants={item} className="text-lg leading-relaxed text-text-sub">
              Hello, I am Fahim – an enthusiastic student, currently taking Programming Hero's Level 1 course and on my way to becoming a full-stack web developer. I practice coding regularly every day, try to learn something new, and gradually improve my skills. Every day brings new opportunities for me to learn, and this continuous effort is taking me closer to my goal.
            </motion.p>
            <motion.p variants={item} className="text-lg leading-relaxed text-text-sub">
              I am now almost at the end of the course and am more confident than ever. I believe that anything is possible with hard work, patience and confidence. I know that one day in the future I will definitely become a skilled and successful Full Stack Developer. InshaAllah. 😉👍
            </motion.p>
            <motion.div variants={item} className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-card-bg p-6 rounded-xl border border-border-color text-center hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-3xl font-bold text-primary font-display mb-1 drop-shadow-md">
                  20+
                </h3>
                <p className="text-xs font-semibold tracking-wider text-text-sub uppercase">
                  Projects Completed
                </p>
              </div>
              <div className="bg-card-bg p-6 rounded-xl border border-border-color text-center hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-3xl font-bold text-primary font-display mb-1 drop-shadow-md">
                  6+
                </h3>
                <p className="text-xs font-semibold tracking-wider text-text-sub uppercase">
                  Months Experience
                </p>
              </div>
              <div className="bg-card-bg p-6 rounded-xl border border-border-color text-center hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-3xl font-bold text-primary font-display mb-1 drop-shadow-md">
                  100
                </h3>
                <p className="text-xs font-semibold tracking-wider text-text-sub uppercase">
                  Happy Clients
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={item} className="flex justify-center relative">
            <div className="w-64 h-64 relative animate-pulse">
              <div className="absolute inset-0 rounded-full border border-secondary/20 rotate-45 transform scale-110 shadow-[0_0_15px_rgba(74,222,128,0.2)]"></div>
              <div className="absolute inset-0 rounded-full border border-primary/20 -rotate-12 transform scale-90 shadow-[0_0_15px_rgba(56,189,248,0.2)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-background-alt rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)] ring-2 ring-primary"></div>
              </div>
              <div className="absolute top-10 left-10 w-3 h-3 bg-primary rounded-full blur-[1px] shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 bg-secondary rounded-full blur-[1px] shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
              <Image
                alt="Fahim Professional Portrait"
                src="https://i.ibb.co.com/LD9ccg94/20260105-161451.jpg"
                className="w-full h-full rounded-full object-cover object-center opacity-90 brightness-110"
                width={256}
                height={256}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;