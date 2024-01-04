interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
  color?: string;
}
/**
 * ArrowDown component.
 *
 * @param size - The size of the arrow icon. Default is 16.
 * @param color - The color of the arrow icon. Default is "#000".
 * @param props - Additional props for the SVG element.
 * @returns The ArrowDown component.
 */
const ArrowDown = ({ size = 16, color = "#000", ...props }: Props) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12.3609C7.8396 12.3609 7.6792 12.3208 7.599 12.2005L0.180451 5.06266C-0.0601504 4.82205 -0.0601504 4.46115 0.180451 4.22055C0.380952 3.97995 0.781955 3.97995 1.02256 4.18045L8 10.9173L14.9774 4.18045C15.218 3.93985 15.619 3.93985 15.8195 4.18045C16.0602 4.42105 16.0602 4.82206 15.8195 5.02256L8.4411 12.2005C8.3208 12.2807 8.1604 12.3609 8 12.3609Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
