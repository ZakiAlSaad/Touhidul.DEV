import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Reveal } from './Reveal';
import { Typewriter } from './Typewriter';

export function Hero() {
  return (
    <header className="relative pt-40 pb-32 px-4 overflow-hidden flex items-center min-h-[90vh] bg-white dark:bg-darkbg z-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-primary/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-secondary/20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-100/50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            Available for Hire
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-blue-500">Md. Touhidul Islam</span>
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300 h-10 flex items-center justify-center gap-2">
            <Typewriter strings={['Web Developer', 'Graphic Designer', 'Open Source Enthusiast', 'PC Hardware Enthusiast', 'AI / ML / VR Engineer', 'Freelancer', 'UI/UX Designer', 'Tech Explorer', 'Custom PC Builder', 'Content Creator', 'System Admin', 'Python Coder', 'Creative Thinker', 'Problem Solver', 'Tech Blogger', 'Software Engineer', 'Future Innovator']} typeSpeed={120} backSpeed={60} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A Developer specializing in <span className="font-semibold text-slate-800 dark:text-slate-200">Python</span>, <span className="font-semibold text-slate-800 dark:text-slate-200">Django</span>, and <span className="font-semibold text-slate-800 dark:text-slate-200">AI</span>. Turning complex problems into elegant digital solutions.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#contact" className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center">
              Contact Me <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="https://github.com/touhid0503" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl font-semibold transition-all flex items-center gap-2 hover:-translate-y-0.5 backdrop-blur-sm">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/touhid0503/" target="_blank" rel="noreferrer" className="px-8 py-3.5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 rounded-xl font-semibold transition-all flex items-center gap-2 hover:-translate-y-0.5 backdrop-blur-sm">
              <Linkedin className="w-5 h-5 text-[#0A66C2] dark:text-blue-400" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
