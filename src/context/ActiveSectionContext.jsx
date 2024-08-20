// src/context/ActiveSectionContext.js
import React, { createContext, useContext, useState } from 'react';

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSection = () => useContext(ActiveSectionContext);
