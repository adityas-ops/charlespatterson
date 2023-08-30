import React from 'react'
import TiltedVideo from './TiltedVideo'
import TiltedImage from './TiltedImage'

function Section4() {
  return (
   <>
    <div className="text-white hidden sm:flex flex-col flex-nowrap max-w-[91.5%] mx-auto   justify-center z-0 overflow-hidden ">
     <TiltedImage/>
      </div>
      <div className=' block pt-[48px] sm:hidden w-full h-[300px]'>
      <img 
      src="/images/D65cQSHhRwmV9vFgGHXdq7nQ8t4.jpeg"
      className="w-full h-full object-cover"
      alt='as'
      />
      </div>
      <div className="sm:pt-[60px] pt-[32px] pb-[40px] sm:pb-0 px-[32px] sm:px-[60px] max-w-full sm:max-w-[91.5%] mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2">
            <div className="h-auto w-full flex justify-start items-start text-left">
              <p className=" font-Inter text-[38px] sm:text-[34px] font-[300] leading-[1.4] ">
              Good Monkeyz
              </p>
            </div>
            <div className="h-auto w-full flex justify-start items-start text-left">
              <p className=" sm:text-[24px] text-[12px] font-[300] font-Inter leading-[2em] w-[100%] ">
              A powerful NFT Collection & Clothing Brand. 10,000 unique pieces of artwork, this is one of the biggest creative projects I&apos;ve worked on.
              </p>
            </div>
          </div>
        </div>
   </>
  )
}

export default Section4