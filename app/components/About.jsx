import React from 'react'
import { PiStarFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2"
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';

const About = () => {
    const container = {
        hidden: {},
        show: { transition: { staggerChildern: 0.2 } },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className='mt-12 pb-8' id='about'>
            {/* Heading... */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center'>
                <p className='text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFill className='text-lg' />
                    About.
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Turning complex problems <br /> into simple designs.
                </h2>
            </motion.div>
            {/* About Data. */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                {/* Card-1. */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>40+</h3>
                    <p className='text-gray-700 font-medium text-lg'>Happy clients.</p>
                </motion.div>
                {/* Card-2. */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>0+</h3>
                    <p className='text-gray-700 font-medium text-lg'>Years Of Experience.</p>
                </motion.div>
                {/* Card-3. */}
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className='bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer'>
                    <h3 className='text-5xl md:text-6xl font-bold text-gradient mb-2'>20+</h3>
                    <p className='text-gray-700 font-medium text-lg'>Projects done.</p>
                </motion.div>
            </motion.div>

            {/* Content Text. */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                <div className='lg:col-span-2 space-y-6'>
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-lg leading-relaxed'>Passionate Frontend Developer with hands-on experience building responsive, high-performance, and interactive web applications using HTML5, CSS3, JavaScript, React.js, Next.js, Framer-Motion and Tailwind CSS. I specialize in transforming designs into pixel-perfect, user-friendly interfaces and integrating APIs to deliver seamless, real-world functionality.

I’ve worked on multiple personal and freelance projects, including full-scale e-commerce platforms and SaaS landing pages, showcasing strong problem-solving abilities, clean code practices, and attention to detail. With additional backend experience, I’m comfortable collaborating across the stack to build scalable, production-ready solutions. I’m eager to contribute my skills and creativity to a forward-thinking team
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-lg leading-relaxed'>
                       I am passionate about continuous learning, writing clean and maintainable code, and building web experiences that provide real value to users. I am currently seeking opportunities where I can grow as a developer and contribute to impactful projects.
                    </motion.p>
                    {/* Download button. */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        href="/assets/resume.pdf" download className='custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300'>
                        Download CV.
                        <HiDownload className='text-xl' /></motion.a>
                </div>
                {/* Right Colounm. */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='lg:col-span-1 sapce-y-4'>
                    {/* Name. */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>
                            Name.
                        </p>
                        <p className='text-gray-800 text-xl font-semibold mb-1'>
                            Azhar Ali
                        </p>
                    </motion.div>
                    {/* Phone. */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>
                            Phone.
                        </p>
                        <p className='text-gray-800 text-xl font-semibold mb-1'>
                            +92 370-5516525
                        </p>
                    </motion.div>
                    {/* Emails. */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>
                            Email.
                        </p>
                        <p className='text-gray-800 text-xl font-semibold mb-1'>
                            Khanma16101@email.com
                        </p>
                    </motion.div>
                    {/* Location. */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>
                            Location.
                        </p>
                        <p className='text-gray-800 text-xl font-semibold mb-1'>
                            Mardan - pakistan.
                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default About
