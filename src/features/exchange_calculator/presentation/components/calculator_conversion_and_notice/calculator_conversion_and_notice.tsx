import React from "react";
import AppBaseRateConversion from "../../../../../common/presentation/components/app_base_rate_conversion/app_base_rate_conversion";
import AppNotice from "../../../../../common/presentation/components/app_notice/app_notice";
import { useCalculatorContext } from "../../hooks/use_calculator_context";
import LinksAndLastUpdated from "../links_and_last_updated/links_and_last_updated";

import styles from "./calculator_conversion_and_notice.module.css";

const ConversionAndNoticeContainer = () => {
  const {
    fromCurrency,
    toCurrency,
    currencies,
    rates,
    lastUpdated,
    calculateInverted,
  } = useCalculatorContext();

  const NOTICE = `We use the mid-market rate for our Converter. This is for 
      informational purposes only. You won’t receive this rate when sending money.`;

  return (
    <section className={styles.footer}>
      <div>
        <AppBaseRateConversion
          fromAmount="1"
          fromSymbol={currencies.get(fromCurrency)?.id || ""}
          toAmount={rates?.get(toCurrency)?.toString() || ""}
          toSymbol={currencies.get(toCurrency)?.id || ""}
        />

        <AppBaseRateConversion
          fromAmount="1"
          fromSymbol={currencies.get(toCurrency)?.id || ""}
          toAmount={calculateInverted()}
          toSymbol={currencies.get(fromCurrency)?.id || ""}
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
