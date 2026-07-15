import { Briefcase, GraduationCap } from 'lucide-react';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="px-4 pb-32 bg-slate-50 dark:bg-darkalt section-slant-reverse relative z-30">
      <Reveal className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-mono text-sm tracking-widest uppercase font-semibold mb-2 block">Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-5"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" /> Professional Journey
            </h3>
            <div className="border-l-2 border-slate-300 dark:border-slate-700 ml-3 pl-8 relative space-y-10">
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-darkalt shadow-sm bg-primary"></div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Senior Operational Officer</h4>
                <h5 className="text-sm font-medium text-primary mb-1">Craftly • Remote</h5>
                <p className="text-xs text-slate-500 font-mono mb-2">Jun 2026 – Present</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Contributing to AI-driven operations and software development projects.</p>
                
                <div className="mt-4 pl-4 border-l border-slate-300 dark:border-slate-700 space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Junior Operational Officer</h5>
                    <p className="text-xs text-slate-500 font-mono">Apr 2026 – Jun 2026</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Focus on ML, deep learning, and software solutions.</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Engineer</h5>
                    <p className="text-xs text-slate-500 font-mono">Apr 2026 – May 2026</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-darkalt shadow-sm bg-secondary"></div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Technology Intern</h4>
                <h5 className="text-sm font-medium text-secondary mb-1">Ukil • Remote</h5>
                <p className="text-xs text-slate-500 font-mono mb-2">Feb 2026 – Present</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Focused on technical learning, collaboration, and practical skill development in Web Development.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-darkalt shadow-sm bg-blue-500"></div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Campus Hero</h4>
                <h5 className="text-sm font-medium text-blue-500 mb-1">Programming Hero</h5>
                <p className="text-xs text-slate-500 font-mono mb-2">Feb 2026 – Present</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Representing on campus by promoting tech learning, organizing events, and engaging students.</p>
              </div>

            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" /> Education & Leadership
            </h3>
            <div className="border-l-2 border-slate-300 dark:border-slate-700 ml-3 pl-8 relative space-y-10">
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-darkalt shadow-sm bg-emerald-500"></div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">B.Sc. in Computer Science & Engineering</h4>
                <h5 className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-1">Varendra University, Rajshahi</h5>
                <p className="text-xs text-slate-500 font-mono mb-2">June 2022 – Present</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-darkalt shadow-sm bg-slate-400"></div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">General Member</h4>
                <h5 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">CSE Sports Club, VU</h5>
                <p className="text-xs text-slate-500 font-mono mb-2">May 2025 – May 2026</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-darkalt shadow-sm bg-orange-400"></div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">Campus Ambassador & General Member</h4>
                <h5 className="text-sm font-medium text-orange-500 mb-1">Youth Club of Bangladesh (YCB)</h5>
                <p className="text-xs text-slate-500 font-mono mb-2">May 2025 – Apr 2026</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Community projects & digital literacy campaigns.</p>
              </div>

            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
