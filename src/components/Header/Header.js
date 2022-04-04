import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    //header component renders here
    return (
        <header className='fixed w-full bg-review-hub-base-dark text-review-hub-base-green py-5 z-[99999]'>
            <div className='flex justify-between w-4/5 mx-auto'>
                <div>
                    <h2><span className='font-semibold text-3xl'>Review</span>Hub</h2>
                </div>
                <div className='flex items-center'>
                    <nav className='flex text-xl'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/reviews'>Reviews</CustomLink>
                        <CustomLink to='/dashboard'>Dashboard</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;