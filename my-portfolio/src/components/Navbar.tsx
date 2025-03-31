import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';

type NavbarProps = {
  activeSection: number;
  handleNavigation: (direction: "up" | "down" | number) => void;
};

export default function Navbar({ activeSection, handleNavigation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if(window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (index: number) => {
    setIsOpen(false);
    handleNavigation(index);
  };

  const NavLink = ({ index, children }: { index: number; children: React.ReactNode }) => (
    <button
      onClick={() => handleNavClick(index)}
      className={`${
        activeSection === index 
        ? 'bg-gray-700 text-white' 
        : 'text-text hover:bg-gray-500'
      } px-4 py-2 rounded-lg transition-all whitespace-nowrap`}
    >
      {children}
    </button>
  );

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-dark text-text border-b border-dark-light shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation(0)}
              className="text-2xl font-bold hover:text-blue-600 transition-colors"
            >
              Portfolio
            </button>

            {/* Menú desktop */}
            <div className="hidden md:flex items-center gap-4">
              {sections.map((_, index) => (
                <NavLink key={index} index={index}>
                  {index === 0 ? 'Home' : 
                   index === 1 ? 'About' :
                   index === 2 ? 'Skills' :
                   index === 3 ? 'Projects' : 'Contact'}
                </NavLink>
              ))}
              <DarkModeToggle />
            </div>

            {/* Botón móvil */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMobile && (
          <div className={`md:hidden absolute top-full left-0 w-full bg-dark border-t border-dark-light transition-all overflow-hidden ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}>
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col items-center gap-3">
                {sections.map((_, index) => (
                  <NavLink key={index} index={index}>
                    {index === 0 ? 'Home' : 
                     index === 1 ? 'About' :
                     index === 2 ? 'Skills' :
                     index === 3 ? 'Projects' : 'Contact'}
                  </NavLink>
                ))}
                <div className="mt-2">
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-20"></div>
    </>
  );
}