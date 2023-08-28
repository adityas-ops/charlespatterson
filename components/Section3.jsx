import React from 'react'
import Marque from './Marque'


const data = [
  "/images/marquee-2/5DYeyOTiUQV7YehnPzM57lu5E.jpg",
  "/images/marquee-2/TYPr6PJ3Y63eMjf8HJRVTVlOnM.jpg",
  "/images/marquee-2/TzJeyymN1zd7xj5bQjZph83zFY.jpg",
  "/images/marquee-2/zG6mRePORoaU9BmVB96MKDIQG4U.jpg"
]

function Section3() {
  return (
    <>
      <div className=' h-[512px] pt-[160px] flex items-center justify-center '>
        <Marque item={data} direction="right"/>
      </div>
      <div className=' pt-[200px] max-w-[1280px]  mx-auto px-[60px] pb-[180px]'>
      <p className=" text-[3rem] font-[300] font-Inter leading-[1.5] tracking-[-1.8px]">
      Quality is never an accident. It&apos;s something you have to work hard for. 
          <span className="text-[#9d78ed]">
          I believe that attention to detail is crucial for achieving excellence, and I fiercely advocate it.
          </span>
        </p>
      </div>
    </>
  )
}

export default Section3