import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function FadeEffect() {
  useEffect(() => {
    let currentBreakpoint = '';

    const fadeIn = () => {
      document.body.style.opacity = '1';
    };

    const fadeOut = () => {
      document.body.style.opacity = '0';
    };

    const handleResize = () => {
      let newBreakpoint;

      if (window.innerWidth >= 3000) {
        newBreakpoint = 'xl';
      }
        else if (window.innerWidth >=1024) {
          newBreakpoint = 'large';
        } else if (window.innerWidth >= 800) {
        newBreakpoint = 'medium';
      } else {
        newBreakpoint = 'phone';
      }

      if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        fadeOut(); // First fade out
        setTimeout(fadeIn, 1000); // Fade back in after 1 second
      }
    };

    // Initial fade in on load
    fadeIn();

    // Add event listener for resize to detect breakpoint changes
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}

root.render(
  <React.StrictMode>
    <FadeEffect /> {/* Handles fade on each breakpoint change */}
    <App />
  </React.StrictMode>
);
