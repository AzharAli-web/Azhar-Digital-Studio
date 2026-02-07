import React from 'react'
import { FaDribbble, FaTwitch, FaLinkedin, FaTelegram  } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";


const Footer = () => {
    // Social Media links Array.
    const socialIcons = [
        { icon: SiFiverr, href: "https://www.fiverr.com/azharalikhan384" },
        { icon: FaLinkedin, href: "www.linkedin.com/in/azhar-ali-62734432a" },
        { icon: FaTwitch, href: "https://wa.me/923705516525" },
        { icon: FaGithub, href: "" },
        { icon: FaTelegram , href: "https://t.me/AzharAli" },
    ];

    const container = {
        hidden: {},
        show: { transition: { staggerChilder: 0.2 } },
    };
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <footer className='py-12 px-4 text-center'>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex justify-center gap-2 md:gap-6 mb-8'>
                {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <motion.a
                            variants={item}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}

                            href={social.href} key={index} className='p-4 rounded-2xl border border-outer hover:bg-primary/10 transition-all'>
                            < IconComponent className='text-xl md:text-2xl text-primary' />
                        </motion.a>
                    );
                })}
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8'>
                Want to know more about me, tell me about your project or just to say hello? Drop me aline and I`ll get back as soon as possible.
            </motion.p>
            <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className='border-outer mb-8' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content'>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show">
                    <p className='font-semibold'>Location</p>
                    <p>Mardan - pakistan.</p>
                </motion.div>
                <motion.div variants={container}
                    initial="hidden"
                    whileInView="show">
                    <p className='font-semibold'>Phone</p>
                    <p>+92 370-5516525</p>
                </motion.div>
                <motion.div variants={container}
                    initial="hidden"
                    whileInView="show">
                    <p className='font-semibold'>Email</p>
                    <p>khanma16101@email.com</p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
