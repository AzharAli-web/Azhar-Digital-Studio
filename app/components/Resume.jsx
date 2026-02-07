import React from 'react'
import { PiGraduationCapFill, PiStarFill } from "react-icons/pi";
import { motion } from 'framer-motion';

const Resume = () => {
    // Education Array.
    const educationData = [
        {
            year: "2020 - 2021",
            title: "Matric",
            institution: "Azeem Model School",
            description: "Matric passed A+ grade with Science background.",
        },
        {
            year: "2022 - 2023",
            title: "Fsc",
            institution: "Quaid-e-Azam college",
            description: "Intermediate passed with A+ grade in FSc Pre-Medical",
        },
        {
            year: "2023 - 2027",
            title: "Bacholar",
            institution: "AWKUM",
            description: "Bachelor of Computer Science (Software) — In Progress",
        },
    ]
    //Work data entry..
    const workdata = [
        {
            year: "2023 - 2027",
            title: "Illustrator",
            company: "Creative Dummy.",
            description: "Currently i did not work with any company. i am still searching for work.",
        },
        {
            year: "2023 - 2027",
            title: "Illustrator",
            company: "Creative Dummy.",
            description: "Currently i did not work with any company. i am still searching for work.",
        },
        {
            year: "2023 - 2027",
            title: "Illustrator",
            company: "Creative Dummy.",
            description: "Currently i did not work with any company. i am still searching for work.",
        },
    ]

    //Certificates
    const certificatdata = [
        {
            year: " 2025",
            title: "HTML, CSS, & javascript",
            institution: "Jhons Hopkins University.(via coursera)",
            description: "Completed hands-on training in building responsive websites using HTML5, CSS3, and Javascript. Gained strong understanding of web structure, styling, DOM manipulation, and basic front-end development best practice.",
        },
        {
            year: " 2025",
            title: "Backend Development",
            institution: "Board Infinity.(via coursera)",
            description: "Completed backend development trainig focused on building RESTful APIs using Node.js, Express.js, and MongoDB. Learned server-side logic, database integration, and API development.",
        },
        {
            year: " 2025",
            title: "React.js & Next.js",
            institution: "Practical project-based-learning.",
            description: "Developed dynamic and responsive web applications using React.js and Next.js through hands-on, project-based learning. Gained experience in component-based architecture, routing, and state managment.",
        },
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
        <section className='mt-12 pb-8' id='resume'>
            {/* Headings. */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center'>
                <p className='text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFill className='text-lg' />
                    Resume.
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Education and practical <br /> experience.
                </h2>
            </motion.div>
            {/* Timeline Content. */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12'>
                {/* Education. */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>My Education.</h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60' ></div>
                        <div>
                            {educationData.map((item, index) => (
                                <motion.div className='relative flex items-start space-x-6' key={index}
                                    varients={item}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className='relative flex-shrink-0 '>
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center'>
                                            <PiGraduationCapFill className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex items-center space-x-2 mb-2'>

                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'>{item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                        <p className='text-gray-600 mb-2'>{item.institution}</p>
                                        <p className='text-gray-600 text-sm mb-[72px]'>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/*  certificates */}
                    {/* For work experience replace everything with workdata. */}
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>My Certificates.</h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60' ></div>
                        <div>
                            {certificatdata.map((item, index) => (
                                <motion.div className='relative flex items-start space-x-6 pb-8' key={index}
                                    varients={item}
                                    whileHover={{ x: 10 }}>
                                    <div className='relative flex-shrink-0'>
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center'>
                                            <PiGraduationCapFill className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex items-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'>{item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                        <p className='text-gray-600 mb-2'>{item.institution}</p>
                                        <p className='text-gray-600 text-sm'>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                </div>
            </motion.div>

        </div>
        </section >

    )
}

export default Resume
