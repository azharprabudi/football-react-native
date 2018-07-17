import React, { Component } from "react";
import { Container, Text } from "native-base";
import { ToastAndroid, FlatList, RefreshControl } from "react-native";
import { connect } from "react-redux";
import { fetchPapanKlasemen } from "./PapanKlasemenAction";
import PapanKlasemenItem from "./PapanKlasemenItem";

class PapanKlasemen extends Component {
  componentDidMount() {
    this.fetchPapanKlasemen();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.kejuaraan.id !== nextProps.kejuaraan.id) {
      this.props.fetchPapanKlasemen(nextProps.kejuaraan.id, e =>
        ToastAndroid.show(e, ToastAndroid.SHORT)
      );
    }
  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.kejuaraan.id !== this.props.kejuaraan.id) {
      return false;
    }
    return true;
  }
  fetchPapanKlasemen() {
    this.props.fetchPapanKlasemen(this.props.kejuaraan.id, e =>
      ToastAndroid.show(e, ToastAndroid.SHORT)
    );
  }
  _renderHeader() {
    let temporaryData = {
      position: "#",
      teamName: "Nama",
      playedGames: "MN",
      wins: "M",
      draws: "S",
      losses: "K",
      goals: "MG",
      goalsAgainst: "KG",
      goalDifference: "SG",
      points: "P"
    };
    return <PapanKlasemenItem {...temporaryData} />;
  }
  render() {
    return (
      <Container>
        <FlatList
          data={this.props.papanKlasemen.data.toObject().standing}
          renderItem={({ item }) => <PapanKlasemenItem {...item} />}
          ListHeaderComponent={() => this._renderHeader()}
          keyExtractor={data => data.position}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={this.props.papanKlasemen.load}
              onRefresh={this.fetchPapanKlasemen.bind(this)}
              colors={["#06B386"]}
            />
          }
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  kejuaraan: state.halamanUtama.toObject().isSelected.toObject(),
  papanKlasemen: state.papanKlasemen.toObject()
});

const actions = {
  fetchPapanKlasemen
};

export default connect(mapStateToProps, actions)(PapanKlasemen);
