import { motion } from 'framer-motion';

const BackgroundWrapper = () => {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-light to-blue-50/50"></div>

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
            ></motion.div>

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
            ></motion.div>

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
                className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
            ></motion.div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-blue-400 rounded-full opacity-20"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0.2, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: Math.random() * 20 + 5 + 'px',
                        height: Math.random() * 20 + 5 + 'px',
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundWrapper;
