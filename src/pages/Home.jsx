import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import SectionDevider from '../shared/SectionDevider'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='bg-[#f3f4f6] text-black relative sm:pt-10 dark:text-gray-50 dark:text-opacity-90 dark:bg-gray-900 z-10'>
            <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
            <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
            <div className="container pt-[150px] lg:pt-0">
                <Navbar />
                <IntroSection />
                <SectionDevider />
                <AboutSection />
                <SectionDevider />
                <ExperienceSection />
                <SectionDevider />
                <SkillsSection />
                <SectionDevider />
                <ContactSection />
                <Footer />
            </div>
        </div>

    )
}

export default Home