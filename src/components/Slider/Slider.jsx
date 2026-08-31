import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Slider.css";

function Slider({ children }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="slider">
      <button className="slider-btn prev" onClick={scrollLeft}>
        <ChevronLeft />
      </button>

      <div className="slider-container" ref={sliderRef}>
        <div className="slider-track">
          {Array.isArray(children)
            ? children.map((child, index) => (
                <div className="slider-item" key={index}>
                  {child}
                </div>
              ))
            : children}
        </div>
      </div>

      <button className="slider-btn next" onClick={scrollRight}>
        <ChevronRight />
      </button>
    </div>
  );
}

export default Slider;
