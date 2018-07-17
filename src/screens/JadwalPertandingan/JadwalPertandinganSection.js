import React, { PureComponent } from "react";
import { View } from "react-native";
import { Title } from "native-base";

const JadwalPertandinganSection = ({ title }) => (
  <View style={styles.wrapper}>
    <Title style={{ color: "black", fontSize: 14 }}>{title}</Title>
  </View>
);

const styles = {
  wrapper: {
    padding: 5,
    backgroundColor: "#f3f3f3",
    alignItems: "center"
  }
};

export default JadwalPertandinganSection;
