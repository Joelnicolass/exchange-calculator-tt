import toast from "react-hot-toast";
import { ToastType } from "../domain/types";

/**
 * Retrieves an array of values from a map based on a specified key.
 *
 * @template T - The type of values stored in the map.
 * @template K - The type of the key used to retrieve the values.
 * @param {Map<string, T>} map - The map containing the values.
 * @param {K} key - The key used to retrieve the values.
 * @returns {T[K][]} - An array of values from the map.
 */
export const getValuesFromMap = <T, K extends keyof T>(
  map: Map<string, T>,
  key: K
): T[K][] => {
  const values = Array.from(map.values());
  return values.map((value) => value[key]);
};

/**
 * Converts a Map to an array of values.
 *
 * @template T - The type of values in the Map.
 * @param {Map<string, T>} map - The Map to convert.
 * @returns {T[]} - An array of values from the Map.
 */
export const mapToArr = <T>(map: Map<string, T>): T[] => {
  return Array.from(map.values());
};

/**
 * An object that maps month numbers to their corresponding abbreviations.
 */
export const months: Record<number, string> = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

/**
 * Formats a date into a string representation.
 * @param date - The date to format.
 * @returns The formatted date string.
 * @example formatDate(new Date("2021-01-01T00:00:00.000Z")) // "Jan 1, 2021, 00:00 UTC"
 */
export const formatDate = (date: Date): string => {
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${month} ${day}, ${year}, ${hour}:${minutes} UTC`;
};

// TODO: Create a service for toast notifications.

/**
 * Map of toast functions.
 *
 * @private
 */
const _toastMap = {
  [ToastType.SUCCESS]: (message: string) => toast.success(message),
  [ToastType.ERROR]: (message: string) => toast.error(message),
  [ToastType.WARNING]: (message: string) => toast(message),
};

/**
 * Shows a toast message of the specified type with the given message.
 * @param type - The type of the toast message.
 * @param message - The message to be displayed in the toast.
 */
export const showToast = (type: ToastType, message: string) => {
  _toastMap[type](message);
};
