import React from "react";

function Section2() {
  return (
    <>
      <div className=" max-w-[1200px]  mx-auto flex flex-col gap-[60px] justify-center pt-[120px] pb-[180px] px-[60px]">
        <p className=" text-[3rem] font-[300] font-Inter leading-[1.5] tracking-[-1.8px]">
          I am committed to ensuring that every aspect of my work, from the
          initial research and planning stages to the final touches, is of the
          highest quality.
          <span className="text-[#9d78ed]">
            I value the importance of close collaboration with research and
            engineering teams in order to create designs that have a positive
            impact for our users.
          </span>
        </p>
      </div>
      <div className=" w-full h-auto max-w-[1200px] mx-auto">
        <div className=" px-[60px] pb-[60px] relative ">
          <div className="h-[800px] w-full">
            <img
              src="/images/MFhtNNVmvBF6tcaE2nlUOUNIpSg.jpg"
              className=" w-full h-full"
              alt="as"
            />
          </div>
        </div>
        <div className="pt-[60px] px-[60px]">
          <div className="w-full grid grid-cols-2">
            <div className="h-auto w-full flex justify-start items-start text-left">
              <p className=" font-Inter text-[34px] font-[300] leading-[1.4] ">
                Logic + Rhythm
                <br />
                2020 / 2022
              </p>
            </div>
            <div className="h-auto w-full flex justify-start items-start text-left">
              <p className=" text-[24px] font-[300] font-Inter leading-[2em] w-[98%] ">
                I have had the pleasure of working with a highly skilled and
                talented team of designers and engineers on a wide range of
                products and web3 projects. Together, we were able to take many
                projects from concept to reality, and our collaboration was
                truly a 0 to 1 experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
