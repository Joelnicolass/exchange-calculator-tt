import { useEffect, useState } from "react";

/**
 * Custom hook that provides shimmer effect for form fields.
 * It dynamically adjusts the number of lines based on the window width.
 * @returns An object containing the number of lines for the shimmer effect.
 */
export const useFormFieldsShimmer = () => {
  const [lines, setLines] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLines(4);
      } else {
        setLines(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    lines,
  };
};
