import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    //calling custom hooks
    const [reviews] = useReviews();

    //using navigate hooks to navigate to review page
    const navigate = useNavigate();

    //home component renders here
    return (
        <section className='pt-8'>
            {/* hero section */}
            <div className='w-[90%] lg:w-4/5 h-screen mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-7 text-white'>
                <div className='text-center md:text-left md:pt-10 flex flex-col justify-start md:justify-center'>
                    <h1 className='text-4xl 2xl:text-6xl font-semibold mb-4'>Looking To Buy New
                        <br />
                        <span className='text-review-hub-base-green'>XBox Series X??</span>
                    </h1>
                    <h3 className='text-2xl 2xl:text-3xl mt-2 mb-4 font-medium'>Don't worry we got your back !!</h3>
                    <p className='text-base 2xl:text-lg'>Check our customer review about XBox Series X and and make your own decision.</p>
                </div>
                <div className='mt-28 md:mt-0 col-start-1 md:col-start-2 row-start-1 flex justify-end items-center md:py-10 md:pl-10 h-[50vh] md:h-[100vh]'>
                    <img className='' src="https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg" alt="" />
                </div>
            </div>
            {/* user review section */}
            <div className='mt-32 md:mt-0 pb-32 w-[90%] lg:w-4/5 mx-auto'>
                <h2 className='text-3xl text-review-hub-base-green font-semibold mb-7'>Customer Reviews({reviews.slice(0, 3).length})</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className='text-review-hub-base mt-28'>
                    <button onClick={() => navigate('/reviews')} className='bg-review-hub-base-green px-5 py-3 rounded-lg font-semibold hover:opacity-50 duration-300'>See All Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default Home;