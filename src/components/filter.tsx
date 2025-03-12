import React from 'react';
import Header from './Menu/Header';

// Reusable Checkbox component with dynamic spacing
interface CheckboxProps {
    label: string;
    spacing: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, spacing }) => (
    <label className={`flex items-center ${spacing} cursor-pointer`}>
        <input
            type="checkbox"
            className="w-6 h-6 appearance-none border-1 border-black rounded-full checked:bg-black checked:border-transparent transition-all cursor-pointer relative peer"
        />
        <svg
            className="absolute w-6 h-6 text-yellow-400 hidden peer-checked:block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <g fill="none" fillRule="evenodd">
                <circle cx="12" cy="12" r="12" fill="#000" />
                <path
                    stroke="#EDB15D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 13.029L10.626 16 16 9"
                />
            </g>
        </svg>
        <span className='font-[Eina03-Regular] text-[14px] leading-6'>{label}</span>
    </label>
);

// Main Filter Component
const Filter = () => {
    const brandLabels = [
        "Joanna Cosmetic Laboratory",
        "Quiz Cosmetics",
        "Wibo",
        "NUBA",
        "Pudra Cosmetics",
        "NUBA",
        "NUBA",
    ];

    const categoryLabels = [
        "Hair Products",
        "Face",
        "Eyes",
        "Lips& Nails",
        "Skin Care",
        "For Men",
    ];

    return (
        <div className='w-[375px] h-[787] pb-10 bg-white'>
            <Header />

            <div className='h-12 mb-6 p-4 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.11)] '>
                <div className='h-full w-full flex flex-row items-center text-[16px] text-nowrap'>
                    <span className='w-[87px] font-[Eina03-Regular] text-[#555453] mr-16.5'>Clear filters</span>
                    <span className='w-11.5 font-[Eina03] text-black mr-[107px]'>Filters</span>
                    <span className='w-[41px] font-[Eina03] text-[#edb15d]'>Done</span>
                </div>
            </div>

            <div className='felx flex-col pl-4'>
                <div className='mb-[23px]'>
                    <span className='font-[Eina03-Bold] text-[13px] '>Brands</span>
                </div>
                <div className='flex flex-col gap-y-4 mb-[19px]'>
                    {brandLabels.map((label, index) => (
                        <Checkbox key={index} label={label} spacing="space-x-3" />
                    ))}
                </div>
                <div className='w-[343px] h-[1px] m-[7px_0px_11px] bg-[#E6E6E6]'></div>
                <div className='mb-[23px]'>
                    <span className='font-[Eina03-Bold] text-[13px] '>Categories</span>
                </div>
                <div className='flex flex-col gap-y-4 mb-[19px]'>
                    {categoryLabels.map((label, index) => (
                        <Checkbox key={index} label={label} spacing="space-x-6" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
