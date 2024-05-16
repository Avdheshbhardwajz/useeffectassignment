import React, { useEffect } from "react";

const TimerComponent = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer is cleared.");
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return <div>Timer Component</div>;
};

export default TimerComponent;
