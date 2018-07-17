import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import { Thumbnail, Text } from "native-base";

class PapanKlasemenItem extends PureComponent {
  render() {
    return (
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: this.props.position % 2 === 1 ? "#f3f3f3" : "white"
          }
        ]}
      >
        <Text style={styles.label}>{this.props.position}</Text>
        <View style={styles.wrapperTeamName}>
          <Text style={styles.label}>{this.props.teamName.substr(0, 18)}</Text>
        </View>
        <View style={styles.wrapperContent}>
          <Text style={styles.label}>{this.props.playedGames}</Text>
          <Text style={styles.label}>{this.props.wins}</Text>
          <Text style={styles.label}>{this.props.draws}</Text>
          <Text style={styles.label}>{this.props.losses}</Text>
          <Text style={styles.label}>{this.props.goals}</Text>
          <Text style={styles.label}>{this.props.goalsAgainst}</Text>
          <Text style={styles.label}>{this.props.goalDifference}</Text>
          <Text style={styles.label}>{this.props.points}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.2)"
  },
  wrapperTeamName: {
    flex: 1,
    marginLeft: 5
  },
  wrapperContent: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  label: {
    fontSize: 12
  }
};

export default PapanKlasemenItem;
