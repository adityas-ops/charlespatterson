import React from 'react'
import Marquee from "react-fast-marquee";

function Marque({item,direction}) {
  return (
    <>
        <div className='w-full h-full'>
        <Marquee
            direction={direction}
            speed={75}
            gradient={false}
            autoFill={true}
            className="flex min-w-0 flex-[0_0_100%]  items-center gap-8 flex-nowrap"
          >
            {item.map((item, index) => (
              <div
                className="flex items-center justify-center mx-[12px] rounded-[30px]   w-full h-[400px] "
                key={index}
              >
                <img
                  src={item}
                  alt="marquee"
                  className=" w-full h-full object-cover mx-[16px] rounded-[30px] "
                />
              </div>
            ))}
          </Marquee>
        </div>
    </>
  )
}

export default Marque