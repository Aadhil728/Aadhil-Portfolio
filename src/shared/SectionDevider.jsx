import React from 'react'
import { motion } from 'framer-motion'

const SectionDevider = () => {
    return (
        <motion.div className='bg-gray-200 dark:bg-gray-500 my-24 h-16 w-1 rounded-full hidden sm:block mx-auto' initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}></motion.div>
    )
}

export default SectionDevider