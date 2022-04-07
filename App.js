import React from "react";
//import HomeScreen from "./screens/Home";
//import RecommendedMoviesScreen from "./screens/Recommendation";
//import PopularMoviesScreen from "./screens/Popular";
import Trial1 from "./screens/trial1";
import Trial2 from "./screens/trial2";
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const AppTopNavigation = createMaterialTopTabNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <AppTopNavigation.Navigator>
        <AppTopNavigation.Screen name="Home" component={Trial1} />
        <AppTopNavigation.Screen name="Settings" component={Trial2} />
      </AppTopNavigation.Navigator>
    </NavigationContainer>
  );
}


/*const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: "#fff",
        headerTitle: "Recommended Movies",
        headerStyle: {
          backgroundColor: "#d500f9"
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: RFValue(18)
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);*/


