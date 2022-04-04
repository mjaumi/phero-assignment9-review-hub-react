import React from 'react';
import Rating from 'react-rating';
import { StarIcon } from '@heroicons/react/solid';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
            <div className='relative'>
                <p className='text-lg'>{review}</p>
                <FontAwesomeIcon
                    icon={faQuoteRight}
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-review-hub-base-green opacity-20'
                />
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <div className='flex items-center h-[30px]'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<StarIcon className="inline-block h-6 w-6" fill='none' stroke='#9aef0a' />}
                        fullSymbol={<StarIcon className="inline-block h-6 w-6 text-review-hub-base-green" stroke='#9aef0a' />}
                        readonly
                    ></Rating>
                </div>
                <p className='ml-2 text-gray-400'><span className='font-semibold text-xl text-review-hub-base-green'>{rating}</span>/<small>5.00</small> </p>
            </div>
        </div>
    );
};

export default Review;