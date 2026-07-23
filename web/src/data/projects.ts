export interface Project {
  title: string;
  description: string;
  href: string;
  external: boolean;
  discord?: string;
}

export const projects: Project[] = [
  {
    title: 'Curso de preparación TAI',
    description:
      'Material de estudio y simulacros para la oposición TAI: bloques temáticos, tests, chuletario y plan de repaso.',
    href: `${import.meta.env.BASE_URL}tai/`,
    external: true,
  },
  {
    title: 'PKWorld (prototipo)',
    description:
      'Prototipo de un fangame MMO-lite de Pokémon, desarrollado como proyecto indie por afición.',
    href: 'https://pkworld-prototipo.surge.sh/',
    external: true,
    discord: 'https://discord.gg/MaKUcqFCQG',
  },
];
