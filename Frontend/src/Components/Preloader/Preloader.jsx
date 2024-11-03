import React, { useEffect, useRef, useState } from "react";
import './Preloader.css';

const Preloader = () => {
  const words = ["EXCLUSIVE", "TRENDY", "STYLISH","BRANDS"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const loaderRef = useRef(null); 

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  // Loader animation and visibility handling
  useEffect(() => {
    const timer = setTimeout(() => {
      
        loaderRef.current.style.top = "-100%";
        loaderRef.current.display = "hidden"; 
     
    }, 3300); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <div
      ref={loaderRef} 
      className="preloader-container flex items-center justify-center bg-black w-screen h-screen sm:h-screen"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      
    >
      <p className="preloader-word font-satoshi-regular  font-bold text-5xl text-white">
        {words[currentWordIndex]}
      </p>
    </div>
  );
};

export default Preloader;
