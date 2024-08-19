import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Crypto from "expo-crypto";
import { ToDo } from "../../types/types";
import { Button, TextInput } from "react-native-paper";
import styles from "./styles";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const AddTodoForm = ({ setTodos }: Props) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTask: ToDo = {
        id: Crypto.randomUUID(),
        description: input,
        isCompleted: false,
      };

      setTodos((previousValue) => [...previousValue, newTask]);
      setInput("");
    }
  };
  return (
    <>
      <TextInput
        mode="flat"
        value={input}
        label="add new task"
        onChangeText={setInput}
        style={[styles.mb, styles.input]}
      />
      <Button style={styles.mb} mode="contained" onPress={addTodo}>
        Add task
      </Button>
    </>
  );
};

export default AddTodoForm;
