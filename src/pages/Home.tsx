import { Link } from 'react-router-dom';
import { Mail, Github, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-6rem)]">
    <div className="max-w-4xl mx-auto px-6 py-12 brand-border-spaced text-center">
      <h1 className="text-4xl font-bold mb-8 text-accent-blue">Hi, Kata here.</h1>
      <div className="space-y-6 max-w-xl mx-auto">
        <p className="text-lg leading-relaxed">
          I'm a full stack software engineer and Linux enthusiast. I love tinkering with systems, and sharing what I learn along the way.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="mailto:kaneda0@protonmail.com" className="button-like inline-flex items-center justify-center w-16 h-16">
            <Mail size={32} />
          </a>
          <a href="https://github.com/k4ta-dev" target="_blank" rel="noopener noreferrer" className="button-like inline-flex items-center justify-center w-16 h-16">
            <Github size={32} />
          </a>
          <a href="https://discord.gg/katanotkate" target="_blank" rel="noopener noreferrer" className="button-like inline-flex items-center justify-center w-16 h-16">
            <MessageCircle size={32} />
          </a>
        </div>
        <div className="mt-4 flex justify-center">
          <Link to="/contact" className="text-sm opacity-100 link-subtle">or... Contact Me</Link>
        </div>
        <div className="mt-12 pt-8 border-t-2 border-border">
          <p className="text-[12px] opacity-75">You've noticed this website has no domain. The lion is working hard to find the proper one.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
