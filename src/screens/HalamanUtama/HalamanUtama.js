import React, { Component } from "react";
import { View, ToastAndroid, Text } from "react-native";
import { Container, Icon } from "native-base";
import { connect } from "react-redux";
import TabNavigator from "react-native-tab-navigator";
import { fetchAllCompetitions } from "./HalamanUtamaAction";
import HeaderCustom from "../Global/HeaderCustom";
import KategoriKejuaraan from "../KategoriKejuaraan/KategoriKejuaraan";
import PapanKlasemen from "../PapanKlasemen/PapanKlasemen";
import JadwalPertandingan from "../JadwalPertandingan/JadwalPertandingan";
import Loading from "../Global/Loading";
import lang from "../../language/lang";

class HalamanUtama extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "papanKlasemen"
    };
  }
  componentDidMount() {
    this.props.fetchAllCompetitions(err =>
      ToastAndroid.show(err, ToastAndroid.SHORT)
    );
  }
  _renderTabNavigator() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.activeTab === "papanKlasemen"}
          title={lang.papanKlasemen}
          renderIcon={() => (
            <Icon
              name={"md-trophy"}
              type={"ionicon"}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />
          )}
          renderSelectedIcon={() => (
            <Icon
              name={"md-trophy"}
              type={"ionicon"}
              style={{ color: "#06B386" }}
            />
          )}
          onPress={() => this.setState({ activeTab: "papanKlasemen" })}
          titleStyle={{ color: "rgba(0,0,0,0.5)" }}
          selectedTitleStyle={{ color: "#06B386" }}
        >
          <PapanKlasemen />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.activeTab === "jadwalPertandingan"}
          title={lang.jadwalPertandingan}
          renderIcon={() => (
            <Icon
              name={"md-calendar"}
              type={"ionicon"}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />
          )}
          renderSelectedIcon={() => (
            <Icon
              name={"md-calendar"}
              type={"ionicon"}
              style={{ color: "#06B386" }}
            />
          )}
          onPress={() => this.setState({ activeTab: "jadwalPertandingan" })}
          titleStyle={{ color: "rgba(0,0,0,0.5)" }}
          selectedTitleStyle={{ color: "#06B386" }}
        >
          <JadwalPertandingan />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
  _renderContentLoader() {
    return <Text>Load</Text>;
  }
  render() {
    return (
      <Container>
        <HeaderCustom
          onTouchDrawer={() => this.props.navigation.navigate("DrawerOpen")}
        />
        <KategoriKejuaraan
          onPress={() => this.props.navigation.navigate("ListKejuaraan")}
          selectedChampion={
            this.props.halamanUtama.isSelected.toObject().caption
          }
        />
        {this.props.halamanUtama.load === true
          ? this._renderContentLoader()
          : this._renderTabNavigator()}
      </Container>
    );
  }
}

const mapStateToProps = ({ halamanUtama }) => ({
  halamanUtama: halamanUtama.toObject()
});
const actions = {
  fetchAllCompetitions
};

export default connect(mapStateToProps, actions)(HalamanUtama);
