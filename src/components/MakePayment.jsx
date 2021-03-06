import React, { useState, useEffect } from "react";

const MakePayment = ({ data }) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1200px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  var sliderSize = matches ? [0, 3] : [0, 5];

  const [current, setCurrent] = useState(sliderSize);
  const [showingData, setShowingData] = useState(
    data.slice(sliderSize[0], sliderSize[1])
  );

  useEffect(() => {
    setShowingData(data.slice(current[0], current[1]));
    // eslint-disable-next-line
  }, [current]);

  const handleClick = (e) => {
    if (matches) {
      if (e.target.className === "fas fa-chevron-right next") {
        // next button
        if (current[1] < data.length) {
          setCurrent([current[0] + 3, current[1] + 3]);
        } else if (
          current[1] === data.length ||
          current[1] === data.length + 1
        ) {
          setCurrent([0, 3]);
        }
      } else {
        // prev button
        if (current[0] > 0) {
          setCurrent([current[0] - 3, current[1] - 3]);
        } else if (current[0] === 0) {
          setCurrent([data.length - 3, data.length]);
        }
      }
    } else {
      if (e.target.className === "fas fa-chevron-right next") {
        // next button
        if (current[1] < data.length) {
          setCurrent([current[0] + 5, current[1] + 5]);
        } else if (current[1] === data.length) {
          setCurrent([0, 5]);
        }
      } else {
        // prev button
        if (current[0] > 0) {
          setCurrent([current[0] - 5, current[1] - 5]);
        } else if (current[0] === 0) {
          setCurrent([data.length - 5, data.length]);
        }
      }
    }
  };

  if (!Array.isArray(data) || data.length <= 0) return null;
  return (
    <div className="make-payments">
      <div className="payments-content">
        <div className="payments-title">
          <p>Make Payment</p>
          <i className="fas fa-info-circle mobile-hide"></i>

          <div className="mobile-nav">
            <button
              onClick={handleClick}
              className="payments-nav-btn desktop-hide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={handleClick}
              className="payments-nav-btn desktop-hide"
            >
              <i className="fas fa-chevron-right next"></i>
            </button>
          </div>
        </div>

        <hr />

        <div className="payments-slider">
          <div className="pay-carousel">
            <button
              onClick={handleClick}
              className="payments-nav-btn mobile-hide"
            >
              <i className="fas fa-chevron-left "></i>
            </button>

            {showingData.map((item, index) => (
              <div className="payments-slider-content" key={index}>
                <a href={`/${item.title}`}>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </a>
              </div>
            ))}

            <button
              onClick={handleClick}
              className="payments-nav-btn mobile-hide"
            >
              <i className="fas fa-chevron-right next"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
