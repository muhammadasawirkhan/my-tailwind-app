import React from 'react';
import Left from "../assets/images/Left.png";
import Right from "../assets/images/Right.png";

export const Hero_section = () => {
    return (
        <>
            <div className=''>
                <div className='text-center mt-[50px]'>
                    <h1 className='text-6xl'>DISCOVER, CREATE &<br /> SELL ARTWORKS.</h1>
                </div>
                <div className='text-center mt-[20px]'>
                    <p className='font-roboto'>Discover and trade unique digital art pieces on our NFT website,<br /> where creativity meets blockchain technology.</p>
                </div>
                <div className='flex justify-between'>
                    <div className='mt-[150px]'>
                        <img src={Left} className='w-[450px]' alt="" />
                    </div>
                    <div className='mt-[150px]'>
                        <img src={Right} className='w-[450px]' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero_section;
