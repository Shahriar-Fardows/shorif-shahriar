const Services = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 md:mb-0">Our Services</h1>
                    <a
                        href="/cv"
                        className="btn bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 px-6 py-2 rounded-lg"
                    >
                        Download CV
                    </a>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 lg:py-28">
                    {/* Service 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Graphic Design</h2>
                        <p className="text-lg leading-7 mb-4">
                            Crafting visually compelling designs that effectively communicate your brand&apos;s message.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Logo Design</li>
                            <li>Brand Identity</li>
                            <li>Marketing Materials</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">UX/UI Design</h2>
                        <p className="text-lg leading-7 mb-4">
                            Designing intuitive and engaging user experiences that enhance usability and satisfaction.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>User Research</li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Web Design</h2>
                        <p className="text-lg leading-7 mb-4">
                            Creating responsive and visually appealing websites that drive user engagement.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Website Design</li>
                            <li>Landing Pages</li>
                            <li>UI Enhancements</li>
                        </ul>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">WordPress Development</h2>
                        <p className="text-lg leading-7 mb-4">
                            Developing and customizing WordPress sites to meet your specific needs and goals.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Custom Themes</li>
                            <li>Plugin Integration</li>
                            <li>Site Maintenance</li>
                        </ul>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <h2 className="text-2xl font-semibold mb-4">Brand Strategy</h2>
                        <p className="text-lg leading-7 mb-4">
                            Developing strategic brand frameworks that align with your business goals and resonate with your audience.
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Brand Positioning</li>
                            <li>Market Research</li>
                            <li>Competitive Analysis</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
