import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { skillsData } from '../lib/data';
import { motion } from 'framer-motion'
import { useSectionInView } from '../lib/hooks';

const animationVarients = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 * index,
            duration: 1
        },
    })
}

const SkillsSection = () => {
    const ref = useSectionInView('Skills', 0.5);

    const { frontendSkills, backendSkills, otherSkills } = skillsData[0] || [];

    return (
        <section id='skills' ref={ref} className='max-w-[53rem] mx-auto text-center'>
            <SectionHeading text='My Skills' subText="Over the past 4 years, I've been working consistently with some of these technologies, refining my expertise and delivering effective projects." />

            <div className="frontend">
                <h6 className='mt-10 mb-6 text-sm text-gray-600 dark:text-gray-50 tracking-wider'>Frontend</h6>
                <ul className='flex flex-wrap justify-center items-center gap-4 text-md text-gray-800'>
                    {
                        frontendSkills.map((skill, index) => (
                            <motion.li key={index} className='flex items-center gap-2 bg-white/70 border border-black/[0.1] rounded-xl px-5 py-3 shadow-sm text-sm' variants={animationVarients} initial='initial' whileInView='animate' viewport={{
                                once: true,
                            }} custom={index}>
                                <div
                                    className='relative w-6 h-6 flex items-center justify-center rounded-md'
                                    style={{ backgroundColor: skill.color }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className='absolute w-4 h-4 rounded-md object-contain'
                                    />
                                </div>
                                {skill.name}
                            </motion.li>
                        ))
                    }
                </ul>
            </div>

            <div className="backend">
                <h6 className='mt-10 mb-6 text-sm text-gray-600 dark:text-gray-50 tracking-wider'>Backend</h6>
                <ul className='flex flex-wrap justify-center items-center gap-4 text-md text-gray-800'>
                    {
                        backendSkills.map((skill, index) => (
                            <motion.li key={index} className='flex items-center gap-2 bg-white/70 border border-black/[0.1] rounded-xl px-5 py-3 shadow-sm text-sm' variants={animationVarients} initial='initial' whileInView='animate' viewport={{
                                once: true,
                            }} custom={index}>
                                <div
                                    className='relative w-6 h-6 flex items-center justify-center rounded-md'
                                    style={{ backgroundColor: skill.color }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className='absolute w-4 h-4 rounded-md object-contain'
                                    />
                                </div>
                                {skill.name}
                            </motion.li>
                        ))
                    }
                </ul>
            </div>

            <div className="other">
                <h6 className='mt-10 mb-6 text-sm text-gray-600 dark:text-gray-50 tracking-wider'>Other</h6>
                <ul className='flex flex-wrap justify-center items-center gap-4 text-md text-gray-800'>
                    {
                        otherSkills.map((skill, index) => (
                            <motion.li key={index} className='flex items-center gap-2 bg-white/70 border border-black/[0.1] rounded-xl px-5 py-3 shadow-sm text-sm' variants={animationVarients} initial='initial' whileInView='animate' viewport={{
                                once: true,
                            }} custom={index}>
                                <div
                                    className='relative w-6 h-6 flex items-center justify-center rounded-md'
                                    style={{ backgroundColor: skill.color }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className='absolute w-4 h-4 rounded-md object-contain'
                                    />
                                </div>
                                {skill.name}
                            </motion.li>
                        ))
                    }
                </ul>
            </div>


        </section>
    )
}

export default SkillsSection