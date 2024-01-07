import { useEffect, useState } from "react";

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
