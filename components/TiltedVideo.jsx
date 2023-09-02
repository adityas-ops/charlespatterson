import React, { useEffect, useState } from 'react';

const TiltedVideo = () => {
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

  return (
    <div className="  flex justify-center gap-[10px] overflow-visible tilted-container">
    
      <video
        src="images/gsZeGPMnnBEfnSqGVdYSoH7QWU~9oF3x4teSB_tY4o56BdpE8eAJ8GKQh8l76FfoD8YyMg.mp4"
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
    </div>
  );
};

export default TiltedVideo;
