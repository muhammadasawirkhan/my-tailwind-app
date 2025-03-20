import React from 'react'
import Halfcircle from "../assets/images/Halfcircle.png"
import imgn1 from "../assets/images/imgn1.png"
import imgn2 from "../assets/images/imgn2.png"
import imgn3 from "../assets/images/imgn3.png"
import imgn4 from "../assets/images/imgn4.png"
import imgn5 from "../assets/images/imgn5.png"
import imgn6 from "../assets/images/imgn6.png"
import imgn7 from "../assets/images/imgn7.png"
import imgn8 from "../assets/images/imgn8.png"

export const Imagination = () => {
  return (
    <>

      <div className='text-center '>
        <h1 className='text-[64px] mt-[80px]'>TURN YOUR IMAGINATION <br /> INTO DIGITAL ASSET </h1>
      </div>
      <div className='relative'>
        <div className='absolute left-[120px] top-[130px] 2xl:top-[130px] 2xl:left-[400px]'>
          <div className="absolute inset-0 bg-[#FD0000] blur-[209px] w-[200px] h-[500px] -z-10 translate-x-[450px] translate-y-[150px]"></div>
          <img src={Halfcircle} alt="" />
        </div>
        <div className='absolute left-[50px] 2xl:left-[330px] top-[50px]'>
          <img src={imgn1} alt="" />
        </div>
        <div className='absolute left-[38px] 2xl:left-[338px] top-[250px]'>
          <img src={imgn2} alt="" />
        </div>
        <div className='absolute left-[20px] 2xl:left-[280px] top-[490px]'>
          <img src={imgn3} alt="" />
        </div>
        <div className='absolute left-[250px] top-[580px] 2xl:left-[530px]'>
          <img src={imgn4} alt="" />
        </div>
        <div className='absolute left-[920px] top-[590px] 2xl:left-[1200px]'>
          <img src={imgn5} alt="" />
        </div>
        <div className='absolute left-[1130px] 2xl:left-[1410px] top-[410px]'>
          <img src={imgn6} alt="" />
        </div>
        <div className='absolute left-[1150px] 2xl:left-[1435px] top-[110px]'>
          <img src={imgn7} alt="" />
        </div>
        <div className='absolute left-[870px] 2xl:left-[1140px] top-[40px]'>
          <img src={imgn8} alt="" />
        </div>
        <div className='absolute top-[300px] left-[300px] 2xl:left-[600px]'>
          <input type="text" placeholder="Enter text" class="w-[729px] h-[70px]  bg-[#fff] shadow-md p-3 border border-gray-300 rounded-lg focus:outline-none {/*focus:ring-2 focus:ring-blue-500 focus:border-blue-500*/}" />
          <button className=' absolute right-[20px] top-[10px] w-[119px] h-[50px] text-white rounded-md bg-[#FE0101]'>Generate</button>
        </div>

      </div>
    </>
  )
}
export default Imagination;