import React, { useEffect, useState } from "react";

const Subevent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <div className="p-10 min-w-[300px] max-w-[500px] min-h-[400px] border-white border-2 text-2xl">
      <h2>Mouse Tracker</h2>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
    </div>
  );
};

export default Subevent;
