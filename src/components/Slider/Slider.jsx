import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Slider.css";

function Slider({ children }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const firstItem = container.querySelector(".slider-item");

    if (!firstItem) return;

    const gap = parseFloat(getComputedStyle(container.querySelector(".slider-track")).gap) || 0;
    const scrollAmount = firstItem.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="slider">
      <button
        className="slider-btn prev"
        onClick={() => scroll("left")}
        aria-label="Previous"
      >
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
            : (
              <div className="slider-item">
                {children}
              </div>
            )}
        </div>
      </div>

      <button
        className="slider-btn next"
        onClick={() => scroll("right")}
        aria-label="Next"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Slider;
