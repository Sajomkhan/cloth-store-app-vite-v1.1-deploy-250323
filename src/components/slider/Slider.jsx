import  { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { ApiSlides } from '../../componentApi/SliderApi';
import "./Slider.css";
import { Link } from "react-router-dom";


const Slider = () => {
  // Styles
  const arrowStyle = "absolute rounded-full text-white flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(slides.length - 1 - 1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div className={`wrapper flex md:min-h-[570px] w-full items-center justify-center shadow-md rounded-lg overflow-hidden relative` + slide.background} key={index}>

              {/* left Arrow */}
              <div className={`left-5 ` + arrowStyle} onClick={prevSlide}>
                <ArrowLeftOutlined style={{ fontSize: "50px" }} />
              </div>

              {/* slice */}
              <div className="flex flex-col md:flex-row items-center justify-center w-full">
                {/* slide image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                  <img style={{ width: "70%", height: "60%" }}
                    src={slide.src}
                    alt="man"
                  />
                </div>
                {/* slide text */}
                <div className="flex-1 text-center md:text-left justify-center ml-8 mr-[70px]">
                  <p className="text-[20px] text-white md:text-[25px]">Wide Collection</p>
                  <h2 className="font-bold text-white text-[25px] md:text-[48px]">{slide.content.h2}</h2>
                  <p className="text-[20px] text-white md:text-[30px] font-bold">{slide.content.p}</p>
                  <Link to="/category">
                    <button className="btn bg-[#865DFF] mb-7">Shop Now</button>
                  </Link>
                </div>
              </div>

              {/* Right Arrow */}
              <div className={`right-5 ` + arrowStyle} onClick={nextSlide}>
                <ArrowRightOutlined style={{ fontSize: "50px" }} />
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Slider;
