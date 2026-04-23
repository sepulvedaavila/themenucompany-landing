import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-themenuco.png";

const navLinks = [
  { label: "Sobre Nosotras", href: "/sobre-nosotras" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQs", href: "#faqs" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" aria-label="The Menu Co. - Inicio" className="flex items-center">
          <img src={logo} alt="The Menu Co." className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-8 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-label text-carbon hover:text-primary transition-colors text-[10px] lg:text-sm text-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:block btn-brand text-[9px] lg:text-xs py-1.5 px-3 lg:px-6">
          INICIAR SESIÓN
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-carbon"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-label text-carbon hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-brand text-xs py-2 px-6 mt-2 w-fit">
            INICIAR SESIÓN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
