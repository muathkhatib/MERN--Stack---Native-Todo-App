/* eslint-disable import/namespace */
import React, { useState } from "react";
import { FlatList } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { ToDoItem } from "../components";

import styles from "./styles/TabOneScreenStyle";

const TabOneScreen = ({ navigation }: RootTabScreenProps<"TabOne">) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "Build a todo app",
      isCompleted: false,
    },
    {
      id: 2,
      content: "Buy a new car",
      isCompleted: false,
    },
    {
      id: 3,
      content: "Fix the washer machine",
      isCompleted: true,
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/* <ToDoItem /> */}
      <FlatList
        data={todos}
        renderItem={({item}) => <ToDoItem todo={item} />}
        style={styles.flatList}
      />
    </View>
  );
};
export default TabOneScreen;
