import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from '../lib/hooks';

const IntroSection = () => {
    const ref = useSectionInView('Home', 0.5);

    return (
        <section id="home" ref={ref} className="intro-section h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <motion.div className="left" initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
                    <div className="text">
                        <h4 className='text-xl tracking-wide font-semibold'>Hi There, I'm 👋</h4>
                        <h2 className='text-primary font-bold text-3xl lg:text-4xl xl:text-5xl leading-[60px] xl:leading-[80px]'>MOHAMED AADHIL</h2>
                        <h6 className='text-md xl:text-xl tracking-widest font-semibold'>SOFTWARE ENGINEER</h6>
                        <p className='text-sm xl:text-md mt-3 tracking-wide flex flex-wrap max-w-[25rem]'>A self-driven individual, aspiring to explore new horizons in the field of IT with an appetite for Full Stack Engineering.</p>
                    </div>
                    <div className='mt-8 flex items-center flex-wrap gap-3'>
                        <Link to={'#contact'} className='bg-primary text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md tracking-wider shadow-md'>Contact Me
                            <MdArrowRightAlt />
                        </Link>
                        <a href='/CV.pdf' download={true} className='bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md tracking-wider shadow-md border border-black/10'>Download CV
                            <IoMdDownload />
                        </a>
                        <Link to={'https://www.linkedin.com/in/mohamed-aadhil-851468222/'} className='bg-white text text-white w-[40px] h-[40px] flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md shadow-md border border-black/10'>
                            <FaLinkedin className='text-xl text-black' />
                        </Link>
                        <Link to={'https://github.com/Aadhil728'} className='bg-white text text-white w-[40px] h-[40px] flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md shadow-md border border-black/10'>
                            <FaGithub className='text-xl text-black' />
                        </Link>
                    </div>
                </motion.div>
                <motion.div className="right flex justify-center items-center" initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
                    <img className='w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] object-cover' src="/images/profile.png" alt="" />
                </motion.div>
            </div>
        </section>
    )
}

export default IntroSection