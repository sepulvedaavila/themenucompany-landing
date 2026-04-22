import familyCooking from "@/assets/family-cooking.jpg";
import tableGathering from "@/assets/table-gathering.jpg";

const HowItWorksSection = () => {
  return (
    <>
      {/* Section title */}
      <section className="pt-8 lg:pt-24 pb-4 lg:pb-8 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            ¿Cómo funciona la personalización de tu menú?
          </h2>
        </div>
      </section>

      {/* Section 1: Steps 1-2 with family cooking image */}
      <section className="pb-6 lg:pb-24 px-6 bg-background -mt-px">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <p className="font-arsenal italic text-gray-medium text-base leading-relaxed">
                En The Menu Company, creamos tu menú familiar basándonos en lo que a ti y a tu familia realmente les gusta comer. El proceso es muy simple:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-arsenal font-bold italic text-carbon text-base mb-1">
                    1. Tú nos compartes tus recetas favoritas
                  </h3>
                  <p className="font-arsenal italic text-gray-medium text-base leading-relaxed">
                    Pueden ser recetas de tu familia, de internet, de un libro o de cualquier otro lugar. Si ya sabes qué les encanta, nosotras las incluimos.
                  </p>
                </div>

                <div>
                  <h3 className="font-arsenal font-bold italic text-carbon text-base mb-1">
                    2. Organizamos todo por ti
                  </h3>
                  <p className="font-arsenal italic text-gray-medium text-base leading-relaxed">
                    Nosotras transformamos esas recetas en un menú semanal equilibrado, organizado por días y tiempos de comida. También podemos adaptar por temporada, gustos, alergias o restricciones.
                  </p>
                </div>
              </div>

              <a href="#membresias" className="btn-brand inline-block mt-4">
                CONOCE NUESTROS PLANES
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={familyCooking}
                alt="Madre cocinando con sus hijos"
                className="w-full h-auto object-cover rounded-sm"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Steps 3-4 with table gathering image */}
      <section className="py-6 lg:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={tableGathering}
                alt="Comensales disfrutando comida en una mesa"
                className="w-full h-auto object-cover rounded-sm"
                loading="lazy"
                width={800}
                height={533}
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div>
                <h3 className="font-arsenal font-bold italic text-carbon text-base mb-1">
                  3. Te damos la lista del súper lista para usar
                </h3>
                <p className="font-arsenal italic text-gray-medium text-base leading-relaxed">
                  Calculamos lo que necesitas comprar para esa semana y te lo entregamos ya clasificado por pasillos (sí, como en el súper).
                </p>
              </div>

              <div>
                <h3 className="font-arsenal font-bold italic text-carbon text-base mb-1">
                  4. Tú cocinas (o delegas) con claridad y sin estrés
                </h3>
                <p className="font-arsenal italic text-gray-medium text-base leading-relaxed">
                  Te entregamos instrucciones claras, tiempos de preparación y porciones. Todo para que tú (o quien cocine) sepa qué hacer sin complicaciones.
                </p>
              </div>

              <p className="font-arsenal italic text-gray-medium text-base leading-relaxed">
                ¿Lo mejor? Si algo no te funciona, lo ajustamos. Porque este menú es tuyo, a tu manera.
              </p>

              <a href="#membresias" className="btn-brand inline-block mt-4">
                CONOCE NUESTROS PLANES
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksSection;
