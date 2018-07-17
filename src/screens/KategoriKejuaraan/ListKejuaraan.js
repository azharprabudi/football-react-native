import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container } from "native-base";
import { connect } from "react-redux";
import { changeCompetitions } from "../HalamanUtama/HalamanUtamaAction";
import ListKejuaraanItem from "./ListKejuaraanItem";
import lang from "../../language/lang";

class ListKejuaraan extends Component {
  static navigationOptions = {
    title: lang.daftarKejuaraan,
    headerStyle: {
      backgroundColor: "#06B386"
    },
    headerTitleStyle: {
      color: "white"
    },
    headerTintColor: "white"
  };
  render() {
    return (
      <Container>
        <FlatList
          keyExtractor={data => data.id}
          removeClippedSubviews
          extraData={this.props.kejuaraan.isSelected.toObject()}
          data={this.props.kejuaraan.data.toArray()}
          renderItem={({ item }) => (
            <ListKejuaraanItem
              {...item}
              selected={
                this.props.kejuaraan.isSelected.toObject().id === item.id
              }
              onChangeCompetition={data => this.props.changeCompetitions(data)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  kejuaraan: state.halamanUtama.toObject()
});

const actions = {
  changeCompetitions
};

export default connect(mapStateToProps, actions)(ListKejuaraan);
