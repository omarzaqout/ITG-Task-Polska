import { useState } from 'react';
import { products } from '../../public/data/data';
import ProductCard from '../components/Home/ProductCard';
import './style/PLP.css'
import Filter from '../components/filter';

const PLP = () => {
    const [showFilter, setShowFilter] = useState(false);
    const toggleFilter = () => {
        setShowFilter(!showFilter);
        console.log("toggle");
    };
    const closeFilter = () => {
        setShowFilter(false);
    };

    return (
        <>
            <div className="w-[375px] lg:w-full h-[39px] absolute lg:relative z-15 p-[8px_31px_7px_16px]  shadow-inner bg-white">

            </div>
            <div className="w-[375px] lg:w-full h-[464px] lg:h-[360px] bg-[url('/assets/PLP/hero-img.jpg')] lg:bg-[url('/assets/PLP/desktop/hero-img.png')]
             bg-no-repeat bg-cover z-[-1] p-[34px_0_88px_0] mt-[-34px] lg:mt-0
             lg:p-[88px_108px_78px]
             ">

                <div className="w-[253px] lg:w-full  lg:flex lg:items-center lg:justify-center  lg:m-0 h-[94px] lg:h-auto m-[98px_61px_12px_61px]  text-center align-end">
                    <span className="inline-block pr-2 lg:p-0 h-[94px] lg:h-auto font-[CochinBoldItalic] text-[38px] leading-[38px] text-black
                    lg:leading-16 lg:text-[56px]
                    ">
                        Give thanks for good

                        <span className="w-[91px] h-[40px] ml-3 font-[Heaters] text-[40px]  leading-[40px] text-[#e73164]
                        lg:text-[80px] lg:leading-[80px]">
                            Lipstick.
                        </span>
                    </span>

                </div>
                <div className='text-center font-[Eina03-Regular] lg:h-6 m-[12px_0_47px_0] lg:m-[4px_0_32px_0]'>
                    <span className=' h-4 lg:h-6 lg:leading-[24px] '>Every day. Something New.</span>
                </div>
                <div className='flex flex-row justify-between m-[0_16px_0_16px] lg:m-[0_0_18px_0]'>
                    <div className="w-[166px] h-[36px] px-[8px] py-[6px] lg:w-[288px] border border-black bg-gray-100 lg:p-0 flex items-center">
                        <div className='flex max-lg:w-13.5 max-lg:mr-2 text-nowrap font-[Eina03-Regular] text-[#555453]
                          lg:w-[88px]  text-[12px] h-[36px] lg:bg-black uppercase lg:text-[#edb15d] lg:p-[10px_6px] items-center justify-center'>
                            <span>Sort by</span>
                        </div>

                        <div className='w-full h-4 text-4 flex items-center lg:h-[36px] lg:p-[6px_6px_6px_16px] lg:border lg:border-solid lg:bg-[#f5f5f5]'>
                            <div className='w-10.5 flex items-center text-black ] font-[Eina03]'>
                                <span className='text-black font-[Eina03] mr-1'>Date</span>
                                <span className='hidden lg:flex'>added</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='ml-auto'>
                                <path fill="none" fillRule="evenodd" stroke="#000" strokeLinejoin="round" strokeWidth="2" d="M7 10L12 14 17 10" />
                            </svg>
                        </div>


                    </div>
                    <div className='flex flex-col h-[36px] hover:cursor-pointer' onClick={toggleFilter}>
                        <div className="w-[166px] h-[36px]  px-[8px] py-[6px] lg:p-0 border lg:w-[288px] border-black flex bg-gray-100 ">
                            <div className=' w-[39px]   font-[Eina03-Regular]  text-[#555453] lg:flex lg:w-[101px] lg:p-[8px_20px] lg:items-center  lg:text-[#edb15d] lg:justify-center lg:bg-black'>
                                <span className='  font-[Eina03] lg:uppercase'>Filter</span>

                            </div>

                            <div className='h-[36px] text-4 flex flex-row lg:p-[6px_6px_6px_16px] lg:h-[36px] lg:w-full justify-between lg:items-center'>
                                <span className=' text-nowrap text-black font-[Eina03] ml-2 mr-[6px] lg:m-0' >4 <span className='mr-1 hidden lg:inline-flex'>filters</span>applied</span>


                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M7 10L12 14 17 10" />
                                </svg>
                            </div >



                        </div>
                        {showFilter && (
                            <div
                                className={`${window.innerWidth >= 768 ? "absolute z-[14]" : "fixed top-0 left-0 w-full h-full"
                                    } z-20 bg-white shadow-lg lg:mt-[38px] lg:ml-0`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Filter onClose={closeFilter} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[11px] w-full mt-[-64px] px-4 gap-y-3 mb-[60px] lg:mb-[76px] lg:grid-cols-4 lg:px-[108px] lg:gap-6 ">

                {/*Card*/}
                {products.map((product, index) => (
                    <ProductCard key={index} brand={product.brand} name={product.name} img={product.image} />
                ))}


            </div>
        </>
    );
};

export default PLP;
