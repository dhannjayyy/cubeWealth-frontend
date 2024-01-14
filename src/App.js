import React from "react";

import { Provider, useSelector } from "react-redux";
import appStore from "./helper/Store";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <Provider store={appStore}>
      <AppRouter />
    </Provider>
  );
};

export default App;
