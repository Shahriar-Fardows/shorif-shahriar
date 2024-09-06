
const pricingPlans = [
    {
        id: 1,
        name: "Basic Plan",
        price: "$49",
        features: [
            "1 Website",
            "Basic Design",
            "1 Month Support",
            "Email Support"
        ],
        popular: false
    },
    {
        id: 2,
        name: "Standard Plan",
        price: "$99",
        features: [
            "3 Websites",
            "Advanced Design",
            "3 Months Support",
            "Priority Support"
        ],
        popular: true
    },
    {
        id: 3,
        name: "Premium Plan",
        price: "$199",
        features: [
            "Unlimited Websites",
            "Custom Design",
            "12 Months Support",
            "24/7 Support"
        ],
        popular: false
    }
];

const Pricing = () => {
    return (
        <section className="bg-gray-50 py-16 pb-20 lg:py-28">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">My Pricing Plans</h1>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div key={plan.id} className={`bg-white p-6 rounded-lg shadow-lg ${plan.popular ? 'border-4 border-blue-500' : ''}`}>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h2>
                            <p className="text-4xl font-bold text-gray-900 mb-4">{plan.price}</p>
                            <ul className="list-disc pl-5 mb-4 text-gray-700">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                          
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
