import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-carbon">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo vertical */}
        <div className="flex flex-col gap-1 font-playfair tracking-[0.2em] text-sage">
          <span className="text-sm">THE</span>
          <span className="text-3xl font-bold">MENU</span>
          <span className="text-sm">COMPANY</span>
        </div>

        {/* Nosotras */}
        <div>
          <h4 className="nav-label text-carbon mb-4">NOSOTRAS</h4>
          <ul className="space-y-2 text-sm text-sage">
            <li><a href="#testimonios" className="hover:text-carbon transition-colors">Testimonios</a></li>
            <li><a href="#blog" className="hover:text-carbon transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="nav-label text-carbon mb-4">LEGAL</h4>
          <ul className="space-y-2 text-sm text-sage">
            <li><Link to="/terminos-y-condiciones" className="hover:text-carbon transition-colors">Términos y Condiciones</Link></li>
            <li><a href="#faqs" className="hover:text-carbon transition-colors">FAQs</a></li>
            <li><Link to="/aviso-de-privacidad" className="hover:text-carbon transition-colors">Aviso de Privacidad</Link></li>
          </ul>
        </div>
      </div>

      {/* Instagram */}
      <div className="max-w-7xl mx-auto px-6 pb-4">
        <a
          href="https://instagram.com/themenucompany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-sage hover:text-carbon transition-colors"
        >
          @themenucompany
        </a>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-gray-medium">
          © {new Date().getFullYear()} The Menu Company. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
