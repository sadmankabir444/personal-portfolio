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
      icon: "web",
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
      icon: "dns",
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
      icon: "language",
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
      icon: "rocket_launch",
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
      className="py-20 relative bg-background-alt"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main soft-glow-text">
            High-Quality <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-sub text-lg leading-relaxed mt-4">
            I help businesses grow by crafting high-quality software solutions. From simple landing pages to complex enterprise applications.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={container}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative bg-card-bg border border-border-color rounded-xl p-8 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(0,224,150,0.1)]"
            >
              <div className="w-12 h-12 rounded-lg border border-border-color flex items-center justify-center mb-6 group-hover:border-primary dark:group-hover:border-primary transition-colors">
                <span className="material-icons-outlined text-primary text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main">{service.title}</h3>
              <p className="text-text-sub mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-sub">
                    <span className="material-icons-outlined text-primary text-base mr-2">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                className="inline-flex items-center text-sm font-semibold text-text-main hover:text-primary transition-colors border-b border-text-main hover:border-primary pb-0.5"
                href="#"
              >
                Start Project 
                <span className="material-icons-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;