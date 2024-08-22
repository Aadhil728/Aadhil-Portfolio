import React, { useRef, useState } from 'react';
import { useSectionInView } from '../lib/hooks';
import SectionHeading from '../shared/SectionHeading';
import emailjs from '@emailjs/browser';
import { FiSend } from "react-icons/fi";
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
    const ref = useSectionInView('Contact', 0.5);
    const form = useRef();

    const [isSending, setIsSending] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        const formElements = form.current.elements;

        if (!formElements.user_name.value.trim()) {
            errors.user_name = 'Full Name is required';
        }
        if (!formElements.user_email.value.trim()) {
            errors.user_email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formElements.user_email.value)) {
            errors.user_email = 'Email is invalid';
        }
        if (!formElements.message.value.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSending(true);
        setFormErrors({});

        emailjs
            .sendForm('service_j22s7c3', 'template_j0860sq', form.current, {
                publicKey: '4kaG4jjH5_dd6mI5P',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast.success('Message sent successfully!');
                    setIsSending(false);
                    e.target.reset();
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    setIsSending(false);
                    toast.error('Failed to send message.');
                },
            );
    };

    const animationVarientFromLeft = {
        initial: { opacity: 0, x: -100 },
        animate: () => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })
    }
    const animationVarientFromRight = {
        initial: { y: 100, opacity: 0 },
        animate: () => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        })
    }

    return (
        <section id='contact' ref={ref} className="mb-20">
            <div className="container">
                <SectionHeading text='Contact Me' />
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <motion.div className='left flex flex-col justify-start items-center lg:items-start'
                        variants={animationVarientFromLeft} initial='initial' whileInView='animate' viewport={{
                            once: true,
                        }}>
                        <h2 className='text-3xl lg:text-5xl font-light'>Get In Touch 👋</h2>
                        <p className='text-sm mt-10'>or feel free to contact me at:</p>
                        <Link className='flex items-center gap-2 text-md mt-2 text-gray-950 dark:text-gray-50 hover:text-primary transition'>
                            <MdEmail size={20} />
                            <span>aadhil.mohd24@gmail.com</span>
                        </Link>
                        <Link className='flex items-center gap-2 text-md mt-2 text-gray-950 dark:text-gray-50 hover:text-primary transition'>
                            <FaWhatsapp size={20} />
                            <span>+974 33009179</span>
                        </Link>

                        <p className='text-sm mt-10'>Socials:</p>
                        <div className="mb-5 lg:mb-0 mt-5 flex items-center justify-start gap-2">
                            <Link to={'https://github.com/Aadhil728'} className='bg-white text text-white w-[40px] h-[40px] flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md shadow-md border border-black/10'>
                                <FaFacebook className='text-xl text-black' />
                            </Link>
                            <Link to={'https://github.com/Aadhil728'} className='bg-white text text-white w-[40px] h-[40px] flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md shadow-md border border-black/10'>
                                <FaInstagram className='text-xl text-black' />
                            </Link>
                            <Link to={'https://github.com/Aadhil728'} className='bg-white text text-white w-[40px] h-[40px] flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition text-xs xl:text-md shadow-md border border-black/10'>
                                <FaTwitter className='text-xl text-black' />
                            </Link>
                        </div>
                    </motion.div>


                    <motion.div variants={animationVarientFromRight} initial='initial' whileInView='animate' viewport={{
                        once: true,
                    }}>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 text-black'>
                            <div>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder='Full Name'
                                    className={`w-full h-[40px] rounded-lg py-2 px-4 text-sm dark:text-black bg-white shadow-sm border border-black/10 tracking-wider ${formErrors.user_name && 'border-red-500'}`}
                                />
                                {formErrors.user_name && <span className="text-red-500 text-xs">{formErrors.user_name}</span>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder='Email'
                                    className={`w-full h-[40px] rounded-lg py-2 px-4 text-sm bg-white shadow-sm border border-black/10 tracking-wider ${formErrors.user_email && 'border-red-500'}`}
                                />
                                {formErrors.user_email && <span className="text-red-500 text-xs">{formErrors.user_email}</span>}
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder='Message'
                                    className={`w-full h-[250px] rounded-lg py-2 px-4 text-sm bg-white shadow-sm border border-black/10 tracking-wider ${formErrors.message && 'border-red-500'}`}
                                />
                                {formErrors.message && <span className="text-red-500 text-xs">{formErrors.message}</span>}
                            </div>
                            <button
                                type="submit"
                                className={`w-full h-[40px] bg-primary rounded-lg text-white text-sm tracking-wider cursor-pointer flex justify-center items-center gap-2 ${isSending ? 'bg-primary/80' : 'hover:bg-primary/80 hover:text-black'} group`}
                                disabled={isSending}
                            >
                                {isSending ? (
                                    <div className="flex items-center gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                className="w-1 h-1 bg-white rounded-full"
                                                animate={{ y: [-2, 2, -2] }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                }}
                                            />
                                        ))}
                                    </div>
                                ) : 'Send'}
                                {!isSending && <span className="transform transition-transform group-hover:translate-y-[-2px]"><FiSend /></span>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
