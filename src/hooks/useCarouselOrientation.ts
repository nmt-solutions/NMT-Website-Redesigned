import { useEffect, useState } from "react";

const useCarouselOrientation = () => {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">(
    "horizontal",
  );

  useEffect(() => {
    const handleScreenResize = () => {
      if (window.innerWidth <= 880) {
        setOrientation("vertical");
      } else {
        setOrientation("horizontal");
      }
    };

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);

  return orientation;
};

export default useCarouselOrientation;
