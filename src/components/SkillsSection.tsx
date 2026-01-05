import { motion } from "framer-motion";

const SkillsSection = () => {
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
      id="skills"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main soft-glow-text">
            Skills & Technologies
          </h2>
          <div className="gradient-line"></div>
          <p className="text-text-sub italic">
            Technologies & tools I use to craft modern web experiences
          </p>
        </motion.div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 font-display text-primary drop-shadow-sm">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-html5 text-3xl text-orange-500 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                HTML5
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-css3-alt text-3xl text-blue-500 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                CSS3
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-js text-3xl text-yellow-400 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                JavaScript
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-wind text-3xl text-cyan-500 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Tailwind
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-react text-3xl text-cyan-400 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                React
              </span>
            </motion.div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 font-display text-secondary drop-shadow-sm">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-secondary hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-node text-3xl text-green-500 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Node.js
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-secondary hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-server text-3xl text-gray-300 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Express.js
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-secondary hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-database text-3xl text-green-400 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                MongoDB
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-secondary hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-lock text-3xl text-pink-500 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                JWT
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-24 h-24 bg-card-bg rounded-xl border border-border-color flex flex-col items-center justify-center hover:border-secondary hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-fire text-3xl text-orange-400 mb-2 group-hover:scale-110 transition-transform drop-shadow"></i>
              <span className="text-xs font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Firebase
              </span>
            </motion.div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 font-display text-text-main soft-glow-text">
            Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div variants={item} className="group w-20 h-20 bg-card-bg rounded-lg border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-git-alt text-2xl text-red-500 mb-1 drop-shadow"></i>
              <span className="text-[10px] font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Git
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-20 h-20 bg-card-bg rounded-lg border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-github text-2xl text-white mb-1 drop-shadow"></i>
              <span className="text-[10px] font-semibold text-text-sub group-hover:text-text-main transition-colors">
                GitHub
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-20 h-20 bg-card-bg rounded-lg border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-code text-2xl text-blue-500 mb-1 drop-shadow"></i>
              <span className="text-[10px] font-semibold text-text-sub group-hover:text-text-main transition-colors">
                VS Code
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-20 h-20 bg-card-bg rounded-lg border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fas fa-rocket text-2xl text-orange-500 mb-1 drop-shadow"></i>
              <span className="text-[10px] font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Postman
              </span>
            </motion.div>
            <motion.div variants={item} className="group w-20 h-20 bg-card-bg rounded-lg border border-border-color flex flex-col items-center justify-center hover:border-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 cursor-pointer shadow-sm">
              <i className="fab fa-figma text-2xl text-purple-500 mb-1 drop-shadow"></i>
              <span className="text-[10px] font-semibold text-text-sub group-hover:text-text-main transition-colors">
                Figma
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;