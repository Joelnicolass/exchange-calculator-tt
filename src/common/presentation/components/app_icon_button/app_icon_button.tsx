import React from "react";

import styles from "./app_icon_button.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: React.ReactNode | React.ReactNode[];
}

/**
 * A button component that displays an icon.
 *
 * @component
 * @param {React.ReactNode} icon - The icon to be displayed inside the button.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Additional props to be passed to the button element.
 * @returns {JSX.Element} The rendered button component.
 */
const AppIconButton = ({ icon, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {icon}
    </button>
  );
};

export default AppIconButton;
