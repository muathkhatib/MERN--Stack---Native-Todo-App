/* eslint-disable import/namespace */

import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import ToDoScreen from "../screens/ToDoScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import SignInScreen from "../screens/SignInScreen";

import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createNativeStackNavigator<RootStackParamList>();

var RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen name="Home" component={ProjectsScreen} />
      <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};
const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
