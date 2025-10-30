export default function Whoami() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div className="brand-border text-center bg-accent-blue text-white">
        <h1 className="text-4xl font-bold mb-2">WHOAMI</h1>
        <p className="text-lg opacity-75">Full Stack Engineer & Linux Enthusiast</p>
      </div>

      {/* About Section */}
      <div className="brand-border">
        <h2 className="text-2xl font-bold mb-4 text-accent-green">[ About ]</h2>
        <p className="leading-relaxed mb-4">
          I'm a full stack software engineer who loves building robust, scalable applications. 
          My passion lies in exploring the intersection of backend systems, DevOps, and clean architecture.
        </p>
        <p className="leading-relaxed">
          When I'm not coding, you'll find me deep in Linux configurations, optimizing workflows, 
          or contributing to open-source projects.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="brand-border">
        <h2 className="text-2xl font-bold mb-4 text-accent-green">[ Tech Stack ]</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2 text-accent-blue">Languages</h3>
            <ul className="list-disc list-inside space-y-1 opacity-90">
              <li>TypeScript</li>
              <li>Python</li>
              <li>Solidity</li>
              <li>Golang (Learning)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-accent-blue">Full Stack Libs</h3>
            <ul className="list-disc list-inside space-y-1 opacity-90">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Vite / Modern Tooling</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-accent-blue">DevOps & Tools</h3>
            <ul className="list-disc list-inside space-y-1 opacity-90">
              <li>Linux (Arch or Deb based)</li>
              <li>Docker</li>
              <li>Git</li>
              <li>AWS/Azure</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-accent-blue">Currently Learning</h3>
            <ul className="list-disc list-inside space-y-1 opacity-90">
              <li>Rust</li>
              <li>Golang</li>
              <li>C/C++</li>
              <li>System Design & Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects/Experience Section */}
      <div className="brand-border">
        <h2 className="text-2xl font-bold mb-4 text-accent-green">[ What I Build ]</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-accent-blue">Web Applications</h3>
            <p className="opacity-90">Full-stack applications with modern frameworks, focusing on performance and user experience.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-accent-blue">Backend Systems</h3>
            <p className="opacity-90">Scalable APIs, microservices, and database architectures for complex business logic.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-accent-blue">Blockchain & Smart Contracts</h3>
            <p className="opacity-90">Solidity, Ethereum, and other blockchain technologies.</p>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center">
        <p className="text-sm opacity-75">Want to work together? Check out the contact page.</p>
      </div>
    </div>
  );
}
