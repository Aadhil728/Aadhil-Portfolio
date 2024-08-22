import React from 'react';
import { servicesData } from '../lib/data';
import SectionHeading from '../shared/SectionHeading';

const ServicesSection = () => {
    return (
        <section id='services'>
            <SectionHeading text='Services I Offer' />
            <div className='grid grid-cols-1 col-span-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {servicesData.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='group flex flex-col justify-center items-center border bg-white/75 rounded-lg py-8 px-5 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-[80px] h-[80px] object-contain transform transition-transform duration-300 group-hover:-rotate-6'
                                />
                                <h2 className='text-md font-semibold mt-4 uppercase'>{item.title}</h2>
                                <p className='text-[12px] text-center my-2 text-gray-600'>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default ServicesSection;
