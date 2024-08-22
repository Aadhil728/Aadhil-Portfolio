import React from 'react'
import SectionHeading from '../shared/SectionHeading'
import { educationData, experiencesData } from '../lib/data';
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion'

const ExperienceSection = () => {

    const ref = useSectionInView('Experience', 0.5);

    const animationVarientsFromLeft = {
        initial: { opacity: 0, x: -100 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        }
    }
    const animationVarientsFromRight = {
        initial: { opacity: 0, x: 100 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        }
    }

    return (
        <section id='experience' ref={ref} className='overflow-hidden'>
            <SectionHeading text='Experience & Eductaion' />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    {experiencesData.map((item, index) => (
                        <motion.div key={index} className='border border-black/10 p-4 rounded-lg mb-5 bg-white/10 shadow-md'
                            variants={animationVarientsFromLeft} initial='initial' whileInView='animate' viewport={{
                                once: true,
                            }}>
                            <div className='lg:flex gap-2 justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div className='border border-black/5 p-1 rounded-full bg-primary/10'>
                                        <img className='w-[40px] h-[40px] object-cover' src={item.image} alt={item.image} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold capitalize">{item.title}</h3>
                                        <p className="mt-0 !text-sm !text-primary !font-semibold">{item.company}</p>
                                        <p className="mt-0 !text-[12px]">{item.location}</p>
                                        <p className='!mt-0 !text-[10px] lg:hidden'>{item.date} | {item.type}</p>
                                    </div>
                                </div>
                                <div className='lg:text-right hidden lg:block'>
                                    <p className='!mt-0 !text-sm'>{item.date}</p>
                                    <p className='!mt-0 !text-[12px]'>{item.type}</p>
                                </div>
                            </div>
                            <ul>
                                <li className='list-disc !ml-5 !lg:ml-20 !text-[12px] mt-2'>{item.description}</li>
                                <li className='list-disc !ml-5 !lg:ml-20 !text-[12px] mt-2'>{item.description2}</li>
                                <li className='list-disc !ml-5 !lg:ml-20 !text-[12px] mt-2'>{item.description3}</li>
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div>
                    {educationData.map((item, index) => (
                        <motion.div key={index} className='border border-black/10 p-4 rounded-lg mb-5 bg-white/10 shadow-md'
                            variants={animationVarientsFromRight} initial='initial' whileInView='animate' viewport={{
                                once: true,
                            }}>
                            <div className='flex gap-2 justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div className='border border-black/5 p-2 rounded-full bg-primary/10'>
                                        <span className='text-xl'>{item.image}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold capitalize">{item.name}</h3>
                                        <p className="mt-0 !text-primary font-semibold text-sm">{item.collage}</p>
                                        <div className='mt-2'>
                                            <p className="text-[12px]">{item.location}</p>
                                            <p className="text-[12px]">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ExperienceSection