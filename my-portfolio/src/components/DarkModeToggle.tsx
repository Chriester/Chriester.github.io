import React, { useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-slate-500 dark:bg-gray-800 transition-all duration-300"
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
