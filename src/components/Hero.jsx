import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".imageContainer", {
        width: 0,
        duration: 2,
        ease: "power4.inOut",
        stagger: 2,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <div className="relative w-full h-[400px] overflow-hidden">
        <div className="imageContainer absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1719159381916-062fa9f435a6?w=1200&auto=format&fit=crop&q=80"
            alt="students"
          />
        </div>

        <div className="imageContainer absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525088068454-ff2c453e50e9?w=1200&auto=format&fit=crop&q=80"
            alt="football"
          />
        </div>

        <div className="imageContainer absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1613662449996-35130a75be10?w=1200&auto=format&fit=crop&q=80"
            alt="classroom"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;