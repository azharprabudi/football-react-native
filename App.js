import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Root } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import AppWithNavigationState from "./src/navigators/AppNavigator";
import { store, persistor } from "./src/reducers";
import Loading from "./src/screens/Global/Loading";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={<ActivityIndicator />} persistor={persistor}> */}
        <Root>
          <AppWithNavigationState />
        </Root>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}
