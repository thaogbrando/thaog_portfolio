'use client'

import React from 'react'

const ScrollButton = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
  

    return (
        <div className="flex items-center justify-center w-[100px]">
            <svg viewBox="0 0 100 150" className="mouse">
                <mask id="mouse-scroll-mask">
                    <rect x="0" width="100" height="150" fill="black" />
                    <circle cx="50" cy="75" r="10" fill="black" className="mouse-wheel" />
                </mask>
                <rect className="mouse-body" x="0" width="100" height="150" rx="50" mask="url(#mouse-scroll-mask)" />
            </svg>
        </div>
    )
}

export default ScrollButton