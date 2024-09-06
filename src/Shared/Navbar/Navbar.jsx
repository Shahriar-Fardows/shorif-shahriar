
const Navbar = () => {

    const scrollToHome = () => {
        document.getElementById('HomeSection').scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAbout = () => {
        document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToServices = () => {
        document.getElementById('ServicesSection').scrollIntoView({ behavior: 'smooth' });
    };
    const TestimonialSection = () => {
        document.getElementById('TestimonialSection').scrollIntoView({ behavior: 'smooth' });
    };
    const PricingSection = () => {
        document.getElementById('PricingSection').scrollIntoView({ behavior: 'smooth' });
    };
    const ContactUsSection = () => {
        document.getElementById('ContactUsSection').scrollIntoView({ behavior: 'smooth' });
    };

    const navMenu = (
        <>
            
            {/* Replace Link with an onClick function for About */}
            <li><button onClick={scrollToHome}>Home</button></li>
            <li><button onClick={scrollToAbout}>About</button></li>
            <li><button onClick={scrollToServices}>Services</button></li>
            <li><button onClick={TestimonialSection}>Testimonial</button></li>
            <li><button onClick={PricingSection}>Pricing</button></li>
            
        </>
    );

    return (
        <div className="fixed top-0 lg:top-5 right-0 left-0 navbar bg-base-100 border mx-auto container rounded-lg mx">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Shorif</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end ">
                <button onClick={ContactUsSection} className="btn bg-black text-white hover:bg-white border hover:text-black">Let&apos;s Talk</button>
            </div>
        </div>
    );
};

export default Navbar;
