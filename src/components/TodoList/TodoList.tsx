import { Text, FlatList, View, Pressable } from "react-native";
import React from "react";
import { ToDo } from "../../types/types";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

interface Props {
  todos: ToDo[];
  toggleTaskStatus: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

const TodoList = ({ todos, handleDeleteTask, toggleTaskStatus }: Props) => {
  const renderItem = ({ item }: { item: ToDo }) => {
    return (
      <View style={[styles.itemContainer, styles.mb]}>
        <Pressable onPress={() => toggleTaskStatus(item.id)}>
          <Text style={[styles.taskText, item.isCompleted && styles.completed]}>
            {item.description}
          </Text>
        </Pressable>
        <Pressable onPress={() => handleDeleteTask(item.id)}>
          <FontAwesome name="trash" size={24} />
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={renderItem}
    />
  );
};

export default TodoList;
