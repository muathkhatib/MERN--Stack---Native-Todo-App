/* eslint-disable import/namespace */
import React, { useState, useEffect } from "react";

import { View, TextInput } from "react-native";

import Checkbox from "../Checkbox";

import styles from "./styles";

interface ToDoItemProps {
  todo: {
    id: number;
    content: string;
    isCompleted: boolean;
  };
}

const ToDoItem = ({ todo }: ToDoItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!todo) {
      return;
    }
    setIsChecked(todo.isCompleted);
    setContent(todo.content);
  }, [todo]);

  return (
    <View style={styles.toDoContainer}>
      {/* Checkbox Here */}
      <Checkbox
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />

      {/* Text Input Here */}
      
      <TextInput
        value={content}
        onChangeText={setContent}
       style={styles.textInput} multiline />
    </View>
  );
};

export default ToDoItem;
