import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Copyright Notice */}
                <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} Shorif Shahriar. All rights reserved.</p>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl hover:text-blue-600 transition-colors duration-300"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl hover:text-blue-600 transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl hover:text-blue-600 transition-colors duration-300"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
