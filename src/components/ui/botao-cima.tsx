import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import '/src/app/globals.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
