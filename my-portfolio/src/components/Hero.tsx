import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-dark text-text p-4">
      {/* Contenedor principal */}
      <div className="text-center w-full max-w-4xl">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6">
          <AnimatedSection duration={2} animationType="slide" ease="easeOut">
            Hi there! I'm 
          </AnimatedSection>
           {/* Salto de línea para móviles */}
          <AnimatedSection duration={1.5} animationType="slide" ease="easeIn">
           <span className="text-accent">Chris</span>
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