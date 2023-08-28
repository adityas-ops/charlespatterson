import React, { useEffect, useState } from 'react';

function TiltedImage() {
  const [rotationImg, setRotationImg] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the rate of rotation change based on your preference
    // const newRotation = 30 - scrollY / 20; // You can experiment with this factor
    const newRotationImg = 40-scrollY/20

    // Ensure the rotation stays within a certain range
    // const clampedRotation = Math.max(newRotation, 0); 
    //   const temp = Math.max(newRotationImg,0);
    // Prevent rotation below 0

    // setRotation(clampedRotation);
    setRotationImg(newRotationImg)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className="flex justify-center gap-[10px] overflow-visible tilted-container">
        <img
          alt="as"
          src="/images/D65cQSHhRwmV9vFgGHXdq7nQ8t4.jpeg"
          className="rounded-[40px] transform tilted-video w-full h-full"
          style={{
            transform: `rotateX(${rotationImg}deg)` ,
          }}
        />
      </div>
    </>
  );
}

export default TiltedImage;
