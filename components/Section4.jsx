import React from 'react'
import TiltedVideo from './TiltedVideo'
import TiltedImage from './TiltedImage'

function Section4() {
  return (
   <>
    <div className="text-white  flex flex-col flex-nowrap max-w-[91.5%] mx-auto   justify-center z-0 overflow-hidden ">
     <TiltedImage/>
      </div>
      <div className="pt-[60px] px-[60px] max-w-[91.5%] mx-auto">
          <div className="w-full grid grid-cols-2">
            <div className="h-auto w-full flex justify-start items-start text-left">
              <p className=" font-Inter text-[34px] font-[300] leading-[1.4] ">
              Good Monkeyz
              </p>
            </div>
            <div className="h-auto w-full flex justify-start items-start text-left">
              <p className=" text-[24px] font-[300] font-Inter leading-[2em] w-[100%] ">
              A powerful NFT Collection & Clothing Brand. 10,000 unique pieces of artwork, this is one of the biggest creative projects I&apos;ve worked on.
              </p>
            </div>
          </div>
        </div>
   </>
  )
}

export default Section4