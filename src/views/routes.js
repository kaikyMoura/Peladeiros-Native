import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../../Home";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator sceneContainerStyle={{
        backgroundColor: "#014b4b50",
    }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}