import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className='pt-36 min-h-screen'>
            <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='font-extrabold text-9xl text-review-hub-base-green'>404</h1>
                <h3 className='mt-5 font-semibold text-white text-xl md:text-3xl'>Woops, looks like this page does not exist</h3>
                <p className='text-white font-light'>You could either go back to the homepage</p>
                <Link to='/'>
                    <button className='mt-9 bg-review-hub-base-green px-5 py-3 rounded-xl font-semibold hover:opacity-50 duration-300'>Go to Homepage</button>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;