import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="px-4 pb-32 bg-slate-50 dark:bg-darkalt section-slant relative z-10">
      <Reveal className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold mb-2 block">Discover</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-5"></div>
        </div>

        <div className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm p-8 md:p-10 rounded-2xl transition-all">
          <p className="text-slate-700 dark:text-slate-300 leading-loose text-lg">
            I am a passionate Computer Science student at Varendra University with a strong foundation in building scalable software. 
            My technical expertise is anchored in backend development using <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Python (Django)</span> and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">PHP</span>. 
            Beyond traditional development, I am deeply invested in the AI landscape, particularly in <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Prompt Engineering</span> and building AI-driven operational tools to optimize modern workflows.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
