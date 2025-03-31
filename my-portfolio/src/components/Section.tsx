import React from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string; // Identificador único para la sección
  children: React.ReactNode; // Contenido de la sección
  className?: string; // Clases adicionales para estilos
  onInView?: () => void; // Callback cuando la sección entra en la vista
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Detecta cuando el 50% de la sección está visible
  });

  React.useEffect(() => {
    if (inView && onInView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;