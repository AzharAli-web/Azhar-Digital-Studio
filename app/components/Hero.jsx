import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { HiDownload } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";

const Hero = () => {

    //Icons Array.
    const icons = [
        "/assets/icon-6.svg",
        "/assets/icon-7.svg",
        "/assets/logo_dark.svg",
        "/assets/icon-3.svg",
        "/assets/vite.svg",        
        "/assets/next.svg",       
        "/assets/mongodb.svg",        
        "/assets/icon-1.svg",        
        "/assets/icon-2.svg", 
    ];

        // Animation Varients..
        const container = {
            hidden: {opacity:0},
            show:{
                opacity:1,
                transition:{
                    staggerChildern:0.1,
                }
            }
        };
        const item = {
            hidden:{opacity:0, y:30},
            show:{ opacity:1, y:0, transition: {duration:0.6, ease: "easeOut" }},
        };

    return (
        <section>
            <motion.div
            varients={container}
            initial="hidden"
            animate="show"
            className='max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden'>
                {/* Profile Image. */}
                <motion.div varients={item}>
                    <Image src='/assets/a-profile-3.png' width={150} height={150} className='rounded-full mb-4' priority alt='Profile Image' />
                </motion.div>
                {/* Name. */}
                <motion.h3 varients={item} className='text-lg md:text-xl font-semibold flex items-center justify-center gap-2'>I`m Azhar Ali.<span className='inline-block'>👋🏼</span></motion.h3>
                {/* Title. */}
                <motion.h1 varients={item} className='text-3xl md:text-5xl font-semibold mt-2 leading-tight'>
                    Frontend Developer
                    {/* <br className='md:hidden'/>Front & Backend Developer. */}
                </motion.h1>
                {/* Icon Swipe. */}
                <motion.div varients={item} className='relative my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden'>
                    <motion.div className='flex gap-4 w-max'
                        animate={{x:["0%", "-50%"]}}
                        transition={{repeat: Infinity, repeatTypt:"loop", duration: 15, ease:"linear"}}>
                        {/* Icons Loops. */}
                        {icons.concat(icons).map((icon, index) => (
                            <Image src={icon} key={index} width={40} height={40} className='md:w-[50px] md:h-[50px]' alt={`icon ${index + 1}`}/>
                        ))}
                    </motion.div> 
                    </motion.div>
                        {/* Buttons. */}
                        <motion.div varients={item} className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                            <a href='#portfolio' className='custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300'>My Work <HiOutlineViewGrid className='text-lg'/></a>
                            <a href='/assets/resume.pdf' download className='w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2'>My Resume.<HiDownload  className='text-lg'/></a>
                        </motion.div>



               
            </motion.div>
        </section>
    )
}
export default Hero