import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Livros" },
    { to: "/diversos", label: "Diversos" },
    { to: "/", label: "Sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-semibold text-foreground">
            MelhoresPrecos
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground px-2 py-3 rounded-md hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
