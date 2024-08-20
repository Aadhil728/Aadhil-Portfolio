import React from 'react'

const SectionHeading = ({ text, subText }) => {
    return (
        <div className='flex flex-col items-center w-full mt-20 lg:my-0 lg:mb-5'>
            <h2 className='text-2xl lg:text-4xl font-medium capitalize mb-8'>{text}</h2>
            <p className='text-sm text-gray-500 dark:text-gray-50 text-center tracking-wider'>{subText}</p>
        </div>
    )
}

export default SectionHeading