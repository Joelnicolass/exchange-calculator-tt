import { useCurrenciesAndRates } from "../hooks/use_currencies_and_rates";
import { useFormExchange } from "../hooks/use_form_exchange";
import { useNotice } from "../hooks/use_notice";
import { useResultExchange } from "../hooks/use_result_exchange";

/**
 * Hook that provides a view model for the calculator component.
 * It combines the functionality of other hooks to provide the necessary data and functions.
 *
 * @returns The calculator view model object.
 */
export const useCalculator = () => {
  const {
    rates,
    currencies,
    lastUpdated,
    isCurrenciesLoading,
    isExchangeRatesLoading,
    getCurrencies,
    sanitizeCurrencies,
    getRatesByBaseCurrency,
  } = useCurrenciesAndRates();

  const {
    form,
    amount,
    toCurrency,
    fromCurrency,
    prefix,
    options,
    placeholder,
    FormExchangeFields,
    handleReset,
    invertCurrencies,
    handleValueChange,
    handleToCurrencyChange,
    handleFromCurrencyChange,
  } = useFormExchange({ currencies });

  const {
    toAmountFormatted,
    baseRateConversion,
    fromAmountFormatted,
    invertedBaseRateConversion,
    calculate,
    calculateInverted,
  } = useResultExchange({
    rates,
    amount,
    fromCurrency,
    toCurrency,
    currencies,
  });

  const { NOTICE } = useNotice();

  return {
    currenciesAndRates: {
      rates,
      currencies,
      lastUpdated,
      isCurrenciesLoading,
      isExchangeRatesLoading,
      getCurrencies,
      sanitizeCurrencies,
      getRatesByBaseCurrency,
    },

    formExchange: {
      form,
      amount,
      toCurrency,
      fromCurrency,
      prefix,
      options,
      placeholder,
      FormExchangeFields,
      handleReset,
      invertCurrencies,
      handleValueChange,
      handleToCurrencyChange,
      handleFromCurrencyChange,
    },

    resultExchange: {
      toAmountFormatted,
      baseRateConversion,
      fromAmountFormatted,
      invertedBaseRateConversion,
      calculate,
      calculateInverted,
    },

    notice: {
      NOTICE,
    },
  };
};
