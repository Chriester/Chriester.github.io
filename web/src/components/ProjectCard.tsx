import { useState } from 'react';
import type { Project } from '../data/projects';

export default function ProjectCard({ title, description, href, external, discord }: Project) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className="reveal perspective h-64 cursor-pointer"
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
        <div className="absolute inset-0 backface-hidden bg-dark-light rounded-lg shadow-lg border border-line flex flex-col items-center justify-center gap-2 p-6 text-center hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-accent">{title}</h3>
          <p className="text-sm text-muted">Click for more!</p>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-x-180 bg-dark-light rounded-lg shadow-lg border border-line flex flex-col justify-between gap-3 p-6 text-left">
          <p className="text-sm text-text">{description}</p>
          <div className="flex gap-2">
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Ver proyecto
            </a>
            {discord && (
              <a
                href={discord}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Discord del proyecto"
                title="Discord del proyecto"
                className="inline-flex items-center justify-center bg-[#5865F2] hover:bg-[#4752c4] text-white px-3 py-2 rounded-lg transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.211.375-.444.879-.608 1.278a18.27 18.27 0 0 0-5.487 0A12.64 12.64 0 0 0 9.282 3a19.74 19.74 0 0 0-4.435 1.37C1.804 8.61.98 12.73 1.377 16.79a19.9 19.9 0 0 0 5.993 3.03c.483-.66.913-1.36 1.284-2.095a12.9 12.9 0 0 1-2.023-.973c.17-.124.336-.253.497-.386 3.9 1.804 8.126 1.804 11.98 0 .163.133.329.262.497.386-.645.386-1.323.71-2.025.974.371.734.8 1.435 1.284 2.095a19.86 19.86 0 0 0 6-3.03c.5-4.71-.735-8.79-3.544-12.42ZM8.68 14.36c-1.17 0-2.13-1.083-2.13-2.41 0-1.328.938-2.41 2.13-2.41 1.204 0 2.152 1.094 2.13 2.41 0 1.327-.938 2.41-2.13 2.41Zm6.64 0c-1.17 0-2.13-1.083-2.13-2.41 0-1.328.938-2.41 2.13-2.41 1.204 0 2.153 1.094 2.13 2.41 0 1.327-.926 2.41-2.13 2.41Z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
