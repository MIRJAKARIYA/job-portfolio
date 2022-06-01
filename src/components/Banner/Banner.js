import React from 'react';

const Banner = () => {
    return (
        <div className='w-[95%] md:w-[80%] mx-auto mt-10'>
            <h1 className='text-3xl font-semibold'>HELLO THERE!</h1>
            <h1 className='text-5xl font-bold mt-2'>I'M <span className='text-yellow-600'>MIR JAKARIYA</span></h1>
            <p className='md:w-[85%] w-[95%] mt-4 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aspernatur omnis dignissimos vel ea unde quas exercitationem dolores, veritatis ut dolorum laborum ducimus facilis accusamus vitae nam esse, doloribus eum corporis magnam. Officiis non assumenda incidunt doloribus? Labore omnis hic autem </p>
            <button className='btn bg-yellow-600 hover:bg-yellow-700 duration-300 text-black mt-4 text-lg px-6'>About me</button>
        </div>
    );
};

export default Banner;