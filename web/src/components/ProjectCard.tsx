import { useState } from 'react';
import type { Project } from '../data/projects';

export default function ProjectCard({ title, description, href, external }: Project) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className="perspective h-64 cursor-pointer"
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      aria-label={`Flip ${title} card`}
    >
      <div
        className={`relative w-full h-full duration-700 preserve-3d ${
          flipped ? 'rotate-x-180' : ''
        }`}
      >
        <div className="absolute inset-0 backface-hidden bg-dark-light rounded-lg shadow-lg border border-gray-600 flex flex-col items-center justify-center gap-2 p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-accent">{title}</h3>
          <p className="text-sm text-gray-400">Click for more!</p>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-x-180 bg-dark-light rounded-lg shadow-lg border border-gray-600 flex flex-col justify-between gap-3 p-6 text-left">
          <p className="text-sm text-text">{description}</p>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            onClick={(e) => e.stopPropagation()}
            className="inline-block text-center bg-blue-500 hover:bg-blue-600 text-accent font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
}
