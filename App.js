import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Sheet from "./screens/Sheet";
import Profile from "./screens/Profile";
import Stats from "./screens/Stats";

import Icon from "react-native-vector-icons/Ionicons";

class App extends React.Component {
  state = {
    problems: ["1 + 1 = ", "6 + 4 =", "9 + 4 ="]
  };

  render() {
    console.log("Hey");
    return <View style={styles.container} />;
  }
}

export default createBottomTabNavigator({
  Profile: {
    screen: Profile
    // navigationOptions: {
    //   tabBarLabel: "PROFILE",
    //   tabBarIcon: ({ tintColor }) => (
    //     <Icon name="ios-search-outline" color={tintColor} size={24} />
    //   )
    // }
  },
  Sheet: { screen: Sheet },
  Stats: { screen: Stats }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
