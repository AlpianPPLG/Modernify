const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$10/month",
      description: "Ideal for individuals starting their journey.",
      features: [
        { text: "Access to basic features", available: true },
        { text: "Email support", available: true },
        { text: "Limited storage", available: false },
        { text: "Access to community forums", available: true },
      ],
      popular: false,
    },
    {
      name: "Pro Plan",
      price: "$20/month",
      description: "Perfect for professionals who need more.",
      features: [
        { text: "Access to all features", available: true },
        { text: "Priority email support", available: true },
        { text: "100GB storage", available: true },
        { text: "Access community forums", available: true },
      ],
      popular: true,
    },
    {
      name: "Premium Plan",
      price: "$30/month",
      description: "Best for businesses that need premium support.",
      features: [
        { text: "Access to all features", available: true },
        { text: "24/7 support", available: true },
        { text: "1TB storage", available: true },
        { text: "Access to community forums", available: true },
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
        <p className="mb-10 text-gray-600">
          Choose a plan that fits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 ${
                plan.popular ? "border-4 border-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-semibold rounded-full px-2">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-gray-600 mb-2">{plan.description}</p>
              <p className="text-xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    {feature.available ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 100 14 7 7 0 000-14zm-1 10L5 10l1.5-1.5L9 11.5l4.5-4.5L15 8l-6 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a7 7 0 100 14 7 7 0 000-14zm-1 10L5 10l1.5-1.5L9 11.5l4.5-4.5L15 8l-6 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        feature.available
                          ? "text-gray-800"
                          : "text-gray-400 line-through"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
