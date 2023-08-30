import React, { useEffect, useState } from 'react';

const TiltedVideo = ({src,part}) => {
  const [rotation, setRotation] = useState(30); // Initial rotation angle
 

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newRotation = 30 - scrollY / 20; // You can experiment with this factor

    const clampedRotation = Math.max(newRotation, 0); 


    setRotation(clampedRotation);

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ro= 40
  return (
    <div className="  flex justify-center gap-[10px] overflow-visible tilted-container">
     {
      part === "video" ? <>
      <video
        src={src}
        className="rounded-[40px] transform tilted-video w-full h-full"
        loop
        autoPlay
        muted
        playsInline
        style={{
          transform: `rotateX(${rotation}deg)`,
          WebkitTransform: `rotateX(${rotation}deg)`,
          MozTransform: `rotateX(${rotation}deg)`,
          msTransform: `rotateX(${rotation}deg)`,
          OTransform: `rotateX(${rotation}deg)`,
        }}
      />
      </>:
      <>
        <img alt="as"   src={src} 
        className='rounded-[40px] transform tilted-video w-full h-full'
         style={{
          transform: `rotateX(${ro}deg)`,
        }}/>
      </>
     }
    </div>
  );
};

export default TiltedVideo;
