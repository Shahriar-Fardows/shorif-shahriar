
const ContactUs = () => {
    return (
        <section className="bg-gray-50 py-16 ">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Us</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium mb-2">Email Address</h3>
                            <p className="text-gray-700">info@example.com</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium mb-2">Phone Number</h3>
                            <p className="text-gray-700">+1 234 567 890</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium mb-2">Address</h3>
                            <p className="text-gray-700">123 Main Street, City, Country</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                        <form action="#" method="POST">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
