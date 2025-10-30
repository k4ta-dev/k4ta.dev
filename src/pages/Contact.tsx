import { useState } from 'react';

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
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
      <div className="brand-border">
        <h1 className="text-3xl font-bold mb-6 text-accent-blue">[ Contact Me ]</h1>
        <p className="mb-6 opacity-90">
          Have a question or want to work together? Drop me a message below.
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
