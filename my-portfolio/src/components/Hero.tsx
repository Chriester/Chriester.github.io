import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = 170;

    // Inicializa las estrellas
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2,
        speed: Math.random() * 3.5 + 1.2,
      });
    }

    // Ajusta el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animación de las estrellas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Limpia el evento de resize al desmontar el componente
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      {/* Fondo de estrellas */}
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>

      {/* Contenido principal */}
      <div className="relative z-10 text-center w-full max-w-4xl">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6">
          <AnimatedSection duration={2} animationType="slide" ease="easeOut">
            Hi there! I'm
          </AnimatedSection>
          <AnimatedSection duration={1.5} animationType="slide" ease="easeIn">
            <span className="text-accent"> Chris</span>
          </AnimatedSection>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-3xl text-text mb-8">
          <AnimatedSection animationType="waves" duration={0.9} ease="easeOut">
            Welcome to my portfolio!
          </AnimatedSection>
        </p>

        {/* Botón */}
        <button className="bg-slate-700 text-accent px-8 py-4 rounded-lg text-lg md:text-xl hover:bg-slate-600 transition-transform transform hover:scale-105">
          Contact Me
        </button>
      </div>
    </section>
  );
}