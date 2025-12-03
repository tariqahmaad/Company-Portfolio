import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedArrowProps {
  onClick?: () => void;
  ariaLabel?: string;
}

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ onClick, ariaLabel }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 cursor-pointer"
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Scroll Down Text */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-white/80 text-sm font-medium tracking-wider uppercase"
      >
        Scroll Down
      </motion.div>

      {/* Main Arrow Container */}
      <motion.button
        onClick={onClick}
        className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-primary/20 hover:border-primary transition-all cursor-pointer group shadow-lg shadow-black/20"
        aria-label={ariaLabel}
        whileHover={{ scale: 1.15, borderColor: '#195de6' }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Outer pulsing ring 1 */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/60"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Outer pulsing ring 2 */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/40"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.3,
          }}
        />
        
        {/* Arrow SVG - Larger and bolder */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white group-hover:text-primary transition-colors relative z-10"
        >
          <motion.path
            d="M12 4L12 20M12 20L18 14M12 20L6 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 0.3 },
            }}
          />
        </svg>
        
        {/* Animated dots trail - More visible */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
            style={{ top: '25%', left: '50%', x: '-50%' }}
            animate={{
              y: [0, 25, 50],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.button>

      {/* Bottom indicator line */}
      <motion.div
        className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default AnimatedArrow;
