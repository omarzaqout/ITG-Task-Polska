import React from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
    label: string;
    onClick: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => (
    <div className='h-12 px-4 items-center shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)] flex flex-row justify-between' onClick={onClick}>
        <span className='font-[Eina03-SemiBold] leading-4 text-[16px]'>{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M7 10L12 14 17 10" transform="matrix(0 1 1 0 0 0)" />
        </svg>
    </div>
);
interface MenuProps {
    onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const toProducts = () => {
        navigate('/PDP');
        onClose();

    };

    const Item = [
        { label: "Products", onClick: toProducts },
        { label: "Online Catalogues", onClick: () => console.log("Online Catalogues") },
        { label: "Find our Stores", onClick: () => console.log("Find our Stores") },
        { label: "New Products", onClick: () => console.log("New Products") },
        { label: "About Us", onClick: () => console.log("About Us") },
        { label: "Contact Us", onClick: () => console.log("Contact Us") },
    ];
    return (
        <div className='w-[375px] h-[712px] pb-10 bg-white flex flex-col absolute top-0'>
            <Header onClose={onClose} />
            <div className='h-full flex flex-col justify-between'>
                <div>
                    {Item.map((item, index) => (
                        <MenuItem key={index} label={item.label} onClick={item.onClick} />
                    ))}
                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <span className='font-[Eina03-Bold] mb-[17px]'>Share</span>
                    <div className='flex flex-row space-x-[27px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" onClick={() => window.open('https://www.facebook.com/')} style={{ cursor: 'pointer' }}>
                            <path fill-rule="evenodd" d="M14.956 28H1.546C.691 28 0 27.308 0 26.455V1.545C0 .692.692 0 1.545 0h24.91C27.308 0 28 .692 28 1.545v24.91c0 .853-.692 1.545-1.545 1.545H19.32V17.157h3.64l.544-4.226H19.32v-2.698c0-1.223.34-2.057 2.094-2.057l2.237-.001v-3.78c-.387-.051-1.715-.166-3.26-.166-3.227 0-5.435 1.97-5.435 5.586v3.116h-3.65v4.226h3.65V28z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className='my-[2px]' width="28" height="24" viewBox="0 0 28 24 " onClick={() => window.open('https://www.x.com/')} style={{ cursor: 'pointer' }}>
                            <path fill-rule="evenodd" d="M28 2.841c-1.029.482-2.137.808-3.298.954 1.186-.75 2.097-1.937 2.526-3.351-1.111.693-2.34 1.198-3.65 1.468C22.531.735 21.037 0 19.384 0c-3.17 0-5.742 2.713-5.742 6.059 0 .474.049.936.147 1.38-4.774-.254-9.006-2.663-11.84-6.333-.496.898-.778 1.94-.778 3.05 0 2.1 1.014 3.955 2.555 5.042-.94-.03-1.827-.305-2.603-.756v.075c0 2.936 1.98 5.385 4.61 5.94-.481.142-.99.213-1.514.213-.37 0-.73-.036-1.08-.107.73 2.406 2.85 4.159 5.365 4.205-1.966 1.626-4.444 2.595-7.134 2.595-.464 0-.922-.027-1.371-.083C2.542 22.996 5.563 24 8.806 24 19.373 24 25.15 14.77 25.15 6.762c0-.263-.005-.527-.015-.785 1.123-.855 2.097-1.92 2.865-3.136" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" onClick={() => window.open('https://www.pinterest.com/')} style={{ cursor: 'pointer' }}>
                            <path fill-rule="evenodd" d="M14 0C6.27 0 0 6.268 0 14c0 5.732 3.448 10.658 8.382 12.823-.04-.976-.007-2.152.242-3.216.27-1.136 1.8-7.627 1.8-7.627s-.445-.894-.445-2.216c0-2.075 1.203-3.624 2.7-3.624 1.272 0 1.888.957 1.888 2.102 0 1.28-.816 3.194-1.236 4.968-.35 1.486.744 2.696 2.21 2.696 2.652 0 4.438-3.406 4.438-7.443 0-3.067-2.066-5.364-5.825-5.364-4.246 0-6.892 3.166-6.892 6.703 0 1.221.36 2.08.922 2.746.26.308.295.43.201.782-.066.255-.22.877-.285 1.123-.094.354-.38.482-.7.35-1.957-.798-2.868-2.94-2.868-5.349 0-3.976 3.354-8.747 10.006-8.747 5.345 0 8.864 3.87 8.864 8.021 0 5.492-3.053 9.595-7.556 9.595-1.51 0-2.932-.816-3.42-1.743 0 0-.812 3.225-.984 3.847-.296 1.079-.877 2.159-1.409 2.998 1.26.372 2.59.575 3.968.575C21.732 28 28 21.732 28 14S21.732 0 14 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" onClick={() => window.open('https://www.instagram.com/')} style={{ cursor: 'pointer' }}>
                            <path fill-rule="evenodd" d="M14 0c3.802 0 4.279.016 5.772.084 1.49.068 2.508.305 3.399.651.92.358 1.7.836 2.48 1.615.778.778 1.256 1.559 1.614 2.48.346.89.583 1.908.65 3.398C27.985 9.72 28 10.198 28 14c0 3.802-.016 4.279-.084 5.772-.068 1.49-.305 2.508-.651 3.399-.358.92-.836 1.7-1.615 2.48-.778.778-1.559 1.256-2.48 1.614-.89.346-1.908.583-3.398.65-1.493.069-1.97.085-5.772.085-3.802 0-4.279-.016-5.772-.084-1.49-.068-2.508-.305-3.399-.651-.92-.358-1.7-.836-2.48-1.615-.778-.778-1.256-1.559-1.614-2.48-.346-.89-.583-1.908-.65-3.398C.015 18.28 0 17.802 0 14c0-3.802.016-4.279.084-5.772.068-1.49.305-2.508.651-3.399.358-.92.836-1.7 1.615-2.48.778-.778 1.559-1.256 2.48-1.614.89-.346 1.908-.583 3.398-.65C9.72.015 10.198 0 14 0zm0 2.523c-3.738 0-4.181.014-5.657.081-1.365.062-2.106.29-2.6.482-.653.254-1.12.558-1.61 1.047-.49.49-.793.957-1.047 1.61-.192.494-.42 1.235-.482 2.6-.067 1.476-.081 1.919-.081 5.657s.014 4.181.081 5.657c.062 1.365.29 2.106.482 2.6.254.653.558 1.12 1.047 1.61.49.49.957.793 1.61 1.047.494.192 1.235.42 2.6.482 1.476.067 1.919.081 5.657.081s4.181-.014 5.657-.081c1.365-.062 2.106-.29 2.6-.482.653-.254 1.12-.558 1.61-1.047.49-.49.793-.957 1.047-1.61.192-.494.42-1.235.482-2.6.067-1.476.081-1.919.081-5.657s-.014-4.181-.081-5.657c-.062-1.365-.29-2.106-.482-2.6-.254-.653-.558-1.12-1.047-1.61-.49-.49-.957-.793-1.61-1.047-.494-.192-1.235-.42-2.6-.482-1.476-.067-1.919-.081-5.657-.081zM6.81 14c0-3.97 3.22-7.19 7.19-7.19s7.19 3.22 7.19 7.19-3.22 7.19-7.19 7.19S6.81 17.97 6.81 14zM14 18.667c2.577 0 4.667-2.09 4.667-4.667S16.577 9.333 14 9.333 9.333 11.423 9.333 14s2.09 4.667 4.667 4.667zm9.153-12.14c0 .928-.752 1.68-1.68 1.68-.928 0-1.68-.752-1.68-1.68 0-.928.752-1.68 1.68-1.68.928 0 1.68.752 1.68 1.68z" />
                        </svg>
                    </div>
                    <div className='mt-5 text-xs leading-4 tracking-[0.51px] font-[Eina03-Regular] text-r capitalize flex flex-col'>
                        <span className='block  text-center space-x-2'>
                            <span>Privacy
                            </span>
                            <span>•</span>
                            <span>Terms</span>
                        </span>
                        <span className='mt-5'>
                            © 2020 Polska Cosmetics
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
