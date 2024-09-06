
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO at Company",
        text: "This is an amazing service! It helped us achieve our goals and improve our business.",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Marketing Director",
        text: "Highly recommend! The team was professional and delivered outstanding results.",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
        id: 3,
        name: "Alice Johnson",
        position: "Freelancer",
        text: "A fantastic experience from start to finish. Will definitely work with them again.",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
        id: 4,
        name: "Robert Brown",
        position: "Product Manager",
        text: "Exceeded my expectations. Excellent service and great communication throughout.",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
        id: 5,
        name: "Emily Davis",
        position: "Project Lead",
        text: "A wonderful experience! The team was incredibly responsive and delivered top-notch work.",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    },
    {
        id: 6,
        name: "Michael Wilson",
        position: "Entrepreneur",
        text: "Absolutely fantastic! They brought our vision to life and exceeded all our expectations.",
        image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    }
];

const Testimonial = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 pb-20 lg:py-28">What My Clients Say</h1>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full border-4 border-gray-200"
                                />
                                <div className="ml-4">
                                    <h2 className="text-xl font-semibold text-gray-900">{testimonial.name}</h2>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
