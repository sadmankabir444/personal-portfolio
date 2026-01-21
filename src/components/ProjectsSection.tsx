import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Loanlink",
      description: "A comprehensive loan management platform that streamlines the entire lending process from application to approval and tracking.",
      image: "https://i.ibb.co.com/Z1hvTzYj/Screenshot-2026-01-05-180151.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://jovial-medovik-6583cd.netlify.app/"
    },
    {
      id: 2,
      title: "GreenNest",
      description: "An eco-friendly e-commerce platform focused on sustainable products and environmentally conscious shopping.",
      image: "https://i.ibb.co.com/S77H9yQD/Screenshot-2026-01-05-162229.png",
      technologies: ["React", "Next.js", "Tailwind", "Node.js"],
      link: "https://peppy-granita-cbd8ee.netlify.app/"
    },
    {
      id: 3,
      title: "StudyMate",
      description: "A collaborative learning platform that connects students, teachers, and educational resources in one place.",
      image: "https://i.ibb.co.com/tM6dY2x3/Screenshot-2026-01-05-162346.png",
      technologies: ["React", "Firebase", "Material UI", "Express"],
      link: "https://tangerine-scone-de3b97.netlify.app/"
    },
    {
      id: 4,
      title: "Hero Apps – Gaming",
      description: "A gaming application platform that provides tools for game developers and a marketplace for players.",
      image: "https://i.ibb.co.com/pjjWGCwY/Screenshot-2026-01-01-024952.png",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
      link: "https://curious-dodol-30108e.netlify.app/"
    }
  ];

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
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 bg-background-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main soft-glow-text">
            Featured Projects
          </h2>
          <div className="gradient-line"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card-bg rounded-2xl overflow-hidden border border-border-color hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="h-48 overflow-hidden bg-slate-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                  <Image
                    alt={project.title}
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
                    width={400}
                    height={200}
                  />
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-main mb-2 font-display">
                  {project.title}
                </h3>
                <p className="text-xs text-text-sub mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-800 text-[10px] rounded text-primary font-semibold border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;