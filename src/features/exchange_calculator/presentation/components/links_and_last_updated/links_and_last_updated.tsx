import AppAnchor from "../../../../../common/presentation/components/app_anchor/app_anchor";
import { formatDate } from "../../../../../common/utils";

import styles from "./links_and_last_updated.module.css";

type Props = {
  lastUpdated: Date | undefined;
};

/**
 * Component that displays links and the last update date.
 *
 * @param lastUpdated The date of the last update.
 */
const LinksAndLastUpdated = ({ lastUpdated }: Props) => {
  return (
    <section className={styles.link_and_last_updated}>
      <p>
        <AppAnchor blank href="https://www.xe.com/currency/eur-euro/">
          Euro
        </AppAnchor>{" "}
        to{" "}
        <AppAnchor blank href="https://www.xe.com/currency/usd-us-dollar/">
          US Dollar
        </AppAnchor>{" "}
        conversion - Last updated:{" "}
        {lastUpdated ? formatDate(lastUpdated) : "No data available"}
      </p>
    </section>
  );
};

export default LinksAndLastUpdated;
