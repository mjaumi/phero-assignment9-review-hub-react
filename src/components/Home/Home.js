import React from 'react';
import heroImg from '../../images/hero-img.jpg';

const Home = () => {
    return (
        <section className='pt-8'>
            <div className='w-4/5 mx-auto grid grid-cols-2 gap-7'>
                <div className='text-left pt-10 flex flex-col justify-center'>
                    <h1 className='text-6xl font-semibold'>Are You A <span className='text-book-hub-base-light'>Book Worm??</span></h1>
                    <h3 className='text-3xl mt-2 mb-4 font-medium'>Then Review Your Book & Help Other Book Worms</h3>
                    <p className='text-lg'>Review your recently read book and help all the book worms in this community to choose their next book to read.</p>
                </div>
                <div className='flex justify-end items-center py-10 pl-10 h-[100vh]'>
                    <img className='h-[90%]' src={heroImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;