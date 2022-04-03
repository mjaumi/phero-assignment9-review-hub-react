import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //header component renders here
    return (
        <header className='absolute w-full bg-book-hub-base text-white py-5'>
            <div className='flex justify-between w-4/5 mx-auto'>
                <div>
                    <h2><span className='font-semibold text-3xl'>Book</span>Hub</h2>
                </div>
                <div className='flex items-center'>
                    <nav className='flex text-xl font-light'>
                        <Link to='/' className='hover:opacity-50 hover:font-semibold duration-300 origin-center'>Home</Link>
                        <p className='ml-5'>Reviews</p>
                        <p className='ml-5'>Dashboard</p>
                        <p className='ml-5'>Blogs</p>
                        <p className='ml-5'>About</p>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;