import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="font-arsenal text-sm text-sage hover:text-primary transition-colors inline-block mb-8"
          >
            ← Volver al inicio
          </Link>
          <h1 className="font-playfair text-3xl md:text-5xl text-primary mb-3">
            {title}
          </h1>
          <p className="font-arsenal italic text-sm text-gray-medium mb-10">
            Última actualización: {lastUpdated}
          </p>
          <div className="prose-legal font-arsenal text-carbon leading-relaxed space-y-6">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
