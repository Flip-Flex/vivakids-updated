import { motion } from 'framer-motion';

const Infrastructure = () => {
    return (
        <div className="w-full py-16 px-[7%] bg-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-8 font-serif">
                    Our Infrastructure – Safe, Modern, and Inspiring!
                </h1>
                <p className="text-dark text-justify font-serif leading-relaxed text-lg">
                    Viva Kids World provides a vibrant, child-friendly environment with colorful interiors and thoughtfully
                    designed furniture to create an engaging and safe learning space. Our centers are equipped with
                    high-quality toys, teaching aids, and learning materials that enhance cognitive and motor skills
                    development. The infrastructure is carefully planned to support both indoor and outdoor activities,
                    ensuring a balanced mix of learning and play. Every piece of equipment and resource is selected to
                    foster creativity, social interaction, and hands-on learning, making Viva Kids World a perfect place for
                    early childhood development.
                </p>
            </motion.div>
        </div>
    );
};

export default Infrastructure;
