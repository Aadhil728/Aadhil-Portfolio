import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { motion } from "framer-motion";
import { useSectionInView } from '../lib/hooks';

const animationVarients = {
    initial: { opacity: 0, y: 100 },
    animate: () => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        },
    })
}

const AboutSection = () => {
    const ref = useSectionInView('About', 0.5);

    return (
        <motion.section id="about" ref={ref} className='max-w-[45rem] text-center mx-auto scroll-mt-28' variants={animationVarients} initial='initial' whileInView='animate' viewport={{
            once: true,
        }}>
            <SectionHeading text='About Me' />
            <p className='text-sm leading-8'>With over 4 years of dedicated experience in web development, I specialize in crafting intuitive, responsive, and dynamic user interfaces.
            </p>
            <p className='text-sm leading-8 mt-3'>My solid foundation in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular allows me to bring innovative and effective digital solutions to life.</p>
            <p className='text-sm leading-8 mt-3'> I am also proficient in backend technologies including Node.js, Express, MongoDB, and SQL, ensuring a seamless and robust full-stack development process. Having completed a BTEC HND in Software Engineering, I continuously strive to stay ahead of the curve, integrating the latest trends and best practices in my work. My goal is to transform complex challenges into elegant and functional designs that exceed client expectations.</p>
        </motion.section >
    )
}

export default AboutSection