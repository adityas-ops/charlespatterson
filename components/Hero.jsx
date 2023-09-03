import React from "react";
import TiltedVideo from "./TiltedVideo";

function Hero() {
  return (
    <div className="text-black   sm:pt-0   flex flex-col flex-nowrap relative  gap-[54px] justify-center z-0 overflow-visible">
      <div className=" flex flex-col pt-[60px]  px-[30px] max-w-[1200px] mx-auto sm:flex-shrink-0 justify-start">
        <p className=" font-Gallary text-[75px] sm:text-[120px]  leading-[0.8] text-black ">
          Charles <br /> Patterson
        </p>
        <p className=" hidden sm:block font-Inter font-[300] mt-[55px] text-[#9d78e8] sm:text-[44px] text-[33px] tracking-[-1.8px] leading-[1.5em] ">
          <span className="text-black text-[44px]">
            I&apos;m Charles — senior staff product designer from London.
            <br />
          </span>
          I&apos;ve worked with some amazing companies like InVision, <br />{" "}
          Spotify, Nike, Samsung, Warner Music & Microsoft
        </p>
        <p className=" block sm:hidden w-[95%]  font-Inter font-[300] mt-[55px] text-[#9d78e8] sm:text-[44px] text-[33px] tracking-[-1.8px] leading-[1.5em] ">
          <span className="text-black text-[44px]">
            I&apos;m Charles — senior staff product designer from London.
            <br />
          </span>
          I&apos;ve worked with some amazing companies like InVision,
          Spotify, Nike, Samsung, Warner Music & Microsoft
        </p>
      </div>
     <div className="relative h-full sm:h-[900px]">
     <div className=" hidden sm:block absolute top-[-12%]">
      <TiltedVideo/>
      </div>
     </div>
      <div className=" sm:hidden w-full h-[280px]">
        <video 
        autoPlay
        loop
        muted
        playsInline
        className=" w-full h-full object-cover"
        >
          <source src="images/gsZeGPMnnBEfnSqGVdYSoH7QWU~9oF3x4teSB_tY4o56BdpE8eAJ8GKQh8l76FfoD8YyMg.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default Hero;
