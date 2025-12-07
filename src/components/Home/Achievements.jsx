import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const images = [
        '/assets/achive1.jpg',
        '/assets/achive2.jpg',
        '/assets/achive3.jpg',
        '/assets/achive4.jpg'
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div id="achivement" className="w-full py-16 px-[7%] bg-white">
            <div className="text-center mb-10">
                <h6 className="text-primary font-bold uppercase tracking-wider mb-2">Want to know more about us?</h6>
                <h1 className="text-3xl lg:text-4xl font-bold text-dark font-serif">Achievements</h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-dark font-serif text-justify leading-relaxed mb-12">
                <p>
                    <span className="font-bold block mb-2">🏆 Jackhi Book of World Records</span>
                    We successfully organized a mass world record event, "We Support Farmers," where the maximum number of participants drew a Tricolour India map and filled it with vegetables in the shortest time. This extraordinary achievement was officially registered in the Jackhi Book of World Records on October 1, 2023.
                </p>
                <p>
                    <span className="font-bold block mb-2">🏆 The Ideal Principal Award (2023-2024)</span>
                    Our esteemed principal, S. Vanitha, was recognized with The Ideal Principal Award by Third Generation - Platform for Creative Students, Chennai. This award celebrates her Exemplary Leadership Quality, Inspiring Students, and Pioneering Initiatives in Art and Craft.
                </p>
                <p>
                    <span className="font-bold block mb-2">🏆 Kalvi Chemmal Award</span>
                    Awarded to S. Vanitha Vinoth, Centre Head of Viva Kids World Pre-Play School, Kanchipuram, in recognition of her outstanding contributions to children's education and literary development at the 2nd Annual Salangai Pooja Vizha on September 9, 2023.
                </p>
                <p>
                    <span className="font-bold block mb-2">🏆 Xtragenius Appreciation Award</span>
                    Viva Kids World Pre-Play School received recognition from Xtragenius Learning Systems for its enthusiastic participation in the 20th National Level Abacus Competition on January 27, 2019.
                </p>
            </div>

            {/* Carousel */}
            <div className="flex justify-center overflow-hidden relative h-[300px] sm:h-[400px] w-full max-w-3xl mx-auto rounded-xl shadow-2xl">
                {images.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`Achievement ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentImage === index ? 1 : 0 }}
                        transition={{ duration: 0.8 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Achievements;
