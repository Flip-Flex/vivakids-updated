import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <div
            id="philosophy"
            className="w-full py-16 px-[7%] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/assets/bgphilosophy.jpg')" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image - Left on Desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1 flex justify-center"
                >
                    <img
                        src="/assets/philoimg.jpg"
                        alt="Our Philosophy"
                        className="w-full max-w-md rounded-lg shadow-xl"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                >
                    <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-4 font-serif">
                        Our Philosophy – Learn, Grow, and Enjoy!
                    </h1>
                    <h2 className="text-xl text-dark font-serif mb-6 italic">
                        Where curiosity thrives and learning flourishes
                    </h2>
                    <div className="space-y-4 text-justify text-dark font-serif leading-relaxed">
                        <p>
                            At our core, we believe that every child is unique, with their own pace of learning and
                            individual strengths. We are committed to creating a nurturing environment where children feel
                            safe, valued, and encouraged to explore their full potential.
                        </p>
                        <p>
                            Our curriculum is designed to blend the time-tested principles of Montessori education with modern
                            teaching methodologies, ensuring a holistic approach to development. We focus on the four key pillars
                            of early childhood education: Emotional Growth, Cognitive Development, Social Skills, and Physical Development.
                        </p>
                        <p>
                            We believe in a balanced approach—combining structured learning with free play, allowing children to
                            explore, experiment, and develop confidence in their abilities. Our classrooms are vibrant
                            spaces where curiosity is celebrated, questions are encouraged, and learning is a joyful experience.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Philosophy;
