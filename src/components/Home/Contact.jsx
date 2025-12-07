import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="w-full py-12 px-[7%] bg-dark text-white">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
                <a href="https://www.instagram.com/viva_kidsworld?igsh=OHpod3hpNHRjd211" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-pink-600 rounded-full hover:scale-110 transition-transform text-2xl"><FaInstagram /></a>
                <a href="https://www.facebook.com/share/1LHnoQHuSo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-blue-600 rounded-full hover:scale-110 transition-transform text-2xl"><FaFacebook /></a>
                <a href="https://youtube.com/@vivakids-g6l?si=Ojz2fZ_gWYypUBmB" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-red-600 rounded-full hover:scale-110 transition-transform text-2xl"><FaYoutube /></a>
                <a href="https://www.linkedin.com/in/vivakids-world-808aa5353" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-blue-800 rounded-full hover:scale-110 transition-transform text-2xl"><FaLinkedin /></a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Contact Info */}
                <div className="flex-1 space-y-4 font-sans text-center md:text-left w-full">
                    <div>
                        <strong className="block text-accent text-lg">Phone No:</strong>
                        <p>+91 97901 06164, +91 82204 45455</p>
                    </div>
                    <div>
                        <strong className="block text-accent text-lg">Email:</strong>
                        <p><a href="mailto:infovivakidsworld@gmail.com" className="hover:text-primary">infovivakidsworld@gmail.com</a></p>
                    </div>
                    <div>
                        <strong className="block text-accent text-lg">Address:</strong>
                        <p>No.46, 1st Cross Street, TempleCity, Kanchipuram - 631502</p>
                    </div>
                </div>

                {/* Map */}
                <div className="flex-1 w-full flex justify-center md:justify-end">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3915.035293715606!2d79.694497!3d12.846020!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38298fb5eb89%3A0x5e7196b52f4e82d!2sViva%20Kids%20World!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0, borderRadius: '10px', maxWidth: '400px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div className="text-center mt-12 text-sm text-gray-400 border-t border-gray-700 pt-6">
                <p>© by FlipFlex 2025</p>
            </div>
        </div>
    );
};

export default Contact;
