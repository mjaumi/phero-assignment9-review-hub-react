import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    //header component renders here
    return (
        <header className='fixed w-full bg-review-hub-base-dark text-review-hub-base-green py-5 z-[99999]'>
            <div className='flex justify-between w-11/12 lg:w-4/5 mx-auto'>
                <div>
                    <h2 className='text-sm lg:text-base'><span className='font-semibold text-2xl lg:text-3xl'>Review</span>Hub</h2>
                </div>
                <div className='flex items-center'>
                    <nav className={`flex flex-col w-full bg-review-hub-base-dark md:w-fit md:flex-row text-base lg:text-xl absolute top-48 left-0 md:static duration-500 ease-in-out ${open ? 'top-10' : 'top-[-250px]'} -z-50 md:z-0`}>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/reviews'>Reviews</CustomLink>
                        <CustomLink to='/dashboard'>Dashboard</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                    </nav>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-full md:hidden '>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
            </div>
        </header>
    );
};

export default Header;