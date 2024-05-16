import React, { useEffect } from "react";

const ScrollEventListener = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event detected.");
    };

    // Add scroll event listener when the component mounts
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener when the component unmounts
      document.removeEventListener("scroll", handleScroll);
      console.log("Scroll event listener removed.");
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return <div>Scroll Event Listener Component</div>;
};

export default ScrollEventListener;
