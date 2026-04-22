import benefit1 from "@/assets/benefit-1.jpg";
import benefit2 from "@/assets/benefit-2.jpg";
import benefit3 from "@/assets/benefit-3.jpg";
import benefit4 from "@/assets/benefit-4.jpg";

const benefits = [
  {
    image: benefit1,
    title: "Comidas equilibradas",
    description: "Menús diseñados con variedad nutricional, adaptados al gusto de cada familia.",
    alt: "Plato de comida casera equilibrada",
  },
  {
    image: benefit2,
    title: "Más tiempo en familia",
    description: "Menos tiempo decidiendo qué cocinar, más tiempo disfrutando juntos en la mesa.",
    alt: "Familia disfrutando una comida juntos",
  },
  {
    image: benefit3,
    title: "Compras inteligentes",
    description: "Listas organizadas que reducen el desperdicio y optimizan tu presupuesto semanal.",
    alt: "Bolsas reutilizables con compras frescas",
  },
  {
    image: benefit4,
    title: "Tranquilidad diaria",
    description: "Olvídate del '¿qué vamos a comer hoy?' — nosotros ya lo pensamos por ti.",
    alt: "Persona trabajando tranquila con comida resuelta",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-8 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-2xl md:text-3xl text-primary mb-4">
            <span className="font-arsenal">¿Por qué es mejor planear</span>
            <br />
            <span className="font-arsenal italic">con The Menu Company?</span>
          </h2>
          <p className="font-arsenal text-sage max-w-2xl leading-relaxed">
            Sabemos que cocinar sin planificación puede convertirse en una fuente diaria de estrés: abrir el refri sin saber qué preparar, repetir lo mismo de siempre, correr al súper de último minuto o terminar pidiendo algo por falta de tiempo e ideas.
          </p>
          <p className="font-arsenal text-sage max-w-2xl leading-relaxed mt-3">
            Con The Menu Company, eso cambia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group">
              <div className="aspect-square overflow-hidden rounded-sm mb-5">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <h3 className="font-arsenal font-bold text-carbon text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="font-arsenal text-sage text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
