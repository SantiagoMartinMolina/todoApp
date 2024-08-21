import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import styles from "./styles";
import { Keyboard } from "react-native";

interface Props {
  addTodo: (input: string) => void;
}

const AddTodoForm = ({ addTodo }: Props) => {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    addTodo(input);
    setInput("");
    Keyboard.dismiss();
  };

  return (
    <>
      <TextInput
        mode="flat"
        value={input}
        label="add new task"
        onChangeText={setInput}
        style={[styles.mb, styles.input]}
        multiline
      />
      <Button style={styles.mb} mode="contained" onPress={onSubmit}>
        Add task
      </Button>
    </>
  );
};

export default AddTodoForm;
