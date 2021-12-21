/* eslint-disable import/namespace */
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/AuthScreensStyle";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.log({ name }, { email }, { password });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.textInput}
      />
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
        <Text style={styles.signInButtonText}>Sign Up</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignInScreen")}
        style={styles.signUpNavigator}
      >
        <Text style={styles.signUpNavigatorText}>
          Already have account ?{" "}
          <Text style={styles.signUpNavigatorLink}>Sign In</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
