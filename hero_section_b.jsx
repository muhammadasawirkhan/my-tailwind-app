import React from 'react';
import Subtract from "../assets/images/Subtract.png"
import Card1pic from "../assets/images/Card1pic.png"
import Card2pic from "../assets/images/Card2pic.png"
import Card3pic from "../assets/images/Card3pic.png"
import Card4pic from "../assets/images/Card4pic.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"
import Left_arrow from "../assets/images/Left_arrow.png"
import Right_arrow from "../assets/images/Right_arrow.png"



export const Hero_section_b = () => {
    return (
        <>
            <div className='flex flex-wrap relative'>
                <div className='block'>
                    <div className='ml-[40px] mt-[30px]'>
                        <h1 className='text-4xl'>FEATURED COLLECTION</h1>
                    </div>
                    <div className='ml-[40px] mt-[10px]'>
                        <p className='font-roboto'>Explore our exclusive featured collection, showcasing innovative campaigns and creative <br /> storytellings from top brands around the world</p>
                    </div>
                </div>
                <div className='flex'>
                    <button className='absolute w-[40px] px-[8px] text-[#fff] h-[40px] rounded bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[1190px] rotate-45'><a href=""> <img src={Left_arrow} alt="" className='-rotate-45' /></a> </button>
                    <button className='absolute w-[40px] px-[8px] text-[#fff] h-[40px] rounded bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[1250px]  rotate-45'> <a href=""> <img src={Right_arrow} alt="" className='-rotate-45' /> </a> </button>
                </div>
            </div>
            {/*sm:left-[210px]*/}
            <div className='flex px-[25px] py-[25px]'>
                <div className='relative'>
                    <img src={Subtract} alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px]'>
                        <img src={Card1pic} className='w-[285px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px]'>BUY</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Subtract} alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px]'>
                        <img src={Card2pic} className='w-[285px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px]'>BUY</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Subtract} alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px]'>
                        <img src={Card3pic} className='w-[285px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px]'>BUY</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Subtract} alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px]'>
                        <img src={Card4pic} className='w-[285px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px]'>BUY</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Hero_section_b;
