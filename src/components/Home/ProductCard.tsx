import React from 'react'
import { CardProps } from '../../interfaces/interfaces'

const ProductCard: React.FC<CardProps> = ({ name, brand, img }) => {
    return (
        <div
            className="flex flex-col min-w-[166px] w-[166px] bg-[#ffffff] border-[#cecece] border-[0.6px] border-solid mr-[11px]
                pt-[7px] pr-2 pb-3 pl-2.5 relative
                lg:min-w-[288px] items-center lg:mr-6
                lg:relative lg:p-[8px_10px_32px_16px]
                hover:cursor-pointer lg:h-[468px]
                "
        >
            <div className='flex justify-center w-[71px] h-[148px] mb-[13px] lg:w-[252px] lg:h-[252px] lg:m-[8px_10px_12px_2px] relative z-10'>
                <img
                    src={img}
                    alt={name}
                    className='object-contain mix-blend-darken lg:w-[252px] lg:h-[252px]'
                />
            </div>
            <div className="group size-8 border-solid flex items-center mt-[1px] mr-0  p-2 border-[1px] 
            absolute z-10 right-2
            lg:right-2 lg:top-2 border-[#000] rounded-full bg-white hover:bg-black
            lg:size-10 lg:p-3 
            "
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="object-contain" viewBox="0 0 16 16">
                    <g fill="none" fill-rule="evenodd" stroke="#000000" className='group-hover:stroke-[#EDB15D]' stroke-linecap="round" stroke-linejoin="round">
                        <path d="M7 2c1.657 0 3 1.343 3 3h0-6c0-1.657 1.343-3 3-3zM5 2c0-1.105.895-2 2-2s2 .895 2 2M0 5h14l-.857 6.857c-.052.411-.108.556-.202.7-.093.145-.218.256-.373.33-.155.075-.306.113-.72.113H2.152c-.414 0-.565-.038-.72-.113-.155-.074-.28-.185-.373-.33-.094-.144-.15-.289-.202-.7L0 5h0z" transform="translate(1 2)" />
                        <path d="M4.615 2H2.854c-.333 0-.452.02-.58.065-.13.045-.24.113-.338.208C1.871 2.337 1.226 3.246 0 5h14c-1.226-1.754-1.871-2.663-1.936-2.727-.098-.095-.208-.163-.337-.208-.129-.044-.248-.065-.58-.065H9.312" transform="translate(1 2)" />
                    </g>
                </svg>
            </div>
            {/*Name*/}
            <div className="w-[147px] h-[32px] m-[0_1px_12px_0] font-[Eina03] text-[12px] font-semibold leading-[1.5] tracking-[0.23px] text-center content-center text-black
            lg:w-[256px] lg:h-6 lg:m-[0px_8px_40px_0] lg:text-[16px] lg:tracking-[0.3px]
            ">
                <span>{name}</span>
            </div>
            <div className="w-[138px] h-[1px] m-[0_6px_11px_4px] border-solid border-[1px] border-[#000] opacity-[0.1]
            lg:w-[240px] lg:m-[0_16px_16px_8px]
            "></div>

            {/*Brand*/}
            <div className="w-[110px] h-[26px] m-[0px_20px_2px_18px] font-[Eina03-Regular] text-[11px] font-normal leading-[1.18] tracking-[0.37px] text-center text-black
            lg:w-full lg:leading-[24px] lg:tracking-[0.4px] lg:text-[12px]
            ">
                <span>{brand}</span>
            </div>
            {/*Product Line*/}
            <div className="w-[142px] h-[20px] m-[0_4px_0_2px] p-[6px_1px_11.2px_2px] font-[Eina03-Bold] text-[14px] leading-[0.64] tracking-[0.5px] text-center text-black">

                <span className="flex flex-col items-center h-[2.8px] w-[139px] relative
                lg:mt-[35px]
                ">
                    <span className=" absolute lg:hidden">Line PRODUCTS</span>
                    <span className='hidden text-nowrap lg:flex lg:h-4 lg:w-[256px] justify-center'> PRODUCTS FROM THE LINE</span>
                </span>
            </div>

        </div>
    )
}

export default ProductCard
