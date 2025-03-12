const HeroSection = () => {
  return (
    <>

      {/*hero */}
      <div className="w-full h-[373px] bg-[url('/assets/hero/hero-img.jpg')] pt-[51px] pr-[52px] pb-[44px] pl-[53px] ml-0 contain bg-no-repeat
       lg:bg-[url('/assets/hero/desktop/hero-img.png')] lg:p-[82px_732px_92px_212px] lg:h-[526px] lg:w-screen lg:bg-cover lg:bg-center" >

        <div className="lg:flex lg:flex-col lg:items-center lg:w-[496px]">
          <div className='w-[227px] h-[94px] flex flex-col mr-5.5 mb-4 ml-[21px] lg:w-[369px] lg:h-[152px] lg:m-[0_64px_40px_63px]'>
            <img src="/assets/hero/nouba-logo.png" alt="nouba-logo" />
          </div>
          <div className="w-[227px] h-[80px] m-[16px_22px_24px_21px] text-center text-white font-[Eina03L] text-[16px] font-normal leading-[1.5] lg:w-[496px] lg:h-[56px] lg:leading-[28px] lg:m-[0_0_40px_0]">
            <p className='font-normal'>
              Discover the new gold 2019
              collection from NOUBA.
            </p>
            <span className='font-bold'>
              10% Off Your First Order
            </span>
          </div>
          <div className='w-[270px] h-[64px] pt-[23px] px-[35px] pb-[25px] text-[#edb15d]  border-solid border-[1px] border-[#edb15d] hover:border-[#EDB15DA5] hover:text-[#EDB15DA5] cursor-pointer
        ' onClick={() => { console.log("test click"); }}>
            <p className='w-[200px] h-4 text-center   font-[Eina03] leading-[1.14] text-[14px] tracking-[1.5px]'>Discover Catalogues</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default HeroSection
