import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactImage from "@/assets/contacto-mesa.jpg";

const Contact = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contacto — The Menu Company";

    const setMeta = (
      attr: "name" | "property",
      key: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setCanonical = (href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const description =
      "Escríbenos y deléganos una preocupación menos de tu plato. Resolvemos tus dudas sobre menús semanales personalizados para tu familia.";
    const url = `${window.location.origin}/contacto`;
    const ogImage = `${window.location.origin}${contactImage}`;

    setMeta("name", "description", description);
    setMeta("property", "og:title", "Contacto — The Menu Company");
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", "Contacto — The Menu Company");
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setCanonical(url);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6 bg-bone">
        <section className="max-w-6xl mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Imagen */}
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-sm shadow-sm">
                <img
                  src={contactImage}
                  alt="Mesa servida con sopa casera, hierbas frescas y mantel de lino, iluminada con luz natural"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={1280}
                  height={1280}
                />
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
                Contáctanos
              </h1>
              <p className="font-arsenal text-base md:text-lg text-carbon mb-8 leading-relaxed">
                ¿Tienes alguna duda?
              </p>
              <p className="font-arsenal text-base md:text-lg text-carbon leading-relaxed">
                Escríbenos a{" "}
                <a
                  href="mailto:contacto@themenucompany.mx"
                  className="font-bold text-primary hover:text-sage transition-colors underline-offset-4 hover:underline"
                >
                  contacto@themenucompany.mx
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
