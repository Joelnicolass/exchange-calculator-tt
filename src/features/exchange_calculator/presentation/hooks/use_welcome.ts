import { useEffect } from "react";
import { showToast } from "../../../../common/utils";
import { ToastType } from "../../../../common/domain/types";

/**
 * Custom hook that displays a series of welcome messages using toast notifications.
 * The messages are displayed at different intervals using setTimeout.
 * The timeouts are cleared when the component unmounts.
 */
export const useWelcome = () => {
  useEffect(() => {
    const firstMessage = setTimeout(() => {
      showToast(
        ToastType.SUCCESS,
        "Hello, Welcome to the Exchange Calculator! 💸"
      );
    }, 1000);

    const secondMessage = setTimeout(() => {
      showToast(
        ToastType.SUCCESS,
        "You can change the currencies by clicking on the currency name. 🤑"
      );
    }, 6000);

    const thirdMessage = setTimeout(() => {
      showToast(
        ToastType.SUCCESS,
        "You can change the amount by clicking on the amount. 💵"
      );
    }, 11000);

    return () => {
      clearTimeout(firstMessage);
      clearTimeout(secondMessage);
      clearTimeout(thirdMessage);
    };
  }, []);
};
