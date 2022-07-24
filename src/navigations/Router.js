import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import SignUp from "../components/SignUp/SignUp";
import HomeTabNavigation from "./HomeTabNavigation";
import DrawerNavigator from "./DrawerNavigator";
import ImgPicker from "../components/ImagePicker/ImgPicker";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeTabNavigation} /> */}
        <Stack.Screen name="ImgPicker" component={ImgPicker} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default Router;
