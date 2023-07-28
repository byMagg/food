import { createAppContainer } from "react-navigation";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const { createStackNavigator } = require("react-navigation-stack");
const { default: SearchScreen } = require("./src/screens/SearchScreen");

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
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
