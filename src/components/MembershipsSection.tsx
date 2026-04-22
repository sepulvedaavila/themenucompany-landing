import membershipsBg from "@/assets/memberships-bg.jpg";

const plans = [
  {
    name: "Plan Mensual",
    price: "$399",
    unit: "MXN / mes",
    highlight: false,
  },
  {
    name: "Plan Trimestral",
    price: "$359",
    unit: "MXN / mes",
    highlight: true,
  },
  {
    name: "Plan Anual",
    price: "$299",
    unit: "MXN / mes",
    highlight: false,
  },
];

const MembershipsSection = () => {
  return (
    <section
      id="membresias"
      className="relative py-24 px-6"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${membershipsBg})` }}
      >
        <div className="absolute inset-0 bg-carbon/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl text-primary-foreground text-center mb-16">
          Nuestras Membresías
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-sm p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 ${
                plan.highlight ? "ring-2 ring-deep-green" : ""
              }`}
            >
              <h3 className="nav-label text-carbon text-sm mb-6">{plan.name}</h3>
              <div className="mb-1">
                <span className="font-playfair text-4xl text-primary font-bold">
                  {plan.price}
                </span>
              </div>
              <span className="text-gray-medium text-sm mb-1">{plan.unit}</span>

              <button className="btn-brand w-full mt-8 mb-4">SUSCRÍBETE</button>
              <p className="text-gray-medium text-xs leading-relaxed">
                Se renueva automáticamente. Lo puedes cancelar en cualquier momento.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipsSection;
