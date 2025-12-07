import { FaWhatsapp } from 'react-icons/fa';

const FixedFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] bg-dark py-2 flex justify-center items-center shadow-lg">
            <div className="flex items-center space-x-4 bg-white px-6 py-2 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 shadow-xl border border-gray-200">
                <a href="/admission" className="flex items-center space-x-2 text-dark font-bold text-sm hover:scale-105 transition-transform">
                    <img src="/assets/admission-removebg-preview.png" alt="Admission" className="w-6 h-6" />
                    <span>Admission Enquiry</span>
                </a>
                <div className="w-[2px] h-6 bg-black"></div>
                <a href="/franchise" className="flex items-center space-x-2 text-dark font-bold text-sm hover:scale-105 transition-transform">
                    <img src="/assets/franchise-removebg-preview.png" alt="Franchise" className="w-6 h-6" />
                    <span>Start a Franchise</span>
                </a>
            </div>

            <div className="absolute right-4 bottom-2">
                <a href="https://wa.me/8220445455" target="_blank" rel="noopener noreferrer" className="block hover:scale-110 transition-transform">
                    <img src="/assets/wapurple-removebg-preview.png" alt="WhatsApp" className="w-12 h-12" />
                </a>
            </div>

            {/* Fallback space keeper if needed, but the main content is absolute positioned above or floating */}
            <div className="h-1"></div>
        </div>
    );
};

export default FixedFooter;
