import React, { PureComponent } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "native-base";
import moment from "moment-timezone";
import HTMLView from "react-native-htmlview";
import lang from "../../language/lang";

class JadwalPertandinganItem extends PureComponent {
  render() {
    const { awayTeamName, homeTeamName, date } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperHeader}>
          <Text style={styles.smallText}>{lang.home}</Text>
          <Text style={styles.smallText}>{lang.away}</Text>
        </View>
        <View style={styles.wrapperBody}>
          <View style={styles.home}>
            <Text>{homeTeamName}</Text>
          </View>
          <View style={styles.vs}>
            <Text style={styles.textVs}>{lang.vs}</Text>
          </View>
          <View style={styles.away}>
            <Text>{awayTeamName}</Text>
          </View>
        </View>
        <View style={styles.wrapperFooter}>
          <Text style={styles.smallText}>
            {moment(date)
              .tz("Asia/Jakarta")
              .format("H:mm:ss a")}
          </Text>
          <TouchableOpacity>
            <View style={styles.wrapperButton}>
              <Text style={styles.smallText}>{lang.ingatkanSaya}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 2,
    borderColor: "#f3f3f3"
  },
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5
  },
  wrapperBody: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5
  },
  home: {
    flex: 1,
    alignItems: "flex-start"
  },
  vs: {
    flex: 1,
    alignItems: "center"
  },
  textVs: {
    fontSize: 20,
    fontWeight: "bold"
  },
  away: {
    alignItems: "flex-end",
    flex: 1
  },
  wrapperFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5
  },
  wrapperButton: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#06B386"
  },
  smallText: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)"
  }
};

export default JadwalPertandinganItem;
