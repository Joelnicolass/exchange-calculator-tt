/**
 * Custom hook that provides the notice message and last updated timestamp.
 * @returns An object containing the notice message, last updated timestamp,
 * base rate conversion, and inverted base rate conversion.
 */
export const useNotice = () => {
  const NOTICE = `We use the mid-market rate for our Converter. This is for 
        informational purposes only. You won’t receive this rate when sending money.`;

  return {
    NOTICE,
  };
};
