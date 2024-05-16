import React, { useEffect } from "react";

const Titlechng = ({ title }) => {
  useEffect(() => {
    document.title = title; // Update document title when component mounts or title prop changes
    return () => {
      document.title = "Default Title"; // Reset document title when component unmounts
    };
  }, [title]); // Effect will re-run when the title prop changes

  return null; // Since this component doesn't render anything, return null
};

export default Titlechng;
