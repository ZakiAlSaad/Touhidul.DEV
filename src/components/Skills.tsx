import { Brain, Laptop, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Reveal } from './Reveal';

const Badge = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => (
  <motion.span 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay, ease: [0.5, 0, 0, 1] }}
    className="px-4 py-2 bg-transparent text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-default hover:bg-slate-50 dark:hover:bg-slate-800/50"
  >
    {children}
  </motion.span>
);

export function Skills() {
  return (
    <section id="skills" className="px-4 pb-32 bg-white dark:bg-darkbg section-chevron relative z-20">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold mb-2 block">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-5"></div>
        </Reveal>
        
        <div className="space-y-12">
          <Reveal delay={0.1} className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-primary group-hover:text-primary transition-colors">
                <Server className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">Backend & Core Programming</h3>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-3 pl-14">
              <Badge delay={0.1}>Python</Badge>
              <Badge delay={0.15}>Django</Badge>
              <Badge delay={0.2}>PHP</Badge>
              <Badge delay={0.25}>C++</Badge>
              <Badge delay={0.3}>Java</Badge>
              <Badge delay={0.35}>MySQL</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-primary group-hover:text-primary transition-colors">
                <Brain className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">Artificial Intelligence</h3>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-3 pl-14">
              <Badge delay={0.2}>Prompt Engineering</Badge>
              <Badge delay={0.25}>Machine Learning</Badge>
              <Badge delay={0.3}>Deep Learning</Badge>
              <Badge delay={0.35}>AgentX</Badge>
              <Badge delay={0.4}>Data Analysis</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="group">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 group-hover:border-primary group-hover:text-primary transition-colors">
                <Laptop className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight">Frontend & Strategy</h3>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-3 pl-14">
              <Badge delay={0.3}>JavaScript</Badge>
              <Badge delay={0.35}>HTML5 / CSS3</Badge>
              <Badge delay={0.4}>Digital Marketing</Badge>
              <Badge delay={0.45}>Git / GitHub</Badge>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
