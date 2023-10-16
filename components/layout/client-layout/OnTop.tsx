"use client";
import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
function OnTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-7 left-2 e py-2 px-4 "
          onClick={handleScrollToTop}
        >
          <BsFillArrowUpSquareFill className="text-blue-500 text-4xl bg-white rounded-full" />
        </button>
      )}
    </>
  );
}

export default OnTop;
