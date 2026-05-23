import { useState, useRef, useEffect } from 'react';

export default function Draggable({ children, className = '', style = {} }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const dragRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={dragRef}
      onMouseDown={handleMouseDown}
      className={`draggable ${className}`}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
        position: 'relative',
        zIndex: isDragging ? 50 : 1,
      }}
    >
      {children}
    </div>
  );
}
