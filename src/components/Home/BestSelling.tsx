import ProductCard from "./ProductCard";
import { products } from "../../../public/data/data"
const BestSelling = () => {
  return (
    <div className="w-full h-[520px] bg-[url('/assets/BestSelling/best-sellers-bg.jpg')] py-[60px] pl-4 bg-no-repeat contain-content 
     lg:bg-[url('/assets/BestSelling/desktop/best-sellers-bg.png')] lg:h-[944px] lg:p-[115px_0_156px_108px] lg:mb-[92px] 
    lg:w-screen lg:bg-cover lg:bg-center
    ">
      <div className="flex flex-col w-full">
        <span className="w-[167px] h-[48px] mr-[10px] font-[Cochin] text-[32px] font-bold leading-[1.5] text-white
        lg:w-[292px] lg:h-[60px] lg:text-[56px] lg:leading-[60px] lg:mb-2.5
        ">
          Best Selling
        </span>
        <div className="flex flex-row h-6 
        lg:h-7 lg:justify-between lg:pr-[108px]">

          <span className="w-[209px] h-4 mt-[4px] mr-[36px] mb-[48px] font-[Eina03-Regular] text-[14px] leading-[1.14] text-[#ffffff]
          lg:text-[17px] text-nowrap">
            Browse our best selling items.
          </span>
          <div className="flex lg:pt-1 h-6 pt-[3px]">
            <span className="w-[74px] h-4 mt-[3px] mb-[5px] font-[Eina03-Bold] text-[14px]  leading-[1.14] tracking-[1px] text-right text-white
            
            ">
              VIEW ALL
            </span>
            <div className=" p-[6px_5px] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="object-contain" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#FFF" fill-rule="evenodd" d="M79 13.051L79 10.873 89.722 10.873 87.193 7.089 89.155 6 93 12 89.155 18 87.213 16.911 89.722 13.051z" transform="translate(-74)" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-[284px] w-full  mt-10.5 overflow-auto scrollbar-hide
        lg:mt-[107px] lg:h-[468px]
        ">
          {/*Card*/}
          {products.map((product, index) => (
            <ProductCard key={index} brand={product.brand} name={product.name} img={product.image} />
          ))}
        </div>

      </div>
    </div>

  );
};

export default BestSelling;
