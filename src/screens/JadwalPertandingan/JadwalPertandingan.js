import React, { Component } from "react";
import { SectionList, ToastAndroid, RefreshControl } from "react-native";
import { Container, Text } from "native-base";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchAllSchedule } from "./JadwalPertandinganAction";
import JadwalPertandinganSection from "./JadwalPertandinganSection";
import JadwalPertandinganItem from "./JadwalPertandinganItem";

class JadwalPertandingan extends Component {
  componentDidMount() {
    this.fetchAllSchedule();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.kejuaraan.id !== nextProps.kejuaraan.id) {
      this.props.fetchAllSchedule(
        {
          idKejuaraan: nextProps.kejuaraan.id,
          currentMatchday: nextProps.kejuaraan.currentMatchday
        },
        e => ToastAndroid.show(e, ToastAndroid.SHORT)
      );
    }
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.kejuaraan.id !== nextProps.kejuaraan.id) {
      return false;
    }
    return true;
  }
  fetchAllSchedule() {
    this.props.fetchAllSchedule(
      {
        idKejuaraan: this.props.kejuaraan.id,
        currentMatchday: this.props.kejuaraan.currentMatchday
      },
      e => ToastAndroid.show(e, ToastAndroid.SHORT)
    );
  }
  render() {
    return (
      <Container>
        <SectionList
          keyExtractor={(data, id) =>
            `${data.homeTeamName}-${data.awayTeamName}`
          }
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
          sections={this.props.jadwalPertandingan.data.toArray()}
          renderSectionHeader={({ section }) => (
            <JadwalPertandinganSection title={section.title} />
          )}
          renderItem={({ item }) => <JadwalPertandinganItem {...item} />}
          refreshControl={
            <RefreshControl
              refreshing={this.props.jadwalPertandingan.load}
              onRefresh={this.fetchAllSchedule.bind(this)}
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
  jadwalPertandingan: state.jadwalPertandingan.toObject()
});

const actions = {
  fetchAllSchedule
};

export default connect(mapStateToProps, actions)(JadwalPertandingan);
