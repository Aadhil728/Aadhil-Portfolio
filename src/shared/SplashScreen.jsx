import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={startAnimation ? { y: '-100%' } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center z-50 overflow-hidden"
        >
            <h2 className='text-[150px] font-dancingFont text-white'>A.</h2>
        </motion.div>
    );
};

export default SplashScreen;
