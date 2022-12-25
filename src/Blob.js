import React, { useState, useEffect } from 'react';

function Blob() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <svg width="100" height="100" style={{ position: 'absolute', top: position.y, left: position.x }}>
      <circle cx="50" cy="50" r="40" fill="purple" />
    </svg>
  );
}

export default Blob;







