import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={startAnimation ? { y: '-100%' } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center z-50 overflow-hidden"
        >
            <motion.h2 className='text-[100px] lg:text-[150px] font-dancingFont text-white' initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>A.</motion.h2>
        </motion.div>
    );
};

export default SplashScreen;
