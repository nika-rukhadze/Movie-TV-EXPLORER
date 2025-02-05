import React from 'react';
import { useEffect } from 'react';
import './i18n';



const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

export const App: React.FC = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div>
      <button onClick={() => {
        toggleDarkMode();
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      }}>
        Toggle Dark/Light Mode
      </button>
      {/* Rest of your components */}
    </div>
  );
};
