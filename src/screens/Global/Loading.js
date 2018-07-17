import React from "react";
import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

const Loading = ({ isLoad }) => (
  <ActivityIndicator
    animating={true}
    color={"#6B9C78"}
    size={28}
    hidesWhenStopped={isLoad}
  />
);

Loading.propTypes = {
  isLoad: PropTypes.bool.isRequired
};

export default Loading;
