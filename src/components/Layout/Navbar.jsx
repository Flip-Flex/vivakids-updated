import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'About Us', path: '/#aboutus' },
        { name: 'Little Scholars', path: '/#littlescholors' },
        { name: 'Achievements', path: '/#achivement' },
        { name: 'Admission Enquiry', path: '/admission', isPage: true },
        { name: 'Franchise', path: '/franchise', isPage: true },
        { name: 'Founder', path: '/#founder' },
        { name: 'Contact Us', path: '/#contact' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <header className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src="/assets/logotm.jpg"
                            alt="Viva Kids World Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl text-dark focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center">
                        <div className="border border-dark rounded-full px-6 py-2">
                            <ul className="flex space-x-6">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.isPage ? (
                                            <Link
                                                to={link.path}
                                                className="text-dark hover:text-primary transition-colors duration-300 font-serif text-sm font-bold uppercase"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <HashLink
                                                smooth
                                                to={link.path}
                                                className="text-dark hover:text-primary transition-colors duration-300 font-serif text-sm font-bold uppercase"
                                            >
                                                {link.name}
                                            </HashLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="lg:hidden mt-4 bg-dark rounded-lg overflow-hidden shadow-xl animate-fade-in-down">
                        <ul className="flex flex-col py-4">
                            {navLinks.map((link) => (
                                <li key={link.name} className="border-b border-white/10 last:border-0">
                                    {link.isPage ? (
                                        <Link
                                            to={link.path}
                                            className="block px-6 py-3 text-white hover:bg-white/10 transition-colors duration-300 text-center font-bold"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <HashLink
                                            smooth
                                            to={link.path}
                                            className="block px-6 py-3 text-white hover:bg-white/10 transition-colors duration-300 text-center font-bold"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </HashLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbar;
