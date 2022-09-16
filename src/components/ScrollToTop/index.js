import React from 'react';
import { useState, useEffect } from 'react';

import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.scss';

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(window.scrollY);
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaArrowUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
}

export default ScrollToTop;
