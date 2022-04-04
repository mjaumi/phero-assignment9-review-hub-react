import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    //calling custom hooks
    const [reviews] = useReviews();

    return (
        <section className='min-h-screen py-28'>
            <h2 className='text-2xl md:text-4xl text-review-hub-base-green font-light'>What Our Customers Say!</h2>
            <div className='w-[90%] lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;