import { motion } from "framer-motion";

const ServicesSection = () => {
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

  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Frontend Development",
      description: "Pixel-perfect, responsive interfaces using React.js and Next.js with modern animations.",
      features: [
        "React / Next.js",
        "Tailwind CSS", 
        "Framer Motion",
        "Responsive Design"
      ]
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description: "Robust and scalable server-side logic using Node.js, Express, and secure Databases.",
      features: [
        "Node.js / Express",
        "MongoDB",
        "RESTful APIs",
        "Authentication"
      ]
    },
    {
      icon: "fas fa-code-branch",
      title: "Full Stack Solution",
      description: "Complete web applications from scratch to deployment, handling both client and server side.",
      features: [
        "MERN Stack Architecture",
        "Admin Dashboard",
        "Payment Gateway",
        "Deployment (AWS/Vercel)"
      ]
    },
    {
      icon: "fas fa-rocket",
      title: "Performance Optimization",
      description: "Speeding up existing websites, improving SEO, and fixing bugs for better user experience.",
      features: [
        "Lazy Loading",
        "SEO Optimization",
        "Code Refactoring",
        "Bug Fixing"
      ]
    }
  ];

  return (
    <motion.section 
      id="services"
      className="py-20 relative bg-gradient-to-br from-background-alt to-background-light"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={item} className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main soft-glow-text relative z-10">
            High-Quality <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-sub text-lg leading-relaxed mt-4">
            I help businesses grow by crafting high-quality software solutions. From simple landing pages to complex enterprise applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative bg-card-bg border border-border-color rounded-2xl p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <i className={`${service.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-text-sub mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-text-sub"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <span className="fas fa-check-circle text-primary text-sm mr-3"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.a 
                  className="inline-flex items-center text-sm font-semibold text-text-main group-hover:text-primary transition-colors border-b border-text-main group-hover:border-primary pb-0.5"
                  href="#"
                  whileHover={{ x: 5 }}
                >
                  Start Project 
                  <span className="fas fa-arrow-right text-xs ml-2"></span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;