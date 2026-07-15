import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className="fixed w-full z-[100] bg-white/70 dark:bg-darkbg/70 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              Touhidul<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.Dev</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none ring-2 ring-transparent focus:ring-primary"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
