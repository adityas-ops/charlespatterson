import React from "react";
import Marque from "./Marque";
import Link from "next/link";

const data = [
  "/images/marquee-3/0Tmk5X4eFSi61X5542VsuoWbg1I.jpg",
  "/images/marquee-3/I03kfN1ozrbQqugrHfqqxZy7T5Q.webp",
  "/images/marquee-3/oTb4mxvoQxECXKvhYpO9hv9vq8.jpg",
  "/images/marquee-3/Ozw57qZSwFRDQ8VR9pjjYVnBQ.webp",
];

function Section5() {
  return (
    <>
      <div className="sm:my-[120px] my-[60px]">
        <Marque item={data} direction="left" />
      </div>
      <div className=" max-w-[1200px] px-[30px] contrast-75 sm:px-[60px] pb-[60px] mx-auto">
        <p className=" text-[23px] sm:text-[2.75rem] font-[300] px-0 sm:px-[60px]  pb-[60px] font-Inter leading-[1.5] sm:w-full w-[95%] tracking-normal sm:tracking-[-1.8px]">
          My door is always open to new opportunities, so come say hello and
          have a chat about working together ↓
        </p>
        <p className=" text-[23px] sm:text-[2.75rem] font-[300]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Currently available <span className="text-[#61b05e]">•</span>
        </p>
        <Link href="/" className="hover:underline text-[#9966ff]">
        <p className=" sm:block hidden text-[23px] sm:text-[2.75rem] font-[300]  text-[#9966ff]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Say hello@charlespatterson.co
        </p>
        <p className=" block sm:hidden text-[23px] sm:text-[2.75rem] font-[300]  text-[#9966ff]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Say <br/> hello@charlespatterson.co
        </p>
        </Link>
        <Link href="/" className="hover:underline text-[#ff00f6]">
        <p className=" text-[23px] sm:text-[2.75rem] font-[300]  text-[#ff00f6]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Dribbbling on Dribbble
        </p>
        </Link>
        <Link href="/" className="hover:underline text-[#0090f0]">
        <p className=" text-[23px] sm:text-[2.75rem] font-[300]  text-[#0090f0]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Tweeting on Twitter
        </p>
        </Link>
        <Link href="/" className="hover:underline text-[#ff7b00]">
        <p className=" text-[23px] sm:text-[2.75rem] font-[300]  text-[#ff7b00]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Subbing on Substack
        </p>
        </Link>
      </div>
    </>
  );
}

export default Section5;
