import { Either } from "@sweet-monads/either";
import { useCallback, useState } from "react";

/**
 * Custom hook that handles API responses.
 * @returns An object containing the response handler and a boolean indicating if the API call is loading.
 */
export const useHandleApiResponse = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Handles the API response.
   * @template R The type of the successful response data.
   * @template E The type of the error response data.
   * @param apiCall A function that makes the API call and returns a Promise with either the successful response or the error response.
   * @param onSuccess A callback function that is called when the API call is successful.
   * @param onError A callback function that is called when the API call returns an error. It is optional and defaults to an empty function.
   * @returns The successful response data if the API call is successful, otherwise the error object.
   */
  const handler = useCallback(
    async <R, E>(
      apiCall: () => Promise<Either<E, R>>,
      onSuccess: (data: R) => void,
      onError: (error: Error) => void = () => {}
    ) => {
      setIsLoading(true);

      const response = await apiCall();
      const hasError = response.isLeft();

      if (hasError) {
        const error = response.value as Error;

        onError(error);
        setIsLoading(false);
        return error;
      }

      const data = response.value as R;

      onSuccess(data);
      setIsLoading(false);

      return data;
    },
    []
  );

  return { handler, isLoading };
};
