import React from "react";
import HomeScreen from "../screens/Home";
import TopTabNav from "./topTabNav";
import { createStackNavigator } from "@react-navigation/stack";

const AppStackNavigation = createStackNavigator();
export default function StackNav() {
  return (
    <AppStackNavigation.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <AppStackNavigation.Screen name="Home" component={HomeScreen} />
      <AppStackNavigation.Screen name="Movies" component={TopTabNav} />
    </AppStackNavigation.Navigator>
  );
}
