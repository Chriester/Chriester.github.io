import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  duration?: number; // Duración de la animación
  animationType?: "fade" | "slide" | "waves"; // Tipo de animación
  ease?: "easeIn" | "easeOut" | "easeInOut" | "linear"; // Tipo de transición
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  duration = 1.5, // Valor por defecto
  animationType = "fade", // Valor por defecto
  ease = "easeInOut", // Valor por defecto
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Configuración de animaciones según el tipo
  const animations = {
    fade: { opacity: inView ? 1 : 0 },
    slide: { opacity: inView ? 1 : 0, y: inView ? 0 : 50 },
  };

  // Configuración para el efecto waves
  const waveAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Retraso escalonado para cada letra
        duration,
        ease,
      },
    }),
  };

  // Renderizado para el efecto waves
  if (animationType === "waves" && typeof children === "string") {
    return (
      <div ref={ref} className="inline-block">
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={waveAnimation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char} {/* Espacios no rompibles */}
          </motion.span>
        ))}
      </div>
    );
  }

  // Renderizado para otros tipos de animaciones
  return (
    <motion.div
      ref={ref}
      initial={animationType === "fade" ? { opacity: 0 } : { opacity: 0, y: 50 }}
      animate={animations[animationType]}
      transition={{ duration, ease }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
