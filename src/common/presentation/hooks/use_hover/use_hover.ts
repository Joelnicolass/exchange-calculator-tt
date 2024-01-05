import { useState } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const controllers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, controllers];
};
