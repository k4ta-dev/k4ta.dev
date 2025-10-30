import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full max-w-[980px] mx-auto mt-5 flex items-center justify-center px-6 py-3 bg-foreground border-b-2 brand-border">
      <div className="flex gap-4 text-sm">
        <Link to="/home" className="button-like">
          [ Home ]
        </Link>

        <Link to="/whoami" className="button-like">
          [ WHOAMI ]
        </Link>

        <Link to="/contact" className="button-like">
          [ Contact ]
        </Link>

        <Link to="/blog" className="button-like">
          [ Blog ]
        </Link>

      </div>
    </nav>
  );
}
