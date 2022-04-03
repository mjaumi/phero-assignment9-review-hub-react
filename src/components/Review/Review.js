import React from 'react';

const Review = (props) => {
    //destructuring the properties
    const { userImg, userName, review, rating } = props.review;

    //rendering the review component here
    return (
        <div className='grid grid-rows-review-card border-2 border-review-hub-base-green text-white p-5 rounded-[20px]'>
            <div className='w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-review-hub-base-green'>
                <img className='w-full' src={userImg} alt="" />
            </div>
            <div>
                <h4 className='font-semibold text-xl mb-6'>{userName}</h4>
            </div>
            <div>
                <p className='text-lg'>{review}</p>
            </div>
            <div>
                <p className='mt-10 text-gray-400'><span className='font-semibold text-2xl text-review-hub-base-green'>{rating}</span>/5.00</p>
            </div>
        </div>
    );
};

export default Review;