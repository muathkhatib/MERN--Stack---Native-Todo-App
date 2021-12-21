/* eslint-disable import/namespace */
import React, { useState } from "react";

import { FlatList, TextInput } from "react-native";
import { View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import { ToDoItem } from "../components";

import styles from "./styles/ToDoScreenStyle";

const ToDoScreen = () => {
  const [title, setTitle] = useState("");
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
  const createNewItem = (atIndex: number) => {
    let id = todos.length + 1;
    const newTodos = [...todos];
    newTodos.splice(atIndex, 0, {
      id: id,
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.title}
      />
      {/* <ToDoItem /> */}
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <ToDoItem todo={item} onSubmit={() => createNewItem(index++)} />
        )}
        style={styles.flatList}
      />
    </View>
  );
};
export default ToDoScreen;
