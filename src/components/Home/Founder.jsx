import { motion } from 'framer-motion';

const Founder = () => {
    return (
        <div
            id="founder"
            className="w-full py-16 px-[7%] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/assets/bgfounder.jpg')" }}
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Heading (Full Width on Mobile, but visually integrated) */}
                <div className="col-span-1 md:col-span-12 text-center mb-6">
                    <h1 className="text-3xl lg:text-4xl font-bold text-dark font-serif">Founder</h1>
                    <h4 className="text-xl text-dark font-serif mt-2">Meet the visionary behind our success</h4>
                </div>

                {/* Image */}
                <div className="col-span-1 md:col-span-5 flex justify-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        src="/assets/founderimg.jpg"
                        alt="Founder - S. Vanitha"
                        className="w-full max-w-sm rounded-lg shadow-2xl border-4 border-white"
                    />
                </div>

                {/* Content */}
                <div className="col-span-1 md:col-span-7 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-dark font-serif text-justify leading-relaxed"
                    >
                        Vanitha Vinoth.S is the founder of Future Focus Educational Trust, a non-profit organization
                        that provides free education to underprivileged students in India. The trust aims to
                        establish and maintain schools, colleges, and academic institutions, particularly for
                        economically weaker sections and special children. It also supports talented students in
                        higher education and manages properties to achieve these objectives. Vanitha has over 20
                        years of experience in teaching. She started her career as a teacher in 2002 and she
                        established a play school in 2017 with a goal to expand within five years. She successfully
                        launched a second branch of the pre-school, making it the first in Kanchipuram with two
                        branches running in the same town, Tamil Nadu. In the life insurance sector, she achieved six
                        promotions in eight years, from 2019 to 2021, and served as a Kanchipuram branch manager in
                        ABSLI. She maintains strong relationships with both current and former students. She is an
                        active member of Lions Club from June 2024 to May 2025 and a Gold Club member in BNI.
                        Additionally, she serves as a regional corporate trainer. Her hobbies include listening to
                        music, storytelling, and fashion designing, and she has a passion for playing with kids. Her
                        motto is: "Think positively, dream big, and achieve great things."
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Founder;
