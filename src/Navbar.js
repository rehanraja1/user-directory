import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className="p-5 bg-gray-800 text-white flex justify-between items-center">
      <h2 className="text-xl font-semibold">User App</h2>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 rounded-md"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
