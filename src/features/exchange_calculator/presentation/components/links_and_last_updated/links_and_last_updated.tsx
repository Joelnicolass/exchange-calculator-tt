import React from "react";
import AppAnchor from "../../../../../common/presentation/components/app_anchor/app_anchor";
import { formatDate } from "../../../../../common/utils";

type Props = {
  lastUpdated: Date | undefined;
};

const LinksAndLastUpdated = ({ lastUpdated }: Props) => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "4px",
        padding: "1rem",
        fontSize: "12px",
        fontWeight: "300",
      }}
    >
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
