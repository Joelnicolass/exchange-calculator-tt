import { Either } from "@sweet-monads/either";
import { useCallback, useState } from "react";

export const useHandleApiResponse = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
