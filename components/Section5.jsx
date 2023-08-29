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
      <div className="my-[120px]">
        <Marque item={data} direction="left" />
      </div>
      <div className=" max-w-[1200px] pb-[60px] mx-auto">
        <p className=" text-[2.75rem] font-[300] px-[60px]  pb-[60px] font-Inter leading-[1.5] tracking-[-1.8px]">
          My door is always open to new opportunities, so come say hello and
          have a chat about working together ↓
        </p>
        <p className=" text-[2.75rem] font-[300] px-[60px]   font-Inter leading-[1.5] tracking-[-1.8px]">
        Currently available <span className="text-[#61b05e]">•</span>
        </p>
        <Link href="/" className="hover:underline text-[#9966ff]">
        <p className=" text-[2.75rem] font-[300] px-[60px] text-[#9966ff]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Say hello@charlespatterson.co
        </p>
        </Link>
        <Link href="/" className="hover:underline text-[#ff00f6]">
        <p className=" text-[2.75rem] font-[300] px-[60px] text-[#ff00f6]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Dribbbling on Dribbble
        </p>
        </Link>
        <Link href="/" className="hover:underline text-[#0090f0]">
        <p className=" text-[2.75rem] font-[300] px-[60px] text-[#0090f0]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Tweeting on Twitter
        </p>
        </Link>
        <Link href="/" className="hover:underline text-[#ff7b00]">
        <p className=" text-[2.75rem] font-[300] px-[60px] text-[#ff7b00]    font-Inter leading-[1.5] tracking-[-1.8px]">
        Subbing on Substack
        </p>
        </Link>
      </div>
    </>
  );
}

export default Section5;
