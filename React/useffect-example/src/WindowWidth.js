import React, { useEffect, useState } from "react";

function WindowWidth() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setwindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{windowWidth}</div>;
}
export default WindowWidth;
