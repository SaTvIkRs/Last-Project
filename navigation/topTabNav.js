import React from "react";
import PopularMoviesScreen from "../screens/Popular";
import RecommendedMoviesScreen from "../screens/Recommendation"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const AppTopNavigation = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <AppTopNavigation.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: RFValue(12) ,color:"white",fontFamily:"monospace"},
      tabBarItemStyle: { borderLeftWidth:1,borderColor:"#3c8ed9" },
      tabBarStyle: { backgroundColor: '#182854' },
    }}>
      <AppTopNavigation.Screen name="Popular" component={PopularMoviesScreen} />
      <AppTopNavigation.Screen name="Recommended" component={RecommendedMoviesScreen} />
    </AppTopNavigation.Navigator>
  );
}
