import { products } from '../../public/data/data';
import ProductCard from '../components/Home/ProductCard';
import './style/PLP.css'

const PLP = () => {
    return (
        <>
            <div className="w-[375px] lg:w-full h-[39px] absolute lg:relative z-15 p-[8px_31px_7px_16px]  shadow-inner bg-white">

            </div>
            <div className="w-[375px] lg:w-full h-[464px] bg-[url('/assets/PLP/hero-img.jpg')] lg:bg-[url('/assets/PLP/desktop/hero-img.png')]
             bg-no-repeat bg-cover z-[-1] p-[34px_0_88px_0] mt-[-34px] lg:mt-0 ">

                <div className="w-[253px] lg:w-full lg:h-16 lg:flex lg:justify-center lg:p-[88px_108px_78px] lg:m-0 h-[94px] m-[98px_61px_12px_61px]  text-center align-end">
                    <span className="inline-block pr-2 lg:p-0 lg:mr-3  h-[94px] font-[CochinBoldItalic] text-[38px] leading-[38px] text-black
                    lg:leading-16 lg:text-[56px]
                    ">
                        Give thanks for good

                        <span className="w-[91px] h-[40px] ml-3 font-[Heaters] text-[40px]  leading-[40px] text-[#e73164]
                        lg:text-[80px] lg:leading-[80px]">
                            Lipstick.
                        </span>
                    </span>

                </div>
                <div className='text-center font-[Eina03-Regular] m-[12px_0_47px_0] lg:mt-[4px_0_32px_0]'>
                    <span className=' h-4 lg:leading-[24px] '>Every day. Something New.</span>
                </div>
                <div className='flex flex-row justify-between m-[0_16px_0_16px] lg:m-[0_0_18px_0] lg:px-[108px]'>
                    <div className="w-[166px] h-[36px] px-[8px] py-[6px] border border-black bg-gray-100">
                        <div className='w-full h-4 text-4 flex flex-row'>
                            <span className='w-13.5  font-[Eina03-Regular] mr-2 text-[#555453]'>Sort by</span>
                            <span className='w-10.5 text-black font-[Eina03] mr-5.5'>Date</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M7 10L12 14 17 10" />
                            </svg>
                        </div>

                    </div>
                    <div className="w-[166px] h-[36px]  px-[8px] py-[6px] border border-black bg-gray-100">
                        <div className='h-4 text-4 flex flex-row'>
                            <span className='w-[39px]  font-[Eina03-Regular]  text-[#555453]'>Filter</span>
                            <span className='text-nowrap text-black font-[Eina03] ml-2 mr-[6px]'>4 applied</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M7 10L12 14 17 10" />
                            </svg>
                        </div>

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
