import React from 'react';

const Blogs = () => {
    return (
        <section className='py-36 min-h-screen'>
            <h2 className='font-semibold text-4xl mb-20 text-review-hub-base-green'>Questions & Answers</h2>
            <div className='text-left w-4/5 mx-auto border-2 border-review-hub-base-green p-5 rounded-3xl'>
                <h3 className='text-2xl font-medium text-review-hub-base-green'>Q1: What is Context API?</h3>
                <p className='text-lg mt-5 text-white'><strong className='text-review-hub-base-green-light'>Answer:</strong> If we want to send data from one component to another in React, then we need to use <strong>props</strong>(properties). We also need direct connection of those components in order to send data. This process is called <strong>prop-drilling</strong>. But if we need to send data to some deep inner level then it will be problematic as we have to define props at each level. That's where Context API comes in handy. Context API is a React structure which allows us to exchange unique details between components without prop-drilling from each level. That is how Context API makes development easy.</p>
            </div>
            <div className='mt-10 text-left w-4/5 mx-auto border-2 border-review-hub-base-green p-5 rounded-3xl'>
                <h3 className='text-2xl font-medium text-review-hub-base-green'>Q2: What is Semantic Tag?</h3>
                <p className='text-lg mt-5 text-white'><strong className='text-review-hub-base-green-light'>Answer:</strong> Semantic tags or elements are those elements or tags that clearly describes its meaning to both the browser and the developer. For example, if we use <strong>div</strong> tag everywhere to define the header, the body, the footer, the aside etc. then it will be confusing for the developer which div is the body and which is the aside. That's why semantic tags came which helps a developer understanding the tags. Some semantic tags are, <strong>aside, header, main, section, article, footer</strong> etc. By using these tags will help the developer understanding the site. For example, if a page has <strong>header, main, footer, aside</strong> as HTML elements then a developer will easily understand which tag has which functionality. But if we used <strong>div</strong> everywhere, the developer will get confused.</p>
            </div>
            <div className='mt-10 text-left w-4/5 mx-auto border-2 border-review-hub-base-green p-5 rounded-3xl'>
                <h3 className='text-2xl font-medium text-review-hub-base-green'>Q1: What is the difference among inline, block and inline-block elements?</h3>
                <p className='text-lg mt-5 text-white'><strong className='text-review-hub-base-green-light'>Answer:</strong> <strong>Inline</strong> elements are those elements which doesn't start in a new line and only occupy the width it requires to fit it's content. On the other hand, <strong>Block</strong> elements are those elements which will start on a new line and occupy the full width available (usually the width of it's parent element). Again, <strong>Inline-Block</strong> elements are those elements which are formatted like inline elements as they don't start from a new line. You can't set height or width of an <strong>Inline</strong> element. On the other hand, you can set height or width of a <strong>Block</strong> element and an <strong>Inline-Block</strong> element. These are the main difference among Inline, Block and Inline-Block elements.</p>
            </div>
        </section>
    );
};

export default Blogs;