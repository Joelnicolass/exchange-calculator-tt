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

export const mapToArr = <T>(map: Map<string, T>): T[] => {
  return Array.from(map.values());
};
