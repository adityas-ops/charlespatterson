import React from "react";

function Header() {
  return (
    <>
      <div className=" w-full h-auto  relative sm:fixed top-0   z-[50]" 
      style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, .1)",
          }}
      >
        <div
          className=" flex items-center flex-col   flex-nowrap min-h-fit justify-start relative"
         
        >
          <div className="  flex  items-center flex-nowrap h-full sm:h-[120px] justify-between  py-[40px] px-[30px] sm:px-[60px] w-full  ">
            <div className=" text-white b">
             <img
             src="/images/star.svg"
             className=" w-[24px] h-[24px] text-white"
             alt="as"
             />
            </div>
            <div className=" w-[160px] text-center">
            <p className=" text-[1rem] text-white font-[400] font-Inter">say hello</p>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;
