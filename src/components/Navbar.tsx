
export default function Navbar() {
  return (
    <nav className="w-full max-w-[980px] mx-auto mt-5 flex items-center justify-center px-6 py-3 bg-foreground border-b-2 brand-border">
      <div className="flex gap-4 text-sm">
        <a href="/home" className="button-like">
          [ Home ]
        </a>

        <a href="/whoami" className="button-like">
          [ WHOAMI ]
        </a>

        <a href="/contact" className="button-like">
          [ Contact ]
        </a>

        <a href="/blog" className="button-like">
          [ Blog ]
        </a>

      </div>
    </nav>
  );
}
