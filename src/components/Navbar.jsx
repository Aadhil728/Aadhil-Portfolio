import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { links } from '../lib/data'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { useActiveSection } from '../context/ActiveSectionContext';

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  // Load the theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className='theme-toggle-button fixed bottom-[50px] right-[50px] border border-black/30 dark:border-gray-300 p-3 rounded-full'
      >
        {darkMode ? <FaSun size={18} /> : <FaMoon size={15} />}
      </button>

      <header className='z-[9999] relative'>
        <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-opacity-75 -translate-x-1/2 dark:bg-[#111725]" initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }} transition={{ duration: 3 }}></motion.div>

        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash} initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} transition={{ duration: 3 }}>
                <Link className={`flex w-full items-center justify-center px-3 py-3 transition dark:text-gray-500 text-sm cursor-pointer ${activeSection === link.name ? 'text-white , dark:text-white' : ''}`} to={link.hash}
                  smooth={true}
                  duration={800}
                  offset={-150}
                  onClick={() => {
                    setActiveSection(link.name)
                    setTimeOfLastClick(Date.now())
                  }}>
                  {link.name}
                </Link>
                {link.name === activeSection && (
                  <motion.span className="bg-primary/80 rounded-full absolute inset-0 -z-10"
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                      delay: 0.1,
                      mass: 0.1,
                      cursor: 'pointer',
                    }}
                  ></motion.span>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </header >
    </>
  )
}

export default Navbar