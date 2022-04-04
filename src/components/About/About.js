import React from 'react';

const About = () => {
    return (
        <section className='py-36 min-h-screen'>
            <h2 className='font-light text-2xl md:text-4xl mb-20 text-review-hub-base-green'>About <span className='font-semibold'>Review</span><small className='text-lg'>Hub</small></h2>
            <div className='w-[90%] lg:w-4/5 mx-auto border-2 border-review-hub-base-green px-5 py-10 rounded-3xl'>
                <p className='text-white text-lg'>
                    <span className='font-semibold text-3xl text-review-hub-base-green'>Review
                        <small className='text-review-hub-base-green text-base'>Hub</small>
                    </span> is a reviewing website for <strong className='text-review-hub-base-green'>XBox Series X</strong> with a motive to allow customers to make there own decision depending on other customer's review. This website is Developed by <strong className='text-review-hub-base-green'>Milhan Joardar Aumi</strong> and he owns the copyright of this website. If any kind of copyright infringement is being known then legal actions will be taken on them.</p>
            </div>
        </section>
    );
};

export default About;