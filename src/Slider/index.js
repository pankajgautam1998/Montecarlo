import React, { useRef } from "react";

const Slider = () => {
  const containerRef = useRef(null);
  const handleScrollRight = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + 390,
      behavior: "smooth",
    });
  };
  const handleScrollLeft = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - 390,
      behavior: "smooth",
    });
  };
  return (
    <div className="p-10 slider-container">
      <div className="flex items-center">
        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto text-white h-96 w-96"
        >
          {[1, 2, 3, 4, 5].map(() => (
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-96"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 w-96">
        <button onClick={handleScrollLeft}>Prev</button>
        <button onClick={handleScrollRight}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
