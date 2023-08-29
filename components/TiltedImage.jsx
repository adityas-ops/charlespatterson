import React, { useEffect, useState, useRef } from 'react';

function TiltedImage() {
  const [rotationImg, setRotationImg] = useState(30);
  const containerRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const handleScroll = () => {
    let containerTop = containerRef.current.getBoundingClientRect().top;
    // console.log("container -top ",containerTop);
     
    //  console.log(" new container -top ",containerTop);
    const newRotationImg = 10 + containerTop / 10;
    console.log("rotate deg",newRotationImg)
    const clampedRotation = Math.max(newRotationImg, 0);
    setRotationImg(clampedRotation);
  };

  useEffect(() => {
    const containerElement = containerRef.current;

    const handleIntersection = (entries) => {
      const entry = entries[0];
      setIsInViewport(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    if (containerElement) {
      observer.observe(containerElement);
    }

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isInViewport) {
      window.addEventListener('scroll', handleScroll);
      // Trigger initial scroll effect
      handleScroll();
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInViewport]);

  return (
    <div ref={containerRef} className="flex  justify-center gap-[10px] overflow-hidden tilted-container-image">
      <img
        alt="as"
        src="/images/D65cQSHhRwmV9vFgGHXdq7nQ8t4.jpeg"
        className="rounded-[40px]  transform tilted-video "
        style={{
          transform: `rotateX(${rotationImg}deg)`,
        }}
      />
    </div>
  );
}

export default TiltedImage;
