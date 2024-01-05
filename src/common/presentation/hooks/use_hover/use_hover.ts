import { useState } from "react";

/**
 * Custom hook that tracks whether an element is being hovered or not.
 * @returns A tuple containing a boolean value indicating whether the element is hovered and an object with event handlers for onMouseEnter and onMouseLeave.
 */
export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const controllers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, controllers];
};
