import { Github, Presentation, Rocket, TrendingUp } from 'lucide-react';
import { ReactNode } from 'react';
import { Reveal } from './Reveal';

const Badge = ({ children }: { children: ReactNode }) => (
  <span className="px-2 py-1 bg-transparent text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300 cursor-default hover:bg-slate-50 dark:hover:bg-slate-800/50">
    {children}
  </span>
);

export function Projects() {
  return (
    <section id="projects" className="px-4 pb-32 bg-white dark:bg-darkbg section-peak relative z-40">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16 flex flex-col items-center text-center">
          <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold mb-2 block">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-5"></div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          <Reveal delay={0.1} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group">
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 transition-transform group-hover:-translate-y-1">
                  <Rocket className="w-6 h-6" />
                </div>
                <a href="https://github.com/touhid0503/The_Space_Window" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Space Window</h3>
              <p className="text-xs text-primary font-mono mb-3">NASA Space Apps Challenge 2025</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                An interactive educational platform bringing hands-on space science to students. Features ISS Cupola imagery, virtual NBL simulations, and NASA Open API integrations.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge>Django / PHP</Badge>
                <Badge>NASA APIs</Badge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group">
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600 dark:text-emerald-400 transition-transform group-hover:-translate-y-1">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <a href="https://github.com/touhid0503/Entrepreneur_Management_and_Promotion_Website" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Entrepreneur Management</h3>
              <p className="text-xs text-primary font-mono mb-3">Software Development Lab 3</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                A unified ecosystem connecting entrepreneurs and investors. Integrates social networking, an e-commerce marketplace, and secure digital wallet payments (SSLCommerz, bKash).
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge>PHP</Badge>
                <Badge>MySQL</Badge>
                <Badge>APIs</Badge>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 group">
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400 transition-transform group-hover:-translate-y-1">
                  <Presentation className="w-6 h-6" />
                </div>
                <a href="https://github.com/touhid0503/Uni-Mentor" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">Uni-Mentor</h3>
              <p className="text-xs text-primary font-mono mb-3">Software Development Lab 2</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                An academic portal bridging the gap between teachers and students. Features online attendance tracking, assignment submissions, automated notifications, and grade viewing.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge>Laravel</Badge>
                <Badge>Selenium</Badge>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

