import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/assets/png home.png',
        '/assets/png home 2.png',
        '/assets/png home 4.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const lifecycleItems = [
        { title: 'Nursery', subtitle: 'Building Foundations', img: '/assets/little2.jpg', position: 'top' },
        { title: 'Jr.KG', subtitle: 'Motivate Creativity', img: '/assets/little1.jpg', position: 'right' },
        { title: 'Sr.KG', subtitle: 'Preparing Kids', img: '/assets/seniorkgimg.jpg', position: 'bottom' },
        { title: 'Playgroup', subtitle: 'Fun Start', img: '/assets/playgroupimg.jpg', position: 'left' },
    ];

    return (
        <div
            id="home"
            className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-[5%] py-[5%] pt-[120px] overflow-hidden"
        >
            {/* Background Decor - Futuristic Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[100px] rounded-full animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[100px] rounded-full animate-blob animation-delay-2000"></div>
            </div>

            {/* Left Content */}
            <div className="flex-1 w-full lg:max-w-[50%] text-center lg:text-left z-10 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <img src="/assets/innovation-removebg-preview2.png" alt="Innovation" className="w-[90%] mx-auto lg:mx-0 drop-shadow-2xl" />
                </motion.div>

                <div className="relative h-[450px] w-full max-w-[450px] mx-auto hidden md:block">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Central Pulse */}
                        <div className="absolute w-32 h-32 bg-white/10 rounded-full animate-pulse-slow backdrop-blur-sm border border-white/20"></div>

                        {/* Orbiting Lifecycle Cards */}
                        {lifecycleItems.map((item, index) => {
                            // Positioning logic
                            const positions = {
                                top: 'top-0 left-1/2 -translate-x-1/2',
                                right: 'top-1/2 right-0 -translate-y-1/2',
                                bottom: 'bottom-0 left-1/2 -translate-x-1/2',
                                left: 'top-1/2 left-0 -translate-y-1/2',
                            };

                            return (
                                <motion.div
                                    key={index}
                                    className={`absolute ${positions[item.position]} flex flex-col items-center group`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                >
                                    <div
                                        className="relative w-28 h-28 rounded-full border-4 border-white/50 shadow-glass cursor-pointer overflow-hidden transition-all duration-500 ease-out group-hover:scale-125 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,76,76,0.6)]"
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${item.img}')` }}
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>

                                    {/* Futuristic Label */}
                                    <div className="mt-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-white font-bold text-sm tracking-wider uppercase shadow-lg group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        {item.title}
                                    </div>
                                    <span className="text-secondary text-xs mt-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full w-40 text-center bg-black/60 rounded px-2 py-1 backdrop-blur-sm z-20">
                                        {item.subtitle}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Right Slideshow - Glass Card Effect */}
            <div className="flex-1 w-full lg:max-w-[45%] flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
                <div className="relative w-full max-w-lg aspect-[4/3] p-4">
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-3xl transform rotate-3"></div>
                    <div className="absolute inset-0 border-2 border-white/20 rounded-3xl transform -rotate-3"></div>

                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm bg-white/5">
                        {slides.map((slide, index) => (
                            <motion.img
                                key={index}
                                src={slide}
                                alt={`Slide ${index}`}
                                className="absolute top-0 left-0 w-full h-full object-contain p-4"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{
                                    opacity: currentSlide === index ? 1 : 0,
                                    scale: currentSlide === index ? 1 : 1.1
                                }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />
                        ))}

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-primary shadow-glow' : 'bg-white/50 hover:bg-white'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
