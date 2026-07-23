import { useState } from 'react';

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="section py-20 bg-dark-light text-accent px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>

        <div className="reveal flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-mauve flex items-center justify-center text-4xl shadow-lg">
            🧑‍💻
          </div>
        </div>

        <div className="reveal flex justify-center">
          <button
            type="button"
            className="perspective w-full max-w-md h-80 cursor-pointer"
            onClick={() => setFlipped((f) => !f)}
            aria-label="Flip about card"
          >
            <div
              className={`relative w-full h-full duration-700 preserve-3d ${
                flipped ? 'rotate-x-180' : ''
              }`}
            >
              <div className="absolute inset-0 backface-hidden bg-dark rounded-lg shadow-2xl border border-line flex flex-col items-center justify-center gap-4 p-6">
                <p className="text-xl font-semibold">Hi there! I'm Chris</p>
                <p className="text-sm text-muted">Click for more!</p>
              </div>

              <div className="absolute inset-0 backface-hidden rotate-x-180 bg-dark rounded-lg shadow-2xl border border-line flex flex-col justify-center gap-4 p-6 text-left overflow-y-auto">
                <h3 className="text-xl font-semibold mb-2">More About Me</h3>
                <p className="text-sm text-text">
                  Right now I'm an opositor, studying for a public-sector IT role (TAI). Alongside
                  that, I'm an indie developer as a hobby, building small games and web projects
                  just for the love of it.
                </p>
                <p className="text-sm text-text">
                  When I'm not studying or coding, I enjoy exploring new technologies, reading
                  books, and tinkering with my own game projects.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
