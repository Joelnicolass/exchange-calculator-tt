import React from "react";
import AppBaseRateConversion from "../../../../../common/presentation/components/app_base_rate_conversion/app_base_rate_conversion";
import AppNotice from "../../../../../common/presentation/components/app_notice/app_notice";
import LinksAndLastUpdated from "../links_and_last_updated/links_and_last_updated";

import styles from "./calculator_conversion_and_notice.module.css";
import { useNotice } from "../../hooks/use_notice";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

/**
 * Container component for displaying the conversion rate and notice.
 */
const ConversionAndNoticeContainer = () => {
  const {
    currenciesAndRates: { lastUpdated },
    resultExchange: { baseRateConversion, invertedBaseRateConversion },
    notice: { NOTICE },
  } = useCalculatorContext();

  return (
    <section className={styles.footer}>
      <div>
        <AppBaseRateConversion
          fromAmount={baseRateConversion.fromAmount}
          fromSymbol={baseRateConversion.fromSymbol}
          toAmount={baseRateConversion.toAmount}
          toSymbol={baseRateConversion.toSymbol}
        />

        <AppBaseRateConversion
          fromAmount={invertedBaseRateConversion.fromAmount}
          fromSymbol={invertedBaseRateConversion.fromSymbol}
          toAmount={invertedBaseRateConversion.toAmount}
          toSymbol={invertedBaseRateConversion.toSymbol}
        />
      </div>

      <section>
        <AppNotice>
          <p>{NOTICE}</p>
        </AppNotice>
        <LinksAndLastUpdated lastUpdated={lastUpdated} />
      </section>
    </section>
  );
};

export default ConversionAndNoticeContainer;
