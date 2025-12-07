import { motion } from 'framer-motion';

const UniqueEdge = () => {
    const advantages = [
        "Well qualified trained teacher",
        "Multimedia based teaching",
        "12+ Free camps (per annum)",
        "Theme based teaching",
        "Language development",
        "Build confidence",
        "Social development",
        "Support different learning styles"
    ];

    return (
        <div className="w-full py-20 px-[7%] relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10"></div>

            <div className="text-center mb-16 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-dark mb-4 font-serif text-shadow-sm"
                >
                    Our Unique Edge
                </motion.h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xl md:text-2xl text-gray-700 font-serif font-light tracking-wide">
                    Managed by qualified educationist
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {advantages.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="bg-white/80 p-6 rounded-2xl shadow-lg border border-white/60 backdrop-blur-md text-center group cursor-default hover:border-accent/50 transition-colors"
                    >
                        {/* Icon Placeholder or Decorative Dot */}
                        <div className="w-12 h-12 bg-gradient-to-br from-light to-white rounded-full mx-auto mb-4 shadow-inner flex items-center justify-center text-accent text-xl font-bold transform group-hover:rotate-12 transition-transform">
                            {index + 1}
                        </div>
                        <p className="font-bold text-dark text-lg group-hover:text-primary transition-colors">{item}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UniqueEdge;
