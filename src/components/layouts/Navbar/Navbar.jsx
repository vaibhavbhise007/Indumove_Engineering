import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { Menu, X } from "lucide-react";
import { FaPhoneAlt, FaInstagramSquare, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../../assets/logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            {/* Top Bar */}
            <div className="hidden md:flex w-full h-10 bg-[#ffd838] items-center text-white">
                <div className="flex flex-wrap justify-between w-full px-4 md:px-20">
                    {/* Contact Info */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <span className="font-semibold">+91-9096352312</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail />
                            <span className="font-semibold">info.indumove.engg@gmail.com</span>
                        </div>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex gap-4 text-xl">
                        <FaFacebook />
                        <FaLinkedin />
                        <FaWhatsapp />
                        <FaInstagramSquare />
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                            <img src={logo} alt="Logo" className="h-16 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {["Home", "About", "Services", "Products", "Client", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                offset={-80} // Adjust based on your navbar height
                                className="text-black hover:text-sky-400 font-medium px-3 py-2 rounded-md cursor-pointer"
                                onClick={handleLinkClick}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                            className="p-2 rounded-md text-black hover:text-sky-400 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        {["Home", "About", "Services", "Products", "Client", "Contact"].map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="block text-black hover:text-sky-400 font-medium px-3 py-2 rounded-md cursor-pointer"
                                onClick={handleLinkClick}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
