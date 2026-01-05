import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Predefined positions to avoid random values that cause hydration mismatch
  const circlePositions = [
    { top: 10, left: 5, width: 150, height: 150, color: 'rgba(56, 189, 248, 0.3)' },
    { top: 60, left: 80, width: 200, height: 200, color: 'rgba(74, 222, 128, 0.3)' },
    { top: 30, left: 40, width: 180, height: 180, color: 'rgba(56, 189, 248, 0.3)' },
    { top: 70, left: 20, width: 160, height: 160, color: 'rgba(74, 222, 128, 0.3)' },
    { top: 15, left: 70, width: 170, height: 170, color: 'rgba(56, 189, 248, 0.3)' },
  ];

  const codeSnippets = [
    "{ }", "()", "[]", "<>", "//", "/* */", "let", "const", "var", 
    "function", "return", "if", "else", "for", "while", "import", 
    "export", "class", "this", "null", "undefined", "true", "false",
    "=>", ":", "=", "==", "===", "=>", "async", "await", "try", "catch"
  ];

  const codePositions = [
    { top: 10, left: 20, delay: 0.2, duration: 15 },
    { top: 25, left: 80, delay: 1.5, duration: 18 },
    { top: 50, left: 45, delay: 0.8, duration: 16 },
    { top: 70, left: 15, delay: 2.1, duration: 17 },
    { top: 85, left: 60, delay: 0.5, duration: 19 },
    { top: 40, left: 30, delay: 2.8, duration: 15 },
    { top: 20, left: 65, delay: 1.2, duration: 18 },
    { top: 60, left: 50, delay: 2.5, duration: 16 },
    { top: 15, left: 90, delay: 0.7, duration: 17 },
    { top: 75, left: 35, delay: 1.9, duration: 20 },
    { top: 35, left: 75, delay: 0.3, duration: 15 },
    { top: 55, left: 10, delay: 2.2, duration: 19 },
    { top: 25, left: 55, delay: 1.0, duration: 16 },
    { top: 80, left: 70, delay: 0.6, duration: 18 },
    { top: 45, left: 5, delay: 2.4, duration: 17 },
    { top: 10, left: 40, delay: 1.3, duration: 15 },
    { top: 70, left: 85, delay: 0.9, duration: 20 },
    { top: 30, left: 25, delay: 1.8, duration: 16 },
    { top: 65, left: 60, delay: 2.7, duration: 18 },
    { top: 5, left: 50, delay: 0.4, duration: 17 },
  ];

  const linePositions = [
    { top: 10, delay: 0 },
    { top: 20, delay: 0.5 },
    { top: 30, delay: 1.0 },
    { top: 40, delay: 1.5 },
    { top: 50, delay: 2.0 },
    { top: 60, delay: 2.5 },
    { top: 70, delay: 3.0 },
    { top: 80, delay: 3.5 },
  ];

  const particlePositions = [
    { top: 15, left: 25, delay: 0.2, duration: 15 },
    { top: 35, left: 65, delay: 1.5, duration: 18 },
    { top: 55, left: 40, delay: 0.8, duration: 16 },
    { top: 75, left: 20, delay: 2.1, duration: 17 },
    { top: 90, left: 65, delay: 0.5, duration: 19 },
    { top: 45, left: 35, delay: 2.8, duration: 15 },
    { top: 25, left: 70, delay: 1.2, duration: 18 },
    { top: 65, left: 55, delay: 2.5, duration: 16 },
    { top: 20, left: 95, delay: 0.7, duration: 17 },
    { top: 80, left: 40, delay: 1.9, duration: 20 },
    { top: 40, left: 80, delay: 0.3, duration: 15 },
    { top: 60, left: 15, delay: 2.2, duration: 19 },
    { top: 30, left: 60, delay: 1.0, duration: 16 },
    { top: 85, left: 75, delay: 0.6, duration: 18 },
    { top: 50, left: 10, delay: 2.4, duration: 17 },
    { top: 10, left: 45, delay: 1.3, duration: 15 },
    { top: 75, left: 90, delay: 0.9, duration: 20 },
    { top: 35, left: 30, delay: 1.8, duration: 16 },
    { top: 70, left: 65, delay: 2.7, duration: 18 },
    { top: 5, left: 55, delay: 0.4, duration: 17 },
    { top: 18, left: 32, delay: 1.1, duration: 16 },
    { top: 42, left: 72, delay: 0.7, duration: 19 },
    { top: 62, left: 47, delay: 2.3, duration: 15 },
    { top: 82, left: 27, delay: 1.4, duration: 18 },
    { top: 92, left: 72, delay: 0.8, duration: 17 },
    { top: 52, left: 42, delay: 2.6, duration: 16 },
    { top: 28, left: 77, delay: 1.6, duration: 20 },
    { top: 68, left: 62, delay: 2.1, duration: 15 },
    { top: 22, left: 87, delay: 0.9, duration: 19 },
    { top: 87, left: 47, delay: 1.2, duration: 17 },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Animated floating circles */}
      {circlePositions.map((pos, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full opacity-10"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            width: `${pos.width}px`,
            height: `${pos.height}px`,
            background: `radial-gradient(circle, ${pos.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}

      {/* Floating code snippets */}
      {codePositions.map((pos, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-xs font-mono text-primary/20"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear",
            delay: pos.delay,
          }}
        >
          {codeSnippets[i % codeSnippets.length]}
        </motion.div>
      ))}

      {/* Animated lines */}
      {linePositions.map((pos, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{
            top: `${pos.top}%`,
            left: '0%',
            width: '100%',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: pos.delay,
          }}
        />
      ))}

      {/* Floating particles */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "linear",
            delay: pos.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;