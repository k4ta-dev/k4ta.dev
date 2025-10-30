import { Mail, Github, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 brand-border-spaced text-center">
      <h1 className="text-4xl font-bold mb-8 text-accent-blue">Hi, Kata here.</h1>
      <div className="space-y-6 max-w-2xl mx-auto">
        <p className="text-lg leading-relaxed">
          I'm a "full" stack software engineer and Linux enthusiast. I love tinkering with systems, and sharing what I learn along the way.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="mailto:contact@k4ta.dev" className="button-like inline-flex items-center justify-center w-16 h-16">
            <Mail size={32} />
          </a>
          <a href="https://github.com/k4ta" target="_blank" rel="noopener noreferrer" className="button-like inline-flex items-center justify-center w-16 h-16">
            <Github size={32} />
          </a>
          <a href="https://discord.gg/k4ta" target="_blank" rel="noopener noreferrer" className="button-like inline-flex items-center justify-center w-16 h-16">
            <MessageCircle size={32} />
          </a>
        </div>
        <div className="mt-12 pt-8 border-t-2 border-border">
          <p className="text-sm opacity-75">More coming soon...</p>
        </div>
      </div>
    </div>
  );
}
