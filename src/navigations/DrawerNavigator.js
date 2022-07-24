import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import SignUp from "../components/SignUp/SignUp";
import HomeScreen from "../screens/Home/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
