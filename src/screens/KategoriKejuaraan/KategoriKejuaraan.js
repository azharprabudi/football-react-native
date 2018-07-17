import React from "react";
import { TouchableNativeFeedback, View } from "react-native";
import { Icon, Text } from "native-base";
import PropTypes from "prop-types";

const KategoriKejuaraan = props => (
  <TouchableNativeFeedback onPress={props.onPress}>
    <View style={styles.wrapper}>
      <Icon name={"md-football"} type={"ionicon"} style={styles.color} />
      <Text style={styles.color}>{props.selectedChampion}</Text>
      <Icon
        name={"md-arrow-dropdown-circle"}
        type={"ionicon"}
        style={styles.color}
      />
    </View>
  </TouchableNativeFeedback>
);

KategoriKejuaraan.propTypes = {
  selectedChampion: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = {
  wrapper: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  color: { color: "rgba(0,0,0,0.6)" }
};

export default KategoriKejuaraan;
