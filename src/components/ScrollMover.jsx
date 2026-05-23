import { useState, useEffect } from 'react';

export default function ScrollMover({ children, speed = 0.5, className = '', style = {} }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId;
    
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * speed);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div 
      className={className}
      style={{ 
        ...style, 
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
