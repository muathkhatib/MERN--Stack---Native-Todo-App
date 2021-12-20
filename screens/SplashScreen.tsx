/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/namespace */
import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/SplashScreenStyle";

const SplashScreen = () => {
  const navigation = useNavigation();

  const isAuthenticated = () => {
    return true;
  };

  useEffect(() => {
    isAuthenticated()
      ? navigation.navigate("Home")
      : navigation.navigate("SignInScreen");
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default SplashScreen;
