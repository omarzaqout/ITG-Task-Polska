import React from 'react'
import { products } from '../../public/data/data'
import ProductCard from '../components/Home/ProductCard'

const PDP = () => {
    return (
        <>
            <div className='w-[375px]  flex flex-col bg-white text-black lg:hidden'>
                <div className='flex flex-row justify-between px-4 mt-5 mb-2'>
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
                <div className='flex flex-row justify-between px-4  mb-5 items-end'>
                    <span className='font-[Eina03] text-[16px] leading-[24px] mt-2 mr-[26px] text-[#dfa757] '>
                        Quiz Cosmetic
                    </span>
                    <span className='font-[Eina03-Regular] text-[14px] text-right leading-6 '>
                        Code
                        <span className='font-[Eina03] ml-1'>
                            00148
                        </span>
                    </span>
                </div>
                {/* mask*/}
                <div className='w-[375px] h-[330px]
             shadow-[inset_0_1px_0_0_rgba(0,0,0,0.1),_inset_0_-1px_0_0_rgba(0,0,0,0.1)]
             mb-4 p-[13px_32px_7px] '>
                    <img className='h-full w-full object-contain' src='/assets/BestSelling/Item-card/metallic-lip-gloss-copy@3x.png' />
                </div>
                <div className='flex flex-row gap-x-2 mb-[19px] justify-center '>
                    <span className='w-1.5 h-1.5 bg-[#000000] rounded-full '></span>
                    <span className='w-1.5 h-1.5 bg-[#000000] opacity-[0.37] rounded-full'></span>
                    <span className='w-1.5 h-1.5 bg-[#000000] opacity-[0.37] rounded-full '></span>
                    <span className='w-1.5 h-1.5 bg-[#000000] opacity-[0.37] rounded-full '></span>
                </div>

                {/* Color */}
                <div className='px-4 '>
                    <div className='mb-3'>
                        <span className=' font-[Eina03] leading-[24px] text-[16px] mr-[59px]'>Color</span>
                    </div>
                    <div className='flex flex-row gap-x-1 mb-6'>
                        <div className='w-[65px] h-10 p-[11px_12px_11px_13px] bg-[#f68e88] text-center text-[14px] font-[Eina03-Regular] text-white flex items-center justify-center'>
                            <span className=''>100</span>
                        </div>
                        <div className='w-[65px] h-10 p-[11px_12px_11px_13px] bg-[#c6616b] text-center text-[14px] font-[Eina03-Regular] text-white flex items-center justify-center'>
                            <span className=''>101</span>
                        </div>
                        <div className='w-[65px] h-10 p-[11px_12px_11px_13px] bg-[url("/assets/BgColor/latte-pic.png")]
                     border border-[#bf0404] relative bg-no-repeat
                     bg-center text-[14px] font-[Eina03-Regular] text-white flex items-center justify-center'>
                            <span className=''>102</span>

                        </div>
                        <div className='w-[65px] h-10 p-[11px_12px_11px_13px] bg-[#d84f5d] text-center text-[14px] font-[Eina03-Regular] text-white flex items-center justify-center'>
                            <span className=''>103</span>
                        </div>
                        <div className='w-[65px] h-10 p-[11px_12px_11px_13px] bg-[#ae6a5f] text-center text-[14px] font-[Eina03-Regular] text-white flex items-center justify-center'>
                            <span className=''>104</span>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#000000] opacity-[0.1] mb-4'></div>
                <div className='px-4 flex flex-row mb-6 justify-between items-center'>
                    <div className='w-[80px] '>
                        <span className='font-[Eina03] leading-[24px] text-[16px] mr-[59px]'>Quantity</span>
                    </div>
                    <div className='flex  gap-x-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <g fill="none" fill-rule="evenodd">
                                <path fill="#FFF" d="M0 0H375V2784H0z" transform="translate(-163 -869)" />
                                <g transform="translate(-163 -869) translate(163 869)">
                                    <circle cx="20" cy="20" r="19.5" fill="#FFF" stroke="#000" />
                                    <path fill="#000" d="M14 19H27V21H14z" />
                                </g>
                            </g>
                        </svg>
                        <div className="w-[68px] h-10 py-[9px] pr-[27px] pl-[28px] text-center relative flex justify-center ">
                            <div className="absolute inset-0 bg-[#d8d8d8] opacity-30"></div>
                            <span className="h-[22px] w-[13px] relative font-[Eina03] text-[22px] flex items-center">3</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <g fill="none" fill-rule="evenodd">
                                <path fill="#FFF" d="M0 0H375V2784H0z" transform="translate(-319 -869)" />
                                <g transform="translate(-319 -869) translate(319 869)">
                                    <circle cx="20" cy="20" r="20" fill="#000" />
                                    <path fill="#F9D996" d="M14 19H27V21H14z" />
                                    <path fill="#F9D996" d="M14 19H27V21H14z" transform="rotate(90 20.5 20)" />
                                </g>
                            </g>
                        </svg>


                    </div>
                </div>

                <div className='w-full px-4 '>
                    <button className='w-full h-[64px] bg-[#edb15d] p-[24px_151px] font-[Eina03-Bold] text-[16px] leading-[24px] mb-4'>
                        <span className='text-[16px] leading-[16px] tracking-[1.29px] items-center flex'>BUY</span>
                    </button>
                    <button className='w-full h-[64px] px-[97px] py-[16px] font-[Eina03-Bold]
                 text-[14px] leading-[16px] mb-10 border border-black tracking-[1px]
                  flex flex-row justify-center items-center flex-nowrap text-nowrap 
                  gap-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".9">
                                <path d="M14 4c3.314 0 6 2.686 6 6h0H8c0-3.314 2.686-6 6-6zM10 4c0-2.21 1.79-4 4-4s4 1.79 4 4M0 10h28l-1.714 13.714c-.103.822-.217 1.112-.403 1.4-.186.29-.437.511-.747.66-.31.15-.611.226-1.44.226H4.304c-.829 0-1.13-.077-1.44-.226-.31-.149-.56-.37-.747-.66-.186-.288-.3-.578-.403-1.4L0 10h0z" transform="translate(2 4)" />
                                <path d="M9.229 4H5.707c-.664 0-.904.042-1.16.13-.258.09-.48.227-.674.417C3.743 4.674 2.452 6.491 0 10h28c-2.452-3.509-3.743-5.326-3.873-5.453-.195-.19-.416-.327-.673-.416-.257-.09-.497-.131-1.161-.131h-3.667" transform="translate(2 4)" />
                            </g>
                        </svg>
                        <div className='mt-[8px]'>
                            <span>ADD TO CART</span>
                        </div>
                    </button>
                    <div className='flex flex-row h-7 font-[Eina03] text-[16px] leading-6 mb-8'>
                        <div className='mr-1 mb-1 flex '>
                            <span className='w-[50px] h-6 '>Rating</span>
                        </div>
                        <div className='mr-[15px]'>
                            <span className='w-9 h-7'>(32)</span>
                        </div>
                        <div className='flex flex-row gap-x-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#FFFFFFFF" stroke='#EDB15D' strokeWidth={1} d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                            </svg>


                        </div>
                    </div>
                    <div className=' font-[Eina03] text-[14px] h-[16px] leading-4 tracking-[0.6px] mb-[17px] mr-1'>
                        <span>SHARE</span>
                    </div>
                    <div className='flex flex-row gap-x-[27px] mb-[33px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <path fill-rule="evenodd" d="M14.956 28H1.546C.691 28 0 27.308 0 26.455V1.545C0 .692.692 0 1.545 0h24.91C27.308 0 28 .692 28 1.545v24.91c0 .853-.692 1.545-1.545 1.545H19.32V17.157h3.64l.544-4.226H19.32v-2.698c0-1.223.34-2.057 2.094-2.057l2.237-.001v-3.78c-.387-.051-1.715-.166-3.26-.166-3.227 0-5.435 1.97-5.435 5.586v3.116h-3.65v4.226h3.65V28z" />
                        </svg>
                        <div className='my-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">
                                <path fill-rule="evenodd" d="M28 2.841c-1.029.482-2.137.808-3.298.954 1.186-.75 2.097-1.937 2.526-3.351-1.111.693-2.34 1.198-3.65 1.468C22.531.735 21.037 0 19.384 0c-3.17 0-5.742 2.713-5.742 6.059 0 .474.049.936.147 1.38-4.774-.254-9.006-2.663-11.84-6.333-.496.898-.778 1.94-.778 3.05 0 2.1 1.014 3.955 2.555 5.042-.94-.03-1.827-.305-2.603-.756v.075c0 2.936 1.98 5.385 4.61 5.94-.481.142-.99.213-1.514.213-.37 0-.73-.036-1.08-.107.73 2.406 2.85 4.159 5.365 4.205-1.966 1.626-4.444 2.595-7.134 2.595-.464 0-.922-.027-1.371-.083C2.542 22.996 5.563 24 8.806 24 19.373 24 25.15 14.77 25.15 6.762c0-.263-.005-.527-.015-.785 1.123-.855 2.097-1.92 2.865-3.136" />
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <path fill-rule="evenodd" d="M14 0C6.27 0 0 6.268 0 14c0 5.732 3.448 10.658 8.382 12.823-.04-.976-.007-2.152.242-3.216.27-1.136 1.8-7.627 1.8-7.627s-.445-.894-.445-2.216c0-2.075 1.203-3.624 2.7-3.624 1.272 0 1.888.957 1.888 2.102 0 1.28-.816 3.194-1.236 4.968-.35 1.486.744 2.696 2.21 2.696 2.652 0 4.438-3.406 4.438-7.443 0-3.067-2.066-5.364-5.825-5.364-4.246 0-6.892 3.166-6.892 6.703 0 1.221.36 2.08.922 2.746.26.308.295.43.201.782-.066.255-.22.877-.285 1.123-.094.354-.38.482-.7.35-1.957-.798-2.868-2.94-2.868-5.349 0-3.976 3.354-8.747 10.006-8.747 5.345 0 8.864 3.87 8.864 8.021 0 5.492-3.053 9.595-7.556 9.595-1.51 0-2.932-.816-3.42-1.743 0 0-.812 3.225-.984 3.847-.296 1.079-.877 2.159-1.409 2.998 1.26.372 2.59.575 3.968.575C21.732 28 28 21.732 28 14S21.732 0 14 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <path fill-rule="evenodd" d="M14 0c3.802 0 4.279.016 5.772.084 1.49.068 2.508.305 3.399.651.92.358 1.7.836 2.48 1.615.778.778 1.256 1.559 1.614 2.48.346.89.583 1.908.65 3.398C27.985 9.72 28 10.198 28 14c0 3.802-.016 4.279-.084 5.772-.068 1.49-.305 2.508-.651 3.399-.358.92-.836 1.7-1.615 2.48-.778.778-1.559 1.256-2.48 1.614-.89.346-1.908.583-3.398.65-1.493.069-1.97.085-5.772.085-3.802 0-4.279-.016-5.772-.084-1.49-.068-2.508-.305-3.399-.651-.92-.358-1.7-.836-2.48-1.615-.778-.778-1.256-1.559-1.614-2.48-.346-.89-.583-1.908-.65-3.398C.015 18.28 0 17.802 0 14c0-3.802.016-4.279.084-5.772.068-1.49.305-2.508.651-3.399.358-.92.836-1.7 1.615-2.48.778-.778 1.559-1.256 2.48-1.614.89-.346 1.908-.583 3.398-.65C9.72.015 10.198 0 14 0zm0 2.523c-3.738 0-4.181.014-5.657.081-1.365.062-2.106.29-2.6.482-.653.254-1.12.558-1.61 1.047-.49.49-.793.957-1.047 1.61-.192.494-.42 1.235-.482 2.6-.067 1.476-.081 1.919-.081 5.657s.014 4.181.081 5.657c.062 1.365.29 2.106.482 2.6.254.653.558 1.12 1.047 1.61.49.49.957.793 1.61 1.047.494.192 1.235.42 2.6.482 1.476.067 1.919.081 5.657.081s4.181-.014 5.657-.081c1.365-.062 2.106-.29 2.6-.482.653-.254 1.12-.558 1.61-1.047.49-.49.793-.957 1.047-1.61.192-.494.42-1.235.482-2.6.067-1.476.081-1.919.081-5.657s-.014-4.181-.081-5.657c-.062-1.365-.29-2.106-.482-2.6-.254-.653-.558-1.12-1.047-1.61-.49-.49-.957-.793-1.61-1.047-.494-.192-1.235-.42-2.6-.482-1.476-.067-1.919-.081-5.657-.081zM6.81 14c0-3.97 3.22-7.19 7.19-7.19s7.19 3.22 7.19 7.19-3.22 7.19-7.19 7.19S6.81 17.97 6.81 14zM14 18.667c2.577 0 4.667-2.09 4.667-4.667S16.577 9.333 14 9.333 9.333 11.423 9.333 14s2.09 4.667 4.667 4.667zm9.153-12.14c0 .928-.752 1.68-1.68 1.68-.928 0-1.68-.752-1.68-1.68 0-.928.752-1.68 1.68-1.68.928 0 1.68.752 1.68 1.68z" />
                        </svg>
                    </div>
                </div>
                <div className='h-[430px] w-full mb-[60px] p-[60px_16px_60px_15px] bg-[url("/assets/PDP/product-details-bg.png")] bg-no-repeat bg-cover'>
                    <div className='m-[0_1px_20px_0] font-[CochinBold] text-[32px] leading-[56px] text-[#000000]'>
                        <span>Product Details</span>
                    </div>
                    <div className='m-[20px_68px_0_0] font-[Eina03] text-[16px] leading-[24px] text-[#000000]'>
                        <span>Joli Color Matte long lasting lipstick</span>
                    </div>
                    <div className='h-[202px] w-[344px] font-[Eina03-Regular] text-[16px] leading-[28px] text-[#000000]'>
                        <p>
                            Creamy texture of this matte lipstick gives
                            comfort and confidence for a long time.
                            Saves shade intensity for all day without leaking.
                            It contains Vitamin E, which will kepp your lips soft,
                            supple and moisturized. These sensual lip colors are perfect for daily or evening wear.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col mb-[60px] px-4'>
                    <div className='flex flex-row justify-between mb-3.5 h-[46px] items-center'>
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
                    <div className="flex flex-row h-[284px] w-full  overflow-auto scrollbar-hide">
                        {/*Card*/}
                        {products.map((product, index) => (
                            <ProductCard key={index} brand={product.brand} name={product.name} img={product.image} />
                        ))}
                    </div>
                </div>


            </div >
            <div className=' hidden w-full  text-black lg:flex lg:flex-col'>
                <div className="w-[375px] lg:w-full h-[39px] absolute lg:relative z-15 p-[8px_31px_7px_16px]  shadow-inner bg-white">


                </div>
                <div className='h-[1px] w-full border border-[#dbdbdb]'>

                </div>
                <div className='flex h-[689px] '>
                    <div className='flex-col w-[316px] '>
                        <div className='w-[292px] h-[68px] bg-white box-shadow-[0_40px_43px_0_rgba(0,0,0,0.18)] p-[12px_124px] hover:cursor-pointer '>
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
                        <div className="w-[292px] h-[104px] p-[37px_24px_40px] mr-6 bg-[#f68e88] flex items-center justify-between">
                            <div className="text-[20px] font-[Eina03] leading-normal tracking-normal text-white">
                                Caramel Glam
                            </div>
                            <span className="text-[20px] font-normal font-[Eina03] leading-normal tracking-normal text-right text-white">
                                100
                            </span>
                        </div>
                        <div className="w-[292px] h-[104px] p-[37px_24px_40px] mr-6 bg-[#c6616b] flex items-center justify-between">
                            <div className="text-[20px] font-[Eina03] leading-normal tracking-normal text-white">
                                Truffle
                            </div>
                            <span className="text-[20px] font-normal font-[Eina03] leading-normal tracking-normal text-right text-white">
                                101
                            </span>
                        </div>
                        <div className={`w-full h-[136px] p-[37px_24px_40px] mr-6 bg-[url("/assets/BgColor/latte-pic@3x.jpg")] bg-center bg-cover bg-no-repeat flex items-center justify-between`}>
                            <div className="text-[20px] font-[Eina03] leading-normal tracking-normal text-white">
                                Latte
                            </div>
                            <div className="w-[40px] h-[40px] p-[4px_3px_4px_5px] flex items-center justify-center bg-white rounded-full">
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

                            <span className="text-[20px] font-normal font-[Eina03] leading-normal tracking-normal text-right text-white">
                                102
                            </span>
                        </div>
                        <div className="w-[292px] h-[104px] p-[37px_24px_40px] mr-6 bg-[#d84f5d] flex items-center justify-between">
                            <div className="text-[20px] font-[Eina03] leading-normal tracking-normal text-white">
                                Rose Cream
                            </div>
                            <span className="text-[20px] font-normal font-[Eina03] leading-normal tracking-normal text-right text-white">
                                103
                            </span>
                        </div>
                        <div className="w-[292px] h-[104px] p-[37px_24px_40px] mr-6 bg-[#ae6a5f] flex items-center justify-between">
                            <div className="text-[20px] font-[Eina03] leading-normal tracking-normal text-white">
                                Cappuccino
                            </div>
                            <span className="text-[20px] font-normal font-[Eina03] leading-normal tracking-normal text-right text-white">
                                104
                            </span>
                        </div>
                        <div className='w-[292px] h-[68px] bg-white shadow-[0_-33px_27px_0_rgba(0,0,0,0.14),0_4px_49px_0_rgba(0,0,0,0.14)] p-[12px_124px] hover:cursor-pointer '>
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
                    <div className='flex-1/3  flex-col justify-items-center content-center'>
                        <div className='h-[392px] w-[393px]'>
                            <img className='h-[392px] w-[393px]' src='/assets/PDP/desktop/joli-color-matte-lipstick.jpg' />
                        </div>
                        <div className='flex flex-row gap-x-3  mt-[32px] '>
                            <span className='size-2 bg-[#000000] rounded-full '></span>
                            <span className='size-2 bg-[#000000] opacity-[0.37] rounded-full'></span>
                            <span className='size-2 bg-[#000000] opacity-[0.37] rounded-full '></span>
                            <span className='size-2 bg-[#000000] opacity-[0.37] rounded-full '></span>
                        </div>

                    </div>
                    <div className='w-[1px] h-full border border-[#dbdbdb]'>

                    </div>
                    <div className='flex-1/3  flex-col p-[60px_107px_95px_84.5px]'>
                        <div className='flex justify-between mb-3'>
                            <span className="w-[300px] h-[48px] font-[Eina03-Bold] text-[18px]  leading-[1.33] text-black">
                                Joli Color Shine long lasting lipstick
                            </span>
                            <span className='font-[Eina03-Regular] text-[20px]  leading-normal text-right '>
                                $
                                <span className='font-[Eina03-Bold]'>
                                    50
                                </span>
                            </span>

                        </div>
                        <div className='flex justify-between font-[Eina03] mb-[48px]'>
                            <span className=' leading-[24px] text-[#dfa757] '>
                                Quiz Cosmetic
                            </span>
                            <div className="flex items-center text-[14px] ">
                                <span className="font-[Eina03-Regular] mr-1 ">Code</span>
                                <span className="font-[Eina03]">00148</span>
                            </div>

                        </div>
                        <div className='flex font-[Eina03] items-center justify-between mb-[48px]'>
                            <span className=' '>Quantity</span>
                            <div className='flex justify-between'>
                                <div className='mr-6 hover:cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <circle cx="20" cy="20" r="19.5" fill="#FFF" stroke="#000" />
                                            <path fill="#000" d="M14 19H27V21H14z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="w-[68px] h-[40px] mr-6 p-[6px_27.5px_4px] bg-[rgba(216,216,216,0.31)] text-center">
                                    <span>3</span>
                                </div>

                                <div className='hover:cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(-319 -869) translate(319 869)">
                                                <circle cx="20" cy="20" r="20" fill="#000" />
                                                <path fill="#F9D996" d="M14 19H27V21H14z" />
                                                <path fill="#F9D996" d="M14 19H27V21H14z" transform="rotate(90 20.5 20)" />
                                            </g>
                                        </g>
                                    </svg>

                                </div>



                            </div>

                        </div>
                        <div className="w-full h-[64px] p-[24px_164px] bg-[#edb15d] flex items-center justify-center mb-4">
                            <span className='font-[Eina03-Bold] text-[18px] leading-[0.89] tracking-[1.29px] uppercase'>Buy</span>
                        </div>
                        <div className="w-[369px] h-[64px] p-[16px_110px] border border-black flex items-center justify-center mb-[48px]">
                            <div className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".9">
                                    <path d="M14 4c3.314 0 6 2.686 6 6h0H8c0-3.314 2.686-6 6-6zM10 4c0-2.21 1.79-4 4-4s4 1.79 4 4M0 10h28l-1.714 13.714c-.103.822-.217 1.112-.403 1.4-.186.29-.437.511-.747.66-.31.15-.611.226-1.44.226H4.304c-.829 0-1.13-.077-1.44-.226-.31-.149-.56-.37-.747-.66-.186-.288-.3-.578-.403-1.4L0 10h0z" transform="translate(2 4)" />
                                    <path d="M9.229 4H5.707c-.664 0-.904.042-1.16.13-.258.09-.48.227-.674.417C3.743 4.674 2.452 6.491 0 10h28c-2.452-3.509-3.743-5.326-3.873-5.453-.195-.19-.416-.327-.673-.416-.257-.09-.497-.131-1.161-.131h-3.667" transform="translate(2 4)" />
                                </g>
                            </svg>
                            </div>
                            <span className="font-[Eina03-Bold] text-[14px] tracking-[1px] text-center text-black">
                                Add to Cart
                            </span>
                        </div>
                        <div className='flex flex-row h-7 font-[Eina03] text-[16px] leading-6 mb-8'>
                            <div className='mr-1 mb-1 flex '>
                                <span className='w-[50px] h-6 '>Rating</span>
                            </div>
                            <div className='mr-[15px]'>
                                <span className='w-9 h-7'>(32)</span>
                            </div>
                            <div className='flex flex-row gap-x-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path fill="#EDB15D" d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                    <path fill="#FFFFFFFF" stroke='#EDB15D' strokeWidth={1} d="M10.57.43l2.142 6.646 6.692.081c.576.007.814.777.352 1.137l-5.369 4.188 1.995 6.697c.171.576-.452 1.051-.922.702L10 15.823 4.54 19.88c-.469.35-1.093-.126-.922-.702l1.995-6.697-5.37-4.188c-.461-.36-.223-1.13.353-1.136l6.692-.082L9.43.43c.184-.572.956-.572 1.14 0z" />
                                </svg>


                            </div>
                        </div>
                        <div className=' font-[Eina03] text-[14px] h-[16px] leading-4 tracking-[0.6px] mb-[17px] mr-1'>
                            <span>SHARE</span>
                        </div>
                        <div className='flex flex-row gap-x-[27px] mb-[33px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <path fill-rule="evenodd" d="M14.956 28H1.546C.691 28 0 27.308 0 26.455V1.545C0 .692.692 0 1.545 0h24.91C27.308 0 28 .692 28 1.545v24.91c0 .853-.692 1.545-1.545 1.545H19.32V17.157h3.64l.544-4.226H19.32v-2.698c0-1.223.34-2.057 2.094-2.057l2.237-.001v-3.78c-.387-.051-1.715-.166-3.26-.166-3.227 0-5.435 1.97-5.435 5.586v3.116h-3.65v4.226h3.65V28z" />
                            </svg>
                            <div className='my-0.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24">
                                    <path fill-rule="evenodd" d="M28 2.841c-1.029.482-2.137.808-3.298.954 1.186-.75 2.097-1.937 2.526-3.351-1.111.693-2.34 1.198-3.65 1.468C22.531.735 21.037 0 19.384 0c-3.17 0-5.742 2.713-5.742 6.059 0 .474.049.936.147 1.38-4.774-.254-9.006-2.663-11.84-6.333-.496.898-.778 1.94-.778 3.05 0 2.1 1.014 3.955 2.555 5.042-.94-.03-1.827-.305-2.603-.756v.075c0 2.936 1.98 5.385 4.61 5.94-.481.142-.99.213-1.514.213-.37 0-.73-.036-1.08-.107.73 2.406 2.85 4.159 5.365 4.205-1.966 1.626-4.444 2.595-7.134 2.595-.464 0-.922-.027-1.371-.083C2.542 22.996 5.563 24 8.806 24 19.373 24 25.15 14.77 25.15 6.762c0-.263-.005-.527-.015-.785 1.123-.855 2.097-1.92 2.865-3.136" />
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <path fill-rule="evenodd" d="M14 0C6.27 0 0 6.268 0 14c0 5.732 3.448 10.658 8.382 12.823-.04-.976-.007-2.152.242-3.216.27-1.136 1.8-7.627 1.8-7.627s-.445-.894-.445-2.216c0-2.075 1.203-3.624 2.7-3.624 1.272 0 1.888.957 1.888 2.102 0 1.28-.816 3.194-1.236 4.968-.35 1.486.744 2.696 2.21 2.696 2.652 0 4.438-3.406 4.438-7.443 0-3.067-2.066-5.364-5.825-5.364-4.246 0-6.892 3.166-6.892 6.703 0 1.221.36 2.08.922 2.746.26.308.295.43.201.782-.066.255-.22.877-.285 1.123-.094.354-.38.482-.7.35-1.957-.798-2.868-2.94-2.868-5.349 0-3.976 3.354-8.747 10.006-8.747 5.345 0 8.864 3.87 8.864 8.021 0 5.492-3.053 9.595-7.556 9.595-1.51 0-2.932-.816-3.42-1.743 0 0-.812 3.225-.984 3.847-.296 1.079-.877 2.159-1.409 2.998 1.26.372 2.59.575 3.968.575C21.732 28 28 21.732 28 14S21.732 0 14 0" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <path fill-rule="evenodd" d="M14 0c3.802 0 4.279.016 5.772.084 1.49.068 2.508.305 3.399.651.92.358 1.7.836 2.48 1.615.778.778 1.256 1.559 1.614 2.48.346.89.583 1.908.65 3.398C27.985 9.72 28 10.198 28 14c0 3.802-.016 4.279-.084 5.772-.068 1.49-.305 2.508-.651 3.399-.358.92-.836 1.7-1.615 2.48-.778.778-1.559 1.256-2.48 1.614-.89.346-1.908.583-3.398.65-1.493.069-1.97.085-5.772.085-3.802 0-4.279-.016-5.772-.084-1.49-.068-2.508-.305-3.399-.651-.92-.358-1.7-.836-2.48-1.615-.778-.778-1.256-1.559-1.614-2.48-.346-.89-.583-1.908-.65-3.398C.015 18.28 0 17.802 0 14c0-3.802.016-4.279.084-5.772.068-1.49.305-2.508.651-3.399.358-.92.836-1.7 1.615-2.48.778-.778 1.559-1.256 2.48-1.614.89-.346 1.908-.583 3.398-.65C9.72.015 10.198 0 14 0zm0 2.523c-3.738 0-4.181.014-5.657.081-1.365.062-2.106.29-2.6.482-.653.254-1.12.558-1.61 1.047-.49.49-.793.957-1.047 1.61-.192.494-.42 1.235-.482 2.6-.067 1.476-.081 1.919-.081 5.657s.014 4.181.081 5.657c.062 1.365.29 2.106.482 2.6.254.653.558 1.12 1.047 1.61.49.49.957.793 1.61 1.047.494.192 1.235.42 2.6.482 1.476.067 1.919.081 5.657.081s4.181-.014 5.657-.081c1.365-.062 2.106-.29 2.6-.482.653-.254 1.12-.558 1.61-1.047.49-.49.793-.957 1.047-1.61.192-.494.42-1.235.482-2.6.067-1.476.081-1.919.081-5.657s-.014-4.181-.081-5.657c-.062-1.365-.29-2.106-.482-2.6-.254-.653-.558-1.12-1.047-1.61-.49-.49-.957-.793-1.61-1.047-.494-.192-1.235-.42-2.6-.482-1.476-.067-1.919-.081-5.657-.081zM6.81 14c0-3.97 3.22-7.19 7.19-7.19s7.19 3.22 7.19 7.19-3.22 7.19-7.19 7.19S6.81 17.97 6.81 14zM14 18.667c2.577 0 4.667-2.09 4.667-4.667S16.577 9.333 14 9.333 9.333 11.423 9.333 14s2.09 4.667 4.667 4.667zm9.153-12.14c0 .928-.752 1.68-1.68 1.68-.928 0-1.68-.752-1.68-1.68 0-.928.752-1.68 1.68-1.68.928 0 1.68.752 1.68 1.68z" />
                            </svg>
                        </div>


                    </div>

                </div>
                <div className='flex flex-col w-full h-[365px] bg-[url("/assets/PDP/desktop/product-details-bg.png")] border-y border-[#dbdbdb] p-[84px_0_0_316px] '>
                    <div className=" text-[48px] font-[CochinBold] leading-[1.17] ml-[1px] mb-[26px] ">
                        Product Details
                    </div>
                    <div className=" font-[Eina03] text-[22px] mb-[6px]">
                        Joli Color Matte long lasting lipstick
                    </div>
                    <div className="  w-[807px] font-[Eina03-Regular] leading-[1.75]">
                        Creamy texture of this matte lipstick
                        gives comfort and confidence for a long time.
                        Saves shade intensity for all day without leaking.
                        It contains Vitamin E, which will kepp your lips soft,
                        supple and moisturized. These sensual lip colors are perfect for daily or evening wear.
                    </div>


                </div>
                <div className='flex flex-col mb-[76px] pl-[316px] pt-[76px]'>
                    <div className='flex flex-row justify-between mb-[40px] h-[46px] items-center pr-[108px]'>
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
                    <div className="flex flex-row  w-full  overflow-auto scrollbar-hide">
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