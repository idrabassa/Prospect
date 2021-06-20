import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
import data from "./dataPeople";
function Slider() {
  AOS.init();
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [ripedAnimated, setRipedAnimated] = useState(false);
  const animatedPrev = useRef();
  const animatedNext = useRef();
  const prevButton = () => {
    setTimeout(() => setIndex(index - 1), 300);

    animatedPrev.current.classList.remove("view");
    // animatedNext.current.classList.remove('view')
    setTimeout(() => animatedPrev.current.classList.add("view"), 100);
  };
  const nextButton = () => {
    setTimeout(() => setIndex(index + 1), 300);
    // animatedPrev.current.classList.remove('view')
    animatedNext.current.classList.remove("view");
    setTimeout(() => animatedNext.current.classList.add("view"), 100);
  };
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div className="slider-buttons" data-aos="fade-left">
        <button className="slider-btn" onClick={prevButton}>
          <div className="riple-animated" ref={animatedPrev}></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
            <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z" />
          </svg>
        </button>
        <button className="slider-btn" onClick={nextButton}>
          <div className="riple-animated" ref={animatedNext}></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
          </svg>
        </button>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={person.id}>
              <div className="personal-info" data-aos="fade-right">
                <h1>
                  "Helped us to imporove<br></br> productivity"
                </h1>
                <p className="text">{person.quote}</p>
                <h4>{`${person.name} ,`}</h4>
                <p className="title">{person.title}</p>
                <div className="slider-instance">
                  <div
                    className={`dot-slider ${
                      personIndex === 0 ? "highlight" : ""
                    }`}
                  ></div>
                  <div
                    className={`dot-slider ${
                      personIndex === 1 ? "highlight" : ""
                    }`}
                  ></div>
                  <div
                    className={`dot-slider ${
                      personIndex === 2 ? "highlight" : ""
                    }`}
                  ></div>
                  <div
                    className={`dot-slider ${
                      personIndex === 3 ? "highlight" : ""
                    }`}
                  ></div>
                </div>
              </div>
              <img className="person-img" src={person.image} />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Slider;
