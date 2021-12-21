/* eslint-disable import/namespace */
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/AuthScreensStyle";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.log({ email }, { password });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        style={styles.textInput}
      />
      <Pressable onPress={onSubmit} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUpScreen")}
        style={styles.signUpNavigator}
      >
        <Text style={styles.signUpNavigatorText}>
          New here ? <Text style={styles.signUpNavigatorLink}>Sign up</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;
