import herbsHero from "@/assets/herbs-hero.jpg";

const HeroSection = () => {
  return (
    <section className="mx-[1cm] mt-4">
      <div className="relative min-h-[80vh] flex items-start justify-center overflow-hidden">
        {/* Background image - mobile only: zoomed top; desktop/tablet: original full */}
        <div
          className="absolute inset-0 bg-[length:250%_auto] bg-[position:50%_0%] md:bg-cover md:bg-top bg-no-repeat bg-secondary"
          style={{ backgroundImage: `url(${herbsHero})` }}
        />

        {/* Text content positioned in upper area over the gray background */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-12 md:pt-32">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-carbon leading-tight mb-6">
            Tu menú familiar, como a ti te gusta
          </h1>
          <p className="font-arsenal text-lg md:text-xl text-gray-medium italic mb-10">
            Deléganos una preocupación menos de tu plato.
          </p>
          <a href="#membresias" className="btn-brand inline-block">
            CONOCE NUESTROS PLANES
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
