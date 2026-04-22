import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/sobre-nosotras-hero.jpg";
import origenImg from "@/assets/sobre-nosotras-origen.jpg";
import cocinaImg from "@/assets/sobre-nosotras-cocina.jpg";

const SobreNosotras = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Sobre Nosotras — The Menu Company";

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
      "Conoce la historia detrás de The Menu Company. Nos encargamos del menú para que tú te encargues de lo que más importa.";
    const url = `${window.location.origin}/sobre-nosotras`;
    const ogImage = `${window.location.origin}${origenImg}`;

    setMeta("name", "description", description);
    setMeta("property", "og:title", "Sobre Nosotras — The Menu Company");
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", "Sobre Nosotras — The Menu Company");
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setCanonical(url);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Section 1 — Hero */}
        <section
          className="relative text-white px-6 py-20 md:py-24 lg:py-32 bg-[length:100%_auto] bg-[position:50%_30%] md:bg-cover md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-deep-green/55" aria-hidden="true" />
          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="font-playfair font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Nos encargamos del menú.
              <br />
              Tú te encargas de lo que más importa.
            </h1>
          </div>
        </section>

        {/* Section 2 — Origen */}
        <section className="bg-white px-6 py-8 md:py-12 lg:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={origenImg}
                  alt="Ilustración editorial de una mujer planeando el menú semanal en su cocina"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={1280}
                  height={1280}
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-1">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-carbon mb-6">
                Cómo nació The Menu Company
              </h2>
              <div className="font-arsenal text-base md:text-lg text-carbon leading-relaxed space-y-5">
                <p>Soy Fer, fundadora de The Menu Company.</p>
                <p>
                  Todo empezó un fin de semana como cualquier otro: yo, sentada
                  a revisar qué habíamos comido las últimas semanas, buscar
                  ideas, armar el menú de toda la semana y la lista del súper
                  para después ir a hacer todo el súper. Cuatro horas. Cada
                  semana. Sin falta. Y me chocaba.
                </p>
                <p>
                  Cuando renuncié a mi trabajo para recibir a mi segunda bebé,
                  decidí que esas primeras semanas iban a ser para estar
                  presente con mi familia y no quería perder tiempo en
                  planeación de comidas. Durante casi un mes organicé diez
                  semanas de menús: todo planeado, todo en lista, todo listo
                  para que en casa supieran qué comprar y qué preparar sin que
                  yo tuviera que estar presente. Fue la inversión de tiempo más
                  inteligente que hice ese año.
                </p>
                <p>
                  Funcionó tan bien que quise repetir el mismo menú nuevamente.
                  Pero con el tiempo descubrí que un menú fijo no es suficiente
                  — en verano no se antoja el caldo, y tampoco el ceviche en
                  invierno. La vida necesita flexibilidad, no solo estructura.
                </p>
                <p>
                  Así nació The Menu Company: un sistema que combina las dos
                  cosas. Tus recetas, tus gustos, tu casa — organizados de
                  forma inteligente y adaptable, semana a semana.
                </p>
                <p>
                  Las mamás tenemos que preocuparnos por muchas cosas. La
                  planeación de la comida familiar no tiene que ser una de
                  ellas. En The Menu Company nos encargamos de eso por ti —
                  para que tu energía vaya a donde más importa.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/#membresias"
                  className="btn-brand inline-block w-full sm:w-auto text-center"
                >
                  Conoce nuestros planes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Qué hacemos */}
        <section className="bg-white px-6 py-8 md:py-12 lg:py-20">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-carbon mb-6">
              Lo que hacemos por ti
            </h2>
            <div className="font-arsenal text-base md:text-lg text-carbon leading-relaxed space-y-5">
              <p>No te mandamos un menú genérico.</p>
              <p>
                Organizamos tus recetas — las de tu familia, las que guardaste
                en Instagram, las que ya saben hacer en tu casa — y las
                convertimos en una semana con estructura: menú confirmado,
                lista del súper organizada por categoría y recetario listo para
                cocinar.
              </p>
              <p>Cada semana, sin decisiones de más.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Para quién es */}
        <section className="bg-sage text-white px-6 py-8 md:py-12 lg:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="order-1">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={cocinaImg}
                  alt="Ilustración editorial de una cocina cálida y organizada con planeación de comidas"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={1280}
                  height={1280}
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-2">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-white mb-6">
                ¿Esto es para ti?
              </h2>
              <div className="font-arsenal text-base md:text-lg text-white leading-relaxed space-y-5">
                <p>
                  Si eres de las que saben que el tiempo es su recurso más
                  valioso, esto es para ti.
                </p>
                <p>
                  Para la que quiere que su familia coma bien y rico, pero no
                  quiere que eso le consuma la semana. Para la que tiene metas,
                  compromisos y una vida que atender — y sabe que una semana
                  organizada cambia el ritmo de todo lo demás. Para la que no
                  necesita hacer más, sino preocuparse por menos.
                </p>
                <p>
                  Aquí no tienes que cambiar cómo comes ni lo que le gusta a tu
                  familia. Solo dejas de resolverlo sola, cada vez, desde cero.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/#membresias"
                  className="inline-block w-full sm:w-auto text-center bg-white text-deep-green uppercase tracking-[0.15em] font-arsenal font-bold px-8 py-3 rounded-sm transition-all duration-300 hover:opacity-90 text-sm"
                >
                  Empieza aquí
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNosotras;
