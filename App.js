import { createAppContainer } from "react-navigation";

const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchScreen } = require("./src/screens/SearchScreen");

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch",
      cardStyle: { backgroundColor: "#FFFFFF" },
    },
  }
);

export default createAppContainer(navigator);
