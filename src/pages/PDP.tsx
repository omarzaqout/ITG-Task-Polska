import React, { useState } from 'react'
import { products } from '../../public/data/data'
import ProductCard from '../components/Home/ProductCard'
import SectionBuy from '../components/PDP/section_Buy'
import { useMediaQuery } from 'react-responsive';

const colors = [
    { name: 'Caramel Glam', code: '#f68e88', id: 100 },
    { name: 'Truffle', code: '#c6616b', id: 101 },
    { name: 'Latte', image: '/assets/BgColor/latte-pic@3x.jpg', id: 102 },
    { name: 'Rose Cream', code: '#d84f5d', id: 103 },
    { name: 'Cappuccino', code: '#ae6a5f', id: 104 },
];

interface ColorItemProps {
    name: string;
    code?: string;
    image?: string;
    id: number;
}

const ColorItem: React.FC<ColorItemProps> = ({ name, code, image, id }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div
            className={`h-10 p-[11px_12px_11px_13px] text-center text-[14px] font-[Eina03-Regular] text-white flex items-center justify-center 
                 lg:h-[104px] lg:p-[37px_24px_40px] lg:mr-6 lg:flex lg:items-center lg:justify-between ${image ? 'lg:bg-center bg-cover bg-no-repeat' : ''}
                  ${isClicked ? 'lg:w-full w-[65px] lg:h-[136px]  max-lg:outline-1 max-lg:outline-[#bf040423]   max-lg:outline-offset-2 max-lg:shadow-2xl' : 'w-[65px] lg:w-[292px]'
                }`}
            style={image ? { backgroundImage: `url(${image})` } : { backgroundColor: code }}
            onClick={handleClick}
        >
            <div className="hidden text-[20px] font-[Eina03] leading-normal tracking-normal text-white lg:flex">{name}</div>

            {isClicked && (
                <div className="hidden w-[40px] h-[40px] p-[4px_3px_4px_5px] lg:flex items-center justify-center bg-white rounded-full">
                    <svg
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="24px"
                        height="24px"
                        viewBox="0 0 335.765 335.765"
                        style={{ fill: '#c6616b' }}
                        xmlSpace="preserve"
                    >
                        <g>
                            <g>
                                <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795  " />
                            </g>
                        </g>
                    </svg>
                </div>
            )}

            <span className="font-[Eina03-Regular] lg:text-[20px] lg:font-normal max-lg:font-[Eina03] lg:leading-normal lg:tracking-normal lg:text-right lg:text-white">
                {id}
            </span>
        </div>
    );
};

const PDP = () => {
    const isMobile = useMediaQuery({ maxWidth: 1024 });

    return (
        <>
            <div className="w-full h-[39px]  relative z-15 p-[8px_31px_7px_16px]  shadow-inner bg-white">
            </div>
            <div className='h-[1px] w-full border border-[#dbdbdb]'>
            </div>
            <div className='w-full  flex flex-col bg-white text-black '>

                {/*section 1 */}
                <div className='flex flex-col lg:flex-row lg:h-[689px]'>
                    {/* description of product */}
                    <div className='hidden lg:flex w-[1px] lg:order-3 h-full border border-[#dbdbdb]'>
                    </div>
                    <div className='flex flex-col order-1 lg:order-3 lg:flex-1/3 lg:p-[60px_107px_95px_84.5px] '>
                        <div className='flex flex-row justify-between px-4 mt-5 mb-2 lg:m-0 lg:mb-3 lg:p-0'>
                            <span className='w-[300px] font-[Eina03-Bold] text-[18px] leading-[24px] mr-[1px]'>
                                Joli Color Shine long lasting lipstick
                            </span>
                            <span className='w-10.5 font-[Eina03-Regular] text-[20px] text-right'>
                                $
                                <span className='font-[Eina03-Bold]'>
                                    25
                                </span>
                            </span>
                        </div>
                        <div className='flex flex-row justify-between px-4  mb-5 items-end lg:mb-[48px] lg:p-0'>
                            <span className='font-[Eina03] text-[16px] leading-[24px] mt-2 mr-[26px] text-[#dfa757] lg:m-0'>
                                Quiz Cosmetic
                            </span>
                            <span className='font-[Eina03-Regular] text-[14px] text-right leading-6 '>
                                Code
                                <span className='font-[Eina03] ml-1'>
                                    00148
                                </span>
                            </span>
                        </div>
                        <SectionBuy classNameR="hidden lg:flex lg:flex-col lg:p-0"
                            classNameQ='flex font-[Eina03] items-center justify-between mb-[48px]'

                        />
                    </div>
                    {/* img product ***/}
                    <div className='flex-col order-2 lg:flex-1/3 lg:justify-items-center lg:content-center'>
                        <div className='w-[375px] h-[330px] lg:h-[392px] lg:w-[393px] lg:p-0 lg:m-0 lg:shadow-none 
             shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1),_inset_0_-1px_0_0_rgba(0,0,0,0.1)]
             mb-4 p-[13px_32px_7px] '>
                            <img className='h-full w-full object-contain' src={isMobile
                                ? "/assets/BestSelling/Item-card/metallic-lip-gloss-copy@3x.png"
                                : "/assets/PDP/desktop/joli-color-matte-lipstick.jpg"
                            }
                                alt="Lipstick" />
                        </div>
                        <div className='flex flex-row gap-x-2 mb-[19px] justify-center lg:gap-x-3 lg:m-0 lg:mt-8'>
                            <span className='size-1.5 lg:size-2 bg-[#000000] rounded-full '></span>
                            <span className='size-1.5 lg:size-2 bg-[#000000] opacity-[0.37] rounded-full'></span>
                            <span className='size-1.5 lg:size-2 bg-[#000000] opacity-[0.37] rounded-full '></span>
                            <span className='size-1.5 lg:size-2 bg-[#000000] opacity-[0.37] rounded-full '></span>
                        </div>
                    </div>

                    {/* select color for product */}
                    <div className='px-4 order-3 lg:order-1 lg:w-[316px] lg:p-0 '>

                        <div className='mb-3 lg:hidden'>
                            <span className=' font-[Eina03] leading-[24px] text-[16px] mr-[59px]'>Color</span>
                        </div>
                        <div className='flex  lg:flex-col '>
                            <div className='w-[292px] h-[68px] bg-white box-shadow-[0_40px_43px_0_rgba(0,0,0,0.18)] p-[12px_124px] hover:cursor-pointer  hidden lg:flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44" height="44" viewBox="0 0 44 44">
                                    <defs>
                                        <filter id="prefix__a" width="157.9%" height="348.5%" x="-28.9%" y="-65.4%" filterUnits="objectBoundingBox">
                                            <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
                                            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="21.5" />
                                            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.175152972 0" />
                                        </filter>
                                        <path id="prefix__b" d="M0 208H292V276H0z" />
                                    </defs>
                                    <g fill="none" fill-rule="evenodd" transform="translate(-124 -220)">
                                        <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
                                        <use fill="#FFF" xlinkHref="#prefix__b" />
                                        <g stroke="#000" stroke-width="2.67">
                                            <path d="M16 19L22.069 25 28 19" transform="matrix(1 0 0 -1 124 264)" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className='flex gap-x-1 mb-6 lg:m-0 lg:flex-col lg:max-h-[553px] lg:overflow-auto'>
                                {colors.map((color) => (
                                    <ColorItem key={color.id} {...color} />
                                ))}
                            </div>
                            <div className='w-[292px] hidden lg:flex h-[68px] bg-white shadow-[0_-33px_27px_0_rgba(0,0,0,0.14),0_4px_49px_0_rgba(0,0,0,0.14)] p-[12px_124px] hover:cursor-pointer '>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="44" height="44" viewBox="0 0 44 44">
                                    <defs>
                                        <filter id="prefix__a" width="153.9%" height="354.4%" x="-27%" y="-132.4%" filterUnits="objectBoundingBox">
                                            <feOffset dy="-33" in="SourceAlpha" result="shadowOffsetOuter1" />
                                            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="13.5" />
                                            <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.136227054 0" />
                                            <feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter2" />
                                            <feGaussianBlur in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="24.5" />
                                            <feColorMatrix in="shadowBlurOuter2" result="shadowMatrixOuter2" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                                            <feMerge>
                                                <feMergeNode in="shadowMatrixOuter1" />
                                                <feMergeNode in="shadowMatrixOuter2" />
                                            </feMerge>
                                        </filter>
                                        <path id="prefix__b" d="M-1 828H292V896H-1z" />
                                    </defs>
                                    <g fill="none" fill-rule="evenodd" transform="translate(-124 -840)">
                                        <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
                                        <use fill="#FFF" xlinkHref="#prefix__b" />
                                        <g stroke="#000" stroke-width="2.67">
                                            <path d="M16 19L22.069 25 28 19" transform="translate(124 840)" />
                                        </g>
                                    </g>
                                </svg>

                            </div>
                        </div>

                    </div>
                    <div className='flex h-[1px] w-[375px] border border-solid lg:hidden opacity-[0.1] order-4 mb-6 border-black '>

                    </div>
                    <SectionBuy classNameR="flex flex-col lg:hidden order-4"
                        classNameQ='flex px-4 flex-row mb-6 justify-between items-center order-4 font-[Eina03] leading-[24px] text-[16px]'
                        classNameB='w-full  px-4 order-5 flex-col' />
                </div>
                {/*Product Details*/}
                <div className='h-[430px] w-full mb-[60px] p-[60px_16px_60px_15px] lg:mb-[87px] bg-[url("/assets/PDP/product-details-bg.png")]
                 lg:bg-[url("/assets/PDP/desktop/product-details-bg.png")] bg-no-repeat bg-cover order-5
                 lg:h-[365px] lg:border-y border-[#dbdbdb] lg:p-[84px_0_0_316px]
                 '>
                    <div className='m-[0_1px_20px_0] font-[CochinBold] text-[32px] leading-[56px] text-[#000000]
                    lg:text-[48px] lg:font-[CochinBold] lg:leading-[1.17] lg:ml-[1px] lg:m-0 lg:mb-[26px]
                    '>
                        <span>Product Details</span>
                    </div>
                    <div className='m-[20px_68px_0_0] font-[Eina03] text-[16px] leading-[24px] text-[#000000]
                    lg:text-[22px] lg:mb-[6px]
                    '>
                        <span>Joli Color Matte long lasting lipstick</span>
                    </div>
                    <div className='h-[202px] w-[344px] font-[Eina03-Regular] text-[16px] leading-[28px] text-[#000000]
                    lg:w-[807px] lg:leading-[1.75]
                    '>
                        <p>
                            Creamy texture of this matte lipstick gives
                            comfort and confidence for a long time.
                            Saves shade intensity for all day without leaking.
                            It contains Vitamin E, which will kepp your lips soft,
                            supple and moisturized. These sensual lip colors are perfect for daily or evening wear.
                        </p>
                    </div>
                </div>
                {/* Related & Card */}
                <div className='flex flex-col mb-[60px] pl-4 order-6 lg:mb-[76px] lg:pl-[316px] '>

                    {/* Related Item*/}
                    <div className='flex flex-row justify-between mb-3.5 h-[46px] items-center lg:mb-[40px]  lg:pr-[108px]'>
                        <span className='font-[CochinBold] text-[32px] leading-[56px] mr-[15px]'>Related Items</span>
                        <div className='flex flex-row h-6 items-center'>
                            <div className='h-6'>
                                <span className='font-[Eina03-Bold] text-[14px] h-4 leading-[16px] tracking-[1px] mb-[5px] mt-[3px] '>VIEW ALL</span>
                            </div>
                            <div className='p-[6px_5px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M79 13.051L79 10.873 89.722 10.873 87.193 7.089 89.155 6 93 12 89.155 18 87.213 16.911 89.722 13.051z" transform="translate(-74)" />
                                </svg>
                            </div>

                        </div>
                    </div>
                    {/* Card Items*/}
                    <div className="flex flex-row max-lg:h-[284px] w-full  overflow-auto scrollbar-hide ">
                        {/*Card*/}
                        {products.map((product, index) => (
                            <ProductCard key={index} brand={product.brand} name={product.name} img={product.image} />
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default PDP