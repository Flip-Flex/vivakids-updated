import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Franchise = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const quotes = [
        "Your skills can earn you.",
        "Be your own boss.",
        "Become financially independent."
    ];

    useEffect(() => {
        if (quoteIndex >= quotes.length) {
            setTimeout(() => setShowOverlay(false), 1000);
            return;
        }

        const timer = setTimeout(() => {
            setQuoteIndex(prev => prev + 1);
        }, 2500); // Time per quote

        return () => clearTimeout(timer);
    }, [quoteIndex]);

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', mobile: '', pinCode: '', state: '', city: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        try {
            await fetch("https://script.google.com/macros/s/AKfycbyoMSStkdZzNbQaMDujmOxLeWObGO7T2PJDzDvWCy_3W8p_LqOtyX3mLr9Byqduyg-MQA/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            setStatus('Submission successful! We will get back to you soon.');
            setFormData({ firstName: '', lastName: '', email: '', mobile: '', pinCode: '', state: '', city: '' });
        } catch (error) {
            setStatus('Error submitting form.');
        }
    };

    const features = [
        { title: 'Established Brand', img: '/assets/logo1-removebg-preview.png', link: '/franchise/brand' },
        { title: 'No Royalty', img: '/assets/noroyalty.png', link: '/franchise/no-royalty' },
        { title: 'EMI', img: '/assets/emi.png', link: '/franchise/emi' },
        { title: 'International Quality', img: '/assets/international.png', link: '/franchise/quality' },
        { title: 'Training Support', img: '/assets/training-removebg-preview.png', link: '/franchise/training' },
        { title: 'Extensive Support', img: '/assets/extensivesupport.png', link: '/franchise/support' },
    ];

    return (
        <div className="min-h-screen bg-dark text-white relative pt-[100px] overflow-hidden">
            {/* Quote Overlay */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-dark flex flex-col items-center justify-center p-4"
                    >
                        {quoteIndex < quotes.length && (
                            <motion.div
                                key={quoteIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white text-dark p-10 rounded-3xl text-2xl md:text-4xl font-serif font-bold text-center shadow-2xl relative"
                            >
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
                                {quotes[quoteIndex]}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: !showOverlay ? 1 : 0, y: !showOverlay ? 0 : 30 }}
                transition={{ duration: 1.5 }}
                className="container mx-auto px-4 pb-12 flex flex-col lg:flex-row gap-12"
            >
                {/* Left Section */}
                <div className="flex-1">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">Franchise Opportunity</h1>
                    <p className="mb-8 text-lg">Start your own Viva Kids World preschool today! In minimum 1500* sq. feet space</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {features.map((item, index) => (
                            <Link to={item.link} key={index} className="flex flex-col items-center justify-center bg-white/20 hover:-translate-y-2 transition-transform duration-300 p-4 rounded-xl w-36 h-40 text-center border-2 border-dark text-dark bg-white shadow-lg">
                                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain mb-3" />
                                <h5 className="font-bold text-sm leading-tight">{item.title}</h5>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 lg:max-w-md bg-white text-dark p-8 rounded-xl shadow-2xl h-fit">
                    <h2 className="text-2xl font-bold text-center text-dark mb-6">Enquire Now</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" required className="w-full p-2 border rounded-full focus:outline-none focus:border-primary" />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" required className="w-full p-2 border rounded-full focus:outline-none focus:border-primary" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full p-2 border rounded-full focus:outline-none focus:border-primary" />
                        <div className="flex gap-2">
                            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile *" required className="w-1/2 p-2 border rounded-full focus:outline-none focus:border-primary" />
                            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="Pin Code *" required className="w-1/2 p-2 border rounded-full focus:outline-none focus:border-primary" />
                        </div>
                        <div className="flex gap-2">
                            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State *" className="w-1/2 p-2 border rounded-full focus:outline-none focus:border-primary" />
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City *" className="w-1/2 p-2 border rounded-full focus:outline-none focus:border-primary" />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white p-2 rounded-full font-bold hover:bg-dark transition-colors mt-4">Join us</button>
                    </form>
                    {status && <p className="text-center mt-4 font-bold text-green-600">{status}</p>}
                </div>
            </motion.div>
        </div>
    );
};

export default Franchise;
