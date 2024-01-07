import { ShimmerTitle } from "react-shimmer-effects";

import styles from "./form_result_exchange_shimmer.module.css";

/**
 * Component that displays a shimmer effect for the exchange form result.
 */
const FormResultExchangeShimmer = () => {
  return (
    <div className={styles.container}>
      <ShimmerTitle variant="primary" line={2} gap={30} />
    </div>
  );
};

export default FormResultExchangeShimmer;
