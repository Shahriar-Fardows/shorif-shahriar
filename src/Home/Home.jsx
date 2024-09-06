import profileImg from '../assets/profile-pic.png';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import { workItem } from '../../public/workItem';
import About from '../Components/About/About';
import Services from '../Components/Services/Services';
import Testimonial from '../Components/Testimonial/Testimonial';
import Pricing from '../Components/Pricing/Pricing';
import ContactUs from '../Components/ContactUs/ContactUs';

const Home = () => {
    return (
        <section className="">
            <div id="HomeSection" className="container mx-auto pb-20 lg:py-28 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Right Column: Image (shown first on mobile) */}
                <div className="order-1 md:order-2 flex justify-center pb-10">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-60 md:w-72 h-auto"
                    />
                </div>

                {/* Left Column: Text */}
                <div className="order-2 md:order-1 text-center md:text-left xl:pl-40">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-2">Hi!</h1>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        I&apos;m Shorif Shahriar, Senior UX/UI & Graphic Designer
                    </h2>
                    <p className="text-lg leading-7 mb-4 pr-10">
                        I specialize in creating visually appealing and user-friendly designs. My experience spans across graphic design and UX/UI, ensuring a seamless blend of functionality and aesthetics.
                    </p>
                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start space-x-5 mt-8">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-3xl md:text-4xl hover:text-blue-600 transition-colors duration-500"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-3xl md:text-4xl hover:text-blue-600 transition-colors duration-500"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-3xl md:text-4xl hover:text-blue-600 transition-colors duration-500"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

                {/* Marquee */}
                <Marquee>
                    <div className="flex items-center justify-center gap-10 py-10">
                        {workItem.map((item) => (
                            <div key={item.id} className="border flex items-center justify-center space-x-2 px-5 py-2">
                                <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                <p className="text-xl">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* About Section */}
            <div id="aboutSection" >
                <About />
            </div>

            {/* Services Section */}
            <div id="ServicesSection">
                <Services />
            </div>
            {/* Testimonial Section */}
            <div id="TestimonialSection">
                <Testimonial />
            </div>
            {/* Pricing Section */}
            <div id="PricingSection">
                <Pricing />
            </div>
            {/* Contact Us Section */}
            <div id="ContactUsSection">
                <ContactUs />
            </div>
        </section>
    );
};

export default Home;
