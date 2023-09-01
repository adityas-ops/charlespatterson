import React from "react";
import Marque from "./Marque";



const data = [
  "/images/marquee-1/BHsVy8rGX67wi1ySSvGBclCVYY.jpg",
  "/images/marquee-1/efnuOYKmEmfXlP9e1ww0cMMk.jpg",
  "/images/marquee-1/g9ehdMm3Y3a1b4r0gTeRfJSe9ok.jpg",
  "/images/marquee-1/MfRAdr2lBoOaHeiWBpbKbBfjwc0.jpg"
]

function Section1() {
  return (
    <>
    <div className=" w-full  text-black bg-white py-[32px] sm:py-[60px] max-w-[1280px]  mx-auto">
      <div className="sm:px-[60px] px-[32px]  max-w-[1280px] grid grid-cols-1 sm:grid-cols-2">
        <div className="h-auto w-full  flex justify-start items-start text-left">
          <p className=" hidden sm:block font-Inter text-[34px] font-[300] leading-[1.4] ">
            InVision
            <br />
            2015 / 2020
          </p>
          <p className=" block sm:hidden font-Inter text-[38px] font-[300] leading-[1.4] ">
          InVision — 2015 / 2020
          </p>
        </div>
        <div className="h-auto w-full flex justify-start items-start text-left">
          <p className=" text-[12px] sm:text-[24px] font-[300] font-Inter leading-[2em] w-full sm:w-[85%] ">
            At InVision, I lead the re-design of the iOS app and developed a new
            Android app, focusing on core platform features and
            design/prototyping tools. I also designed and launched the new
            design system, contributing to the company&apos;s user growth from
            100,000 to 5 million.
          </p>
        </div>
      </div>
    </div>
    <div className=" hidden sm:block mt-[60px] mb-[60px] w-full h-full">
      <Marque item={data} direction="left"/>
    </div>
    <div className=" block sm:hidden w-full h-[300px] mt-[8px]">
      <img 
      src="/images/MFhtNNVmvBF6tcaE2nlUOUNIpSg.jpg"
      className=" w-full h-full object-cover"
      alt="as"
      />
    </div>
    </>
  );
}

export default Section1;
