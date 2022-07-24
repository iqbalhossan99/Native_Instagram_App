import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import SignUp from "../components/SignUp/SignUp";
import HomeTabNavigation from "./HomeTabNavigation";
import ExploreNavigator from "./ExploreNavigator";

const navigationRef = React.createRef();

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Home" component={HomeTabNavigation} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
