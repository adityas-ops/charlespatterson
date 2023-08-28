import React from "react";
import TiltedVideo from "./TiltedVideo";
import TiltedImage from "./TiltedImage";

function Hero() {
  return (
    <div className="text-white  flex flex-col flex-nowrap relative  gap-[54px] justify-center z-0 overflow-visible">
      <div className=" flex flex-col max-w-[1200px] mx-auto flex-shrink-0 justify-start">
        <p className=" font-Gallary text-[120px]  leading-[0.8] text-white ">
          Charles <br /> Patterson
        </p>
        <p className=" font-Inter font-[300] mt-[55px] text-[#9d78e8] text-[44px] tracking-[-1.8px] leading-[1.5em] ">
          <span className="text-white">
            I&apos;m Charles — senior staff product designer from London.
            <br />
          </span>
          I&apos;ve worked with some amazing companies like InVision, <br />{" "}
          Spotify, Nike, Samsung, Warner Music & Microsoft
        </p>
      </div>
      <div className="">
      <TiltedVideo part="video" src="images/gsZeGPMnnBEfnSqGVdYSoH7QWU~9oF3x4teSB_tY4o56BdpE8eAJ8GKQh8l76FfoD8YyMg.mp4"/>
      {/* <TiltedImage/> */}
      </div>
    </div>
  );
}

export default Hero;
