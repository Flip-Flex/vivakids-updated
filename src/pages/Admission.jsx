import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Admission = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            await fetch("https://script.google.com/macros/s/AKfycbxCz8tNl5_KKdg-7M7nDXF67DGTmqKWgr7e4WfrbIcgZ60h5WSefcZo3-TFwpGgvvlJWw/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            setStatus('Form submitted successfully!');
            setFormData({ name: '', email: '', phone: '', city: '', state: '' });
        } catch (error) {
            setStatus('Error submitting form. Please try again.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen bg-dark text-white py-12 px-[5%] flex flex-col items-center justify-center pt-[100px]"
        >
            <h1 className="text-3xl font-bold mb-8 md:hidden text-center">Give Your Child a Bright Start! ✨</h1>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-start justify-between">
                {/* Left Section */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl font-bold hidden md:block">Give Your Child a Bright Start! ✨</h1>
                    <p className="text-lg text-justify leading-relaxed">
                        Welcome to our Viva Kids World pre-school, where learning meets fun! Enroll
                        your child in an interactive, safe, and joyful environment designed for early childhood development.
                    </p>

                    <div className="space-y-3">
                        {['Creative Learning – Art, music, and play-based activities.',
                            'Structured Curriculum – Developing essential skills with care.',
                            'Social & Emotional Growth – Making friends and learning together.',
                            'Admissions Open Now! – join with us.'
                        ].map((text, i) => (
                            <div key={i} className="bg-white/20 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                                {text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 bg-white text-dark p-8 rounded-xl shadow-2xl w-full lg:max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-center text-dark mb-6 font-serif">Enquire Now</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className="w-full p-3 border rounded-full focus:outline-none focus:border-primary" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full p-3 border rounded-full focus:outline-none focus:border-primary" />
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required className="w-full p-3 border rounded-full focus:outline-none focus:border-primary" />
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City *" required className="w-full p-3 border rounded-full focus:outline-none focus:border-primary" />
                        <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State *" required className="w-full p-3 border rounded-full focus:outline-none focus:border-primary" />

                        <button type="submit" className="w-full bg-dark text-white p-3 rounded-full font-bold hover:bg-primary hover:scale-105 transition-all">Submit</button>
                    </form>
                    {status && <p className="text-center mt-4 font-bold">{status}</p>}
                </div>
            </div>
        </motion.div>
    );
};

export default Admission;
