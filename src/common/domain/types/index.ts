/**
 * Enum representing the size of an icon.
 */
export enum IconSize {
  SMALL = 16,
  MEDIUM = 24,
  LARGE = 32,
}

/**
 * Represents the properties for an icon component.
 */
export interface IconProps {
  size?: IconSize;
  color?: string;
}

/**
 * Enumerates the types of Toast notifications.
 */
export enum ToastType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
}
