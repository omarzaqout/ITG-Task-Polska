import React from 'react'
import { useNavigate } from 'react-router-dom';

const MenuDesktop = () => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/PLP');
    }
    return (
        <div className='flex w-[847px] gap-x-8 font-[Eina03] text-[13px] leading-[16px] tracking-[1.4px] uppercase max-lg:hidden'>
            <span className='w-[84px]' onClick={() => { toProducts(); }}>Products</span>
            <span className='w-[164px]'>Online Catalogues</span>
            <span className='w-[139px]'>Find our Stores</span>
            <span className='w-[124px]'>New Products</span>
            <span className='w-[78px]'>About Us</span>
            <span className='w-[98px]'>Contact Us</span>
        </div>

    )
}

export default MenuDesktop
