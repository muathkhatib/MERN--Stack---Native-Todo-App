/* eslint-disable import/namespace */
import React, { useState, useEffect, useRef } from "react";


import { View, TextInput } from "react-native";

import Checkbox from "../Checkbox";

import styles from "./styles";

interface ToDoItemProps {
  todo: {
    id: number;
    content: string;
    isCompleted: boolean;
  },
  onSubmit: () => void;
}

const ToDoItem = ({ todo, onSubmit }: ToDoItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!todo) {
      return;
    }
    setIsChecked(todo.isCompleted);
    setContent(todo.content);
  }, [todo]);

  const input = useRef(null)
  useEffect(() => {
    //get focus on input element
    if(input.current){
      input?.current?.focus()
    }

  }, [input]);

  const onKeyPress = ({nativeEvent} : any) => {
    // Handle Backspace key with Empty content
    if(nativeEvent.key === 'Backspace' && content === ''){
      /* Handle Delete here */
      console.warn('Delete the item')
    }
  }
  return (
    <View style={styles.toDoContainer}>
      {/* Checkbox Here */}
      <Checkbox
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />

      {/* Text Input Here */}

      <TextInput
      ref={input} 
        value={content}
        onChangeText={setContent}
        style={styles.textInput}
        multiline
        onSubmitEditing={onSubmit}
        blurOnSubmit
        onKeyPress={onKeyPress}
      />
    </View>
  );
};

export default ToDoItem;
