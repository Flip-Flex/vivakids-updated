import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ElegantShape } from '../ui/shape-landing-hero';
import { BeamsBackground } from '../ui/beams-background';
import { cn } from '../../lib/utils';
import { Circle } from 'lucide-react';

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

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <BeamsBackground
            id="home"
            className="pt-[120px] pb-[5%] px-[5%] justify-start lg:justify-center overflow-hidden h-auto min-h-screen"
            intensity="medium"
        >
            {/* Content Container matching previous flex layout */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full">

                {/* Background Decor - Futuristic Glows (Optional: Aurora replaces this mostly, but Elegant Shapes can stay) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    {/* Removing static blobs as Aurora provides the background */}

                    {/* Elegant Shapes Integration */}
                    <ElegantShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-primary/[0.15]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />
                    <ElegantShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-secondary/[0.15]"
                        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    />
                </div>

                {/* Left Content */}
                <div className="flex-1 w-full lg:max-w-[50%] text-center lg:text-left z-10 space-y-8">
                    <div className="mb-24 -mt-24 cursor-default relative z-30">
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-primary/20 mb-4 backdrop-blur-sm shadow-sm"
                        >
                            <Circle className="h-2 w-2 fill-primary" />
                            <span className="text-sm text-dark/70 tracking-wide font-medium">
                                Vivakids Architecture
                            </span>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight whitespace-nowrap">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 drop-shadow-md">
                                    INNOVATION
                                </span>
                                <span className="ml-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[200%_auto] animate-shine">
                                    IN EDUCATION
                                </span>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Reduced Container Size */}
                    <div className="relative h-[400px] w-full max-w-[400px] lg:h-[450px] lg:max-w-[450px] mx-auto hidden md:block">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Connecting Circle - Dashed Line for Lifecycle Effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-slow"></div>

                            {/* Central Pulse */}
                            <div className="absolute w-32 h-32 bg-white/10 rounded-full animate-pulse-slow backdrop-blur-sm border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"></div>

                            {/* Orbiting Lifecycle Cards */}
                            {lifecycleItems.map((item, index) => {
                                // Positioning logic - centered on the perimeter
                                // Note: We use Framer Motion's x/y for translation to avoid conflicts with scale animation
                                const positions = {
                                    top: { className: 'top-0 left-1/2', x: '-50%', y: '-50%' },
                                    right: { className: 'top-1/2 right-0', x: '50%', y: '-50%' },
                                    bottom: { className: 'bottom-0 left-1/2', x: '-50%', y: '50%' },
                                    left: { className: 'top-1/2 left-0', x: '-50%', y: '-50%' },
                                };

                                const pos = positions[item.position];

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute ${pos.className} flex flex-col items-center group z-20 w-28 h-28 lg:w-32 lg:h-32`}
                                        initial={{ opacity: 0, scale: 0.8, x: pos.x, y: pos.y }}
                                        animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                    >
                                        <div
                                            className="relative w-full h-full rounded-full border-4 border-white/60 shadow-glass cursor-pointer overflow-hidden transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(255,76,76,0.6)] bg-white"
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${item.img}')` }}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                        </div>

                                        {/* Futuristic Label - Absolute positioned to not affect centering */}
                                        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-max bg-white/80 backdrop-blur-md border border-white/40 px-6 py-2 rounded-full text-dark font-bold text-base tracking-wider uppercase shadow-lg group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 transform group-hover:-translate-y-1 z-30">
                                            {item.title}
                                        </div>
                                        <span className="absolute top-full mt-16 left-1/2 -translate-x-1/2 w-48 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center bg-black/70 rounded px-3 py-1 backdrop-blur-sm z-30 pointer-events-none">
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
        </BeamsBackground>
    );
};

export default Hero;
