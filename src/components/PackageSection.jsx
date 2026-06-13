const plans = [
  {
    name: "Starter",
    price: 0,
    desc: "Perfect for casual users",
    features: [
      "Browse and book rooms",
      "Basic search filters",
      "Limited bookings per month",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: 17,
    desc: "Best for regular users",
    features: [
      "Unlimited bookings",
      "Advanced filters",
      "Priority booking access",
      "Booking history analytics",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: 99,
    desc: "For power users & admins",
    features: [
      "All Growth features",
      "Room hosting access",
      "Revenue insights dashboard",
      "Priority customer support",
    ],
    highlight: false,
  },
];

export default function PackageSection() {
  const yearly = false;

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-fuchsia-500 uppercase text-sm tracking-widest">
          Best Packages
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Choose the plan that fits your needs
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 text-left transition hover:scale-[1.02] ${
                plan.highlight
                  ? "border-fuchsia-500 bg-white/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <p className="text-sm text-gray-400 mt-1">{plan.desc}</p>

              <div className="mt-4 text-3xl font-bold">
                ${yearly ? plan.price * 10 : plan.price}
                <span className="text-sm text-gray-400">/month</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-fuchsia-500">+</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
