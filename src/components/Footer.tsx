import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Reveal } from './Reveal';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-black text-slate-300 px-4 pb-16 section-slant relative z-50">
      <Reveal className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Let's Build Something Together</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
        
        <div className="flex justify-center gap-6 mb-10">
            <a href="mailto:touhid0503@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 border border-slate-700">
                <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/touhid0503/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 border border-slate-700">
                <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/touhid0503" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 border border-slate-700">
                <Github className="w-6 h-6" />
            </a>
            <a href="tel:+8801840760926" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 border border-slate-700">
                <Phone className="w-6 h-6" />
            </a>
        </div>
        <p className="text-sm text-slate-500 font-mono">
          &copy; {new Date().getFullYear()} Md. Touhidul Islam. All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
}
