import React from "react";
import PopularMoviesScreen from "../screens/Popular";
import RecommendedMoviesScreen from "../screens/Recommendation"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const AppTopNavigation = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <AppTopNavigation.Navigator>
      <AppTopNavigation.Screen name="Popular" component={PopularMoviesScreen} />
      <AppTopNavigation.Screen name="Recommended" component={RecommendedMoviesScreen} />
    </AppTopNavigation.Navigator>
  );
}
