import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews] = useReviews();

    //home component renders here
    return (
        <section className='pt-8'>
            {/* hero section */}
            <div className='w-4/5 mx-auto grid grid-cols-2 gap-7 text-white'>
                <div className='text-left pt-10 flex flex-col justify-center'>
                    <h1 className='text-6xl font-semibold mb-4'>Looking To Buy New
                        <br />
                        <span className='text-review-hub-base-green'>XBox Series X??</span>
                    </h1>
                    <h3 className='text-3xl mt-2 mb-4 font-medium'>Don't worry we got your back !!</h3>
                    <p className='text-lg'>Check our customer review about XBox Series X and and make your own decision.</p>
                </div>
                <div className='flex justify-end items-center py-10 pl-10 h-[100vh]'>
                    <img className='' src="https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg" alt="" />
                </div>
            </div>
            {/* user review section */}
            <div className='pb-32 w-4/5 mx-auto'>
                <h2 className='text-3xl text-review-hub-base-green font-semibold mb-7'>Customer Reviews(3)</h2>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className='text-review-hub-base mt-28'>
                    <button className='bg-review-hub-base-green px-5 py-3 rounded-lg font-semibold hover:opacity-50 duration-300'>See All Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default Home;