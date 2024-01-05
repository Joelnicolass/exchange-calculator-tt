import React from "react";

import RootProvider from "./common/presentation/providers/root_provider/root_provider";
import CalculatorScreen from "./features/exchange_calculator/presentation/views/calculator_screen/calculator_screen";
import AppLayout from "./common/presentation/components/app_layout/app_layout";

const App = () => {
  return (
    <RootProvider>
      <AppLayout>
        <CalculatorScreen />
      </AppLayout>
    </RootProvider>
  );
};

export default App;
