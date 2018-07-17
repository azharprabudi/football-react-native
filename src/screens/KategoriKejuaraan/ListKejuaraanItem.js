import React, { Component } from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { Text, Icon } from "native-base";
import _ from "lodash";

class ListKejuaraanItem extends Component {
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          this.props.onChangeCompetition(_.omit(this.props, ["selected"]))
        }
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#f3f3f3",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.colors}>{this.props.caption}</Text>
          {this.props.selected ? (
            <Icon name={"md-football"} type={"ionicon"} style={styles.colors} />
          ) : null}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  colors: {
    color: "rgba(0,0,0,0.6)"
  }
};

export default ListKejuaraanItem;
