import { useState } from 'react';
import { Mail, Github, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Form submitted:', { email, message });
    alert('Message sent! (Not really, this is a placeholder)');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6 h-[calc(100vh-6rem)] flex justify-center items-center">
      <div className="brand-border">
        <h1 className="text-3xl font-bold mb-6 text-accent-blue">[ Contact Me ]</h1>
        
        {/* Social Links Section */}
        <div className="mb-8 p-4 bg-accent-blue text-white">
          <p className="mb-4 text-center font-bold">
            Use proper channels before resorting to below form, i'm paying for API, SMTP is blocked :D
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:kaneda0@protonmail.com" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/k4ta-dev" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://discord.gg/katanotkate" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              <span>Discord</span>
            </a>
          </div>
        </div>

        <p className="mb-6 opacity-90">
          Or if you insist, use the form below:
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-foreground border-2 border-border focus:outline-none focus:border-accent-blue"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message here..."
              required
              rows={8}
              className="w-full px-4 py-3 bg-foreground border-2 border-border focus:outline-none focus:border-accent-blue resize-none"
            />
          </div>

          <button
            type="submit"
            className="button-like w-full md:w-auto px-8 py-3"
          >
            [ Send Message ]
          </button>
        </form>
      </div>
    </div>
  );
}
