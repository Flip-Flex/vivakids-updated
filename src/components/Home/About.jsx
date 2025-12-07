import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            id="about"
            className="w-full py-16 px-[7%] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/assets/bgaboutus.jpg')" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-serif">
                        About Viva Kids World – Enriching Young Minds at Play School!
                    </h1>
                    <h2 className="text-xl text-dark font-serif mb-6 italic">
                        Where fun and learning come together
                    </h2>
                    <div className="space-y-4 text-justify text-dark font-serif leading-relaxed">
                        <p>
                            At Viva Kids World Preschool, we provide a nurturing and stimulating environment where young
                            minds embark on an exciting journey of learning. Our innovative, play-based curriculum fosters
                            creativity, curiosity, and all-round development, ensuring that every child thrives.
                        </p>
                        <p>
                            Our experienced educators focus on a holistic learning approach that balances academics, arts,
                            and physical activities. Through interactive sessions, hands-on activities, and structured
                            playtime, we create an atmosphere that promotes self-confidence and independence in young
                            learners.
                        </p>
                        <p>
                            At Viva Kids World, we prioritize every child’s emotional and cognitive growth, ensuring they
                            develop the necessary skills to transition seamlessly into formal education.
                        </p>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2 flex justify-center"
                >
                    <img
                        src="/assets/png home 3.png"
                        alt="About Viva Kids"
                        className="w-full max-w-md rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
