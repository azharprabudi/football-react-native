import React from "react";
import { TouchableOpacity } from "react-native";
import { Header, Left, Icon, Body, Title } from "native-base";
import PropTypes from "prop-types";
import lang from "../../language/lang";

const HeaderCustom = props => (
  <Header
    androidStatusBarColor={"#06B386"}
    style={{ backgroundColor: "#06B386" }}
    searchBar={true}
    rounded={true}
    noShadow={true}
  >
    <Left>
      <TouchableOpacity onPress={props.onTouchDrawer}>
        <Icon name="md-menu" type={"ionicon"} style={{ color: "white" }} />
      </TouchableOpacity>
    </Left>
    <Body>
      <Title>{lang.seputarBola}</Title>
    </Body>
  </Header>
);

HeaderCustom.propTypes = {
  onTouchDrawer: PropTypes.func.isRequired
};

export default HeaderCustom;
