import React from 'react';

const Banner = () => {
    return (
        <div className='w-[95%] md:w-[80%] mx-auto mt-10'>
            <h1 className='text-3xl font-semibold'>HELLO THERE!</h1>
            <h1 className='text-5xl font-bold mt-2'>I'M <span className='text-yellow-600'>MIR JAKARIYA</span></h1>
            <p className='md:w-[85%] w-[95%] mt-4 text-lg'>Greetings!!! Thank you for taking the time to go through my website. In 2020, I graduated with a bachelor's degree in Electrical and Electronic Engineering. During my studies, I studied the fundamentals of C and Assembly languages, which I thoroughly enjoyed. Rather than electrical engineering, I thought I was more passionate about programming. Following graduation, I began to study programming. I tried python and Java for a few days, but I had no idea how to apply them in real life. I discovered the prospects in the web development carrier after doing some research so without wasting any time, I enrolled in Programming Hero's Complete Web Development course, which I recently completed successfully. HTML5, CSS3, Javascript, React, Node.js, Express.js, and MongoDb are among my web development skills. </p>
            <button className='btn bg-yellow-600 hover:bg-yellow-700 duration-300 text-black mt-4 text-lg px-6'>About me</button>
        </div>
    );
};

export default Banner;