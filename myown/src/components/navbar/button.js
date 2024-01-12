import React, { useRef, useEffect } from 'react';
import './button.css';
import IntersectionObserver as observe;

const Button = ({ text, targetElementId }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const navbarHeight = buttonRef.current.closest('.navbar').offsetHeight;
    buttonRef.current.setAttribute('data-offset', navbarHeight);

    const targetElement = document.getElementById(targetElementId);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          buttonRef.current.focus();
        }
      },
      { threshold: 0.5 } //percentage of visibility 
    );

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [targetElementId]);

  const handleClick = () => {
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
      const offset = parseFloat(buttonRef.current.getAttribute('data-offset')) || 0;
      const elementPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button ref={buttonRef} onClick={handleClick} className="button">
      {text}
    </button>
  );
};

export default Button;