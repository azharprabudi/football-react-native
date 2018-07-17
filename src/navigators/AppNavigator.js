import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addNavigationHelpers,
  DrawerNavigator,
  StackNavigator
} from "react-navigation";

import HalamanUtama from "../screens/HalamanUtama/HalamanUtama";
import ListKejuaraan from "../screens/KategoriKejuaraan/ListKejuaraan";

export const App = StackNavigator({
  HalamanUtama: {
    screen: HalamanUtama
  },
  ListKejuaraan: {
    screen: ListKejuaraan
  }
});

export const AppNavigator = DrawerNavigator({
  App: {
    screen: App
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
