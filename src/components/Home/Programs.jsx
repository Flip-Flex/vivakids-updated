import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Programs = () => {
    const franchiseFeatures = [
        { title: "Establishing Brand", img: "/assets/branch.png", link: "/franchise" },
        { title: "No Royalty", img: "/assets/noroyalty.png", link: "/franchise" },
        { title: "EMI", img: "/assets/emi.png", link: "/franchise" },
        { title: "International Quality", img: "/assets/international.png", link: "/franchise" },
        { title: "Training Support", img: "/assets/training-removebg-preview.png", link: "/franchise" },
        { title: "Extensive Support", img: "/assets/extensivesupport.png", link: "/franchise" }
    ];

    return (
        <div id="littlescholors" className="w-full py-16 px-[7%] relative">
            <div className="absolute inset-0 bg-secondary/10 -z-10 skew-y-3 transform origin-top-left scale-110"></div>

            <div className="mb-16">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark to-primary mb-8 font-serif text-center lg:text-left drop-shadow-sm"
                >
                    Empowering Your Child’s Journey from the First Step
                </motion.h1>
                <div className="grid lg:grid-cols-2 gap-12 text-justify font-serif text-dark text-lg leading-relaxed">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-white/50 shadow-sm"
                    >
                        <p className="mb-4">
                            At Viva Kids World, we offer four structured programs—Playgroup, Nursery, Jr.KG, and
                            Sr.KG—each designed to meet the unique developmental needs of young learners. Our
                            programs follow a child-centered approach, allowing children to grow at their own pace
                            while building confidence and independence. From the moment a child enters our
                            Playgroup, they are welcomed into a safe, nurturing, and stimulating environment.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-white/50 shadow-sm"
                    >
                        <p>
                            Through colors, textures, music, and movement, toddlers begin to develop their gross
                            motor skills and social interactions, learning to express themselves through simple
                            words, gestures, and creative play.
                            As children progress to Nursery, they engage in more structured activities that
                            strengthen pre-writing skills, language development, and cognitive abilities. With the
                            introduction of puzzles, sorting games, and storytelling sessions.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Glassmorphic Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                {franchiseFeatures.map((feature, index) => (
                    <Link to={feature.link} key={index} className="contents">
                        <motion.div
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/50 flex flex-col items-center justify-center w-full h-[160px] shadow-glass hover:shadow-2xl hover:border-primary transition-all duration-300 cursor-pointer group"
                        >
                            <img src={feature.img} alt={feature.title} className="w-14 h-14 object-contain mb-4 group-hover:rotate-6 transition-transform" />
                            <p className="text-dark font-bold text-sm text-center group-hover:text-primary transition-colors">{feature.title}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-dark text-center mt-20 font-serif bg-white/60 py-4 rounded-full backdrop-blur-sm shadow-sm inline-block w-full"
            >
                Igniting Bright Beginnings with Our Play School Programs!
            </motion.h2>
        </div>
    );
};

export default Programs;
