
import { useState } from 'react';
import MenuDesktop from '../Menu/menu-desktop';
import Menu from '../Menu/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (

    <div className='flex flex-col min-w-[375px]  min-h-[106px] w-full bg-black z-20  lg:h-[168px]  lg:p-[12px_107px_24px_108px] justify-between lg:sticky lg:top-0' style={{ boxShadow: "inset 0 -2px 0 0 #d6ac76" }}>
      {/* Navigation */}
      <nav className="flex  min-w-[375px] w-full justify-between px-4 h-16 pb-2 pt-[3px] text-white leading-4 lg:p-0" >

        {/*section1*/}
        <div className="flex flex-row items-center justify-between gap-[25px] sm:gap-[28px] xl:gap-[23px]">
          {/* Menu */}
          <div className="flex flex-col items-center ml-0 mb-0 text-white lg:hidden " onClick={toggleMenu}>

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
              <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3">
                <path d="M3 12.5L13 12.5M3 19.5L19 19.5M3 5.5L21 5.5" />
              </g>
            </svg>

            <span className="h-[12px] w-[40px] font-normal text-[12px] tracking-[0.2px] text-center">Menu</span>

          </div>
          {/* Artist */}
          <div className="flex flex-col items-center justify-center mb-0  text-[12px] font-normal tracking-tight text-white text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className='lg:size-8' viewBox="0 0 25 25">
              <path fill="#FFF" d="M23.437 5.192c-.233-.982-.792-1.954-1.573-2.736-.788-.787-1.728-1.33-2.717-1.568-.998-.241-1.97-.14-2.738.286-.203.113-.543.302-1.883 3.38-.541 1.242-1.031 2.467-1.164 2.801l-3.041 3.232c-.203-.19-.52-.187-.719.01-.201.202-.201.529 0 .73l.011.011-8.311 8.831c-.739.785-.72 2.044.043 2.807.389.389.907.584 1.425.584.498 0 .996-.18 1.38-.542l8.832-8.311.01.01c.202.202.529.202.73 0 .198-.197.202-.515.011-.718l3.269-3.076c.34-.133 1.545-.607 2.768-1.132 3.05-1.308 3.242-1.646 3.358-1.849.437-.767.547-1.744.309-2.75zM3.444 22.267c-.377.354-1.004.345-1.37-.021-.366-.366-.375-.993-.02-1.37l8.29-8.808 1.908 1.909-8.808 8.29zm9.56-8.998l-1.953-1.953 2.801-2.977.579.579.01.01.952.952.008.008.58.58-2.977 2.801zm9.241-5.862c-.366.368-3.009 1.533-5.397 2.469l-.302-.303 3.051-2.3c.228-.172.273-.495.102-.723-.172-.227-.495-.273-.723-.101L15.81 8.837l-.326-.326 2.388-3.167c.172-.228.126-.551-.101-.723-.228-.171-.551-.126-.723.102l-2.3 3.051-.316-.315c.956-2.397 2.135-5.03 2.505-5.397 1.16-.623 2.92-.153 4.198 1.124 1.29 1.29 1.754 3.06 1.111 4.221z" />
            </svg>
            <span className="h-[12px] lg:hidden">Artists</span>
            <span className="h-[12px] hidden lg:inline">Makeup Artists</span>


          </div>
          <div className=" flex-col items-center justify-center w-[46px] mr-7 mb-0 ml-0 hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className='lg:size-8' width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M14.952 16.524c.454.309 1.073.193 1.384-.259.437-.638.636-.738.905-.726.861.101 4.253 2.578 4.593 3.353.085.228.082.452-.01.724-.356 1.053-.945 1.793-1.705 2.14-.721.33-1.606.3-2.557-.086-3.553-1.443-6.657-3.457-9.226-5.986-2.536-2.56-4.553-5.65-5.999-9.185-.387-.949-.417-1.83-.086-2.55.348-.756 1.09-1.344 2.147-1.698.274-.092.498-.095.724-.01.78.339 3.266 3.72 3.366 4.568.015.278-.087.476-.726.911-.454.31-.57.926-.26 1.378.31.453 6.997 7.116 7.45 7.426z" />
            </svg>

            <span className="h-[12px] font-normal text-[12px] tracking-[0.2px] text-center text-white">Call Us</span>
          </div>
        </div>
        {/*section2*/}

        {/* Logo */}
        <div className="flex flex-col justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" className='lg:w-[181px] h-6' height="14" viewBox="0 0 70 14">
            <path fill="#F9F9F9" d="M3.331 1.45H1.42v6.207h1.912c1.302 0 2.3-.235 2.997-.705.696-.47 1.045-1.267 1.045-2.388 0-1.135-.349-1.937-1.045-2.408-.697-.47-1.695-.706-2.997-.706zm.02 7.426H1.42v4.892H0V.232h3.351c1.722 0 3.065.358 4.031 1.073.966.716 1.45 1.802 1.45 3.259 0 1.456-.48 2.54-1.44 3.248-.96.71-2.306 1.064-4.04 1.064zm18.077-6.923c.985 1.302 1.478 2.984 1.478 5.047 0 2.063-.496 3.745-1.488 5.047C20.426 13.349 18.983 14 17.09 14c-1.88 0-3.315-.651-4.307-1.953-.992-1.302-1.489-2.984-1.489-5.047 0-2.076.493-3.761 1.479-5.057C13.76.648 15.199 0 17.09 0c1.892 0 3.338.651 4.337 1.953zM12.774 7c0 1.702.358 3.084 1.074 4.148.716 1.063 1.797 1.595 3.243 1.595 1.459 0 2.546-.532 3.262-1.595.717-1.064 1.075-2.446 1.075-4.148 0-1.702-.358-3.084-1.075-4.148-.716-1.063-1.803-1.595-3.262-1.595s-2.543.528-3.253 1.586C13.128 3.9 12.774 5.285 12.774 7zM26 13.768V.232h1.42V12.55h6.544v1.218h-7.964zm9.797-.503l.276-1.237c1.38.49 2.629.734 3.746.734 1.038 0 1.843-.203 2.415-.609.571-.406.857-1.015.857-1.827 0-.825-.276-1.434-.828-1.827-.552-.394-1.445-.777-2.68-1.15-1.25-.4-2.176-.884-2.78-1.451-.605-.567-.907-1.367-.907-2.398 0-1.122.394-1.985 1.183-2.591C37.868.303 38.946 0 40.313 0c1.182 0 2.286.193 3.311.58l-.295 1.18c-1.117-.348-2.09-.522-2.918-.522-2.037 0-3.055.747-3.055 2.243 0 .722.226 1.266.68 1.634.423.343 1.1.666 2.033.97l.204.064c.565.18 1.019.339 1.36.474.342.135.723.319 1.144.551.42.232.742.48.966.745.223.264.414.602.571 1.015.158.412.237.876.237 1.392 0 1.25-.44 2.175-1.32 2.775-.881.6-2.005.899-3.372.899-1.524 0-2.878-.245-4.06-.735zm19.831.503l-4.415-6.285c-.75.49-1.564.954-2.445 1.393v4.892H47.35V.232h1.42v7.251c1.866-.992 3.295-2.056 4.287-3.19.992-1.135 1.646-2.488 1.961-4.061h1.42c-.526 2.565-1.906 4.725-4.14 6.478l5.027 7.058h-1.696zm8.516-12.105c-.828 1.818-1.728 4.119-2.7 6.903h5.401l-.305-.863c-.856-2.4-1.655-4.414-2.396-6.04zm4.396 12.105c-.368-1.25-.795-2.578-1.281-3.983h-6.23c-.486 1.405-.913 2.732-1.28 3.983h-1.46C60.026 8.263 61.728 3.751 63.397.232h1.479C66.7 4.087 68.41 8.599 70 13.768h-1.459z" />
          </svg>

        </div>
        {/*section3*/}
        <div className='flex flex-row items-center justify-between  gap-[28px] sm:gap-[23px] lg:gap-[28px] '>

          {/* Call Us */}
          <div className="flex flex-col items-center justify-center w-[46px]  mb-0 ml-0 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M14.952 16.524c.454.309 1.073.193 1.384-.259.437-.638.636-.738.905-.726.861.101 4.253 2.578 4.593 3.353.085.228.082.452-.01.724-.356 1.053-.945 1.793-1.705 2.14-.721.33-1.606.3-2.557-.086-3.553-1.443-6.657-3.457-9.226-5.986-2.536-2.56-4.553-5.65-5.999-9.185-.387-.949-.417-1.83-.086-2.55.348-.756 1.09-1.344 2.147-1.698.274-.092.498-.095.724-.01.78.339 3.266 3.72 3.366 4.568.015.278-.087.476-.726.911-.454.31-.57.926-.26 1.378.31.453 6.997 7.116 7.45 7.426z" />
            </svg>

            <span className="h-[12px] font-normal text-[12px] tracking-[0.2px] text-center text-white">Call Us</span>
          </div>

          {/* Cart */}
          <div className="flex flex-col items-center justify-center w-[32px] text-xs font-normal tracking-tight text-white text-center">
            <span className='w-1 h-[13px] mr-[12px] ml-[11px] mb-0'>8</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='lg:size-8' viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" opacity=".9">
                <path d="M10.36 2.96c2.452 0 4.44 1.988 4.44 4.44h0-8.88c0-2.452 1.988-4.44 4.44-4.44zM7.4 2.96C7.4 1.325 8.725 0 10.36 0s2.96 1.325 2.96 2.96M0 7.4h20.72l-1.269 10.148c-.076.609-.16.823-.298 1.037-.137.214-.323.378-.552.488-.23.11-.453.167-1.066.167H3.185c-.613 0-.836-.057-1.066-.167-.229-.11-.415-.274-.552-.488-.138-.214-.222-.428-.298-1.037L0 7.4h0z" transform="translate(1.48 2.96)" />
                <path d="M6.83 2.96H4.222c-.491 0-.668.03-.859.097-.19.066-.354.167-.498.308C2.77 3.459 1.814 4.804 0 7.4h20.72c-1.814-2.596-2.77-3.941-2.866-4.035-.144-.141-.308-.242-.498-.308s-.368-.097-.86-.097h-2.713" transform="translate(1.48 2.96)" />
              </g>
            </svg>

            <span className="w-full h-3 ">Cart</span>
          </div>

          {/*Account*/}
          <div className="hidden flex-col items-center justify-center w-[58px]  mb-0 ml-0 lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path d="M24 26v-3.667C24 18.283 20.587 15 12 15S0 18.283 0 22.333V26M15.536 1.464c1.952 1.953 1.952 5.119 0 7.072-1.953 1.952-5.119 1.952-7.072 0-1.952-1.953-1.952-5.119 0-7.072 1.953-1.952 5.119-1.952 7.072 0" transform="translate(4 3)" />
              </g>
            </svg>


            <span className="h-[12px] font-[Eina03-Regular] text-[12px] tracking-[0.2px] text-center text-white">Hi, Maysa</span>
          </div>

        </div>

      </nav>
      {/* Search */}
      <div className='flex text-white text-center items-center gap-x-[85px]'>
        <MenuDesktop />
        <div>
          <div className="flex w-[375px] z-20 relative h-[42px] px-[136px] py-[11px] pl-[16px] items-center shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.18)] bg-black lg:p-0 lg:w-[292px]  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className='p-[1px] mr-2' viewBox="0 0 14 14">
              <g fill="none" fill-rule="evenodd" stroke="#E6E6E6" transform="translate(1 1)">
                <circle cx="4.5" cy="4.5" r="4.5" />
                <path d="M12 12L7.6 7.6" />
              </g>
            </svg>
            <input
              className="w-[201px] opacity-[0.4] text-[13px] font-semibold leading-[1.23]
              text-white font-[Eina03] border-none focus:border-0 focus:outline-none focus:shadow-none hover:border-0
              lg:w-[270px]
              "
              placeholder='Search for product, brand, ..etc'
              type="text"
            />
          </div>
          <div className='hidden w-[292px] h-[1px] m-[3px_1px_0_0] border border-solid border-[#ffffff] lg:flex'></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMenu}>
          <div className="w-[375px] h-full bg-white" onClick={(e) => e.stopPropagation()}>
            <Menu onClose={closeMenu} />          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
