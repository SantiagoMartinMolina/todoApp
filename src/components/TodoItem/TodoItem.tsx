import { View, Pressable } from "react-native";
import React, { useState } from "react";
import { ToDo } from "../../types/types";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
// import { useSafeAreaFrame } from "react-native-safe-area-context";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props {
  item: ToDo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ onDelete, onToggle, item }: Props) => {
  //   const frame = useSafeAreaFrame();
  //   const textWidth = frame.width - 16 - 16 - 24 - 20 - 20; // ver como mejorar la definicion de esta constante
  const [isVisibleDialog, setIsVisibleDialog] = useState<boolean>(false);
  const hideDialog = () => setIsVisibleDialog(!isVisibleDialog);
  const showDialog = () => setIsVisibleDialog(true);
  return (
    <GestureHandlerRootView>
      <View style={[styles.itemContainer, styles.mb]}>
        <Pressable onLongPress={() => onToggle(item.id)} onPress={showDialog}>
          <Text
            style={[
              styles.taskText,
              item.isCompleted && styles.completed,
              // { maxWidth: textWidth },
            ]}
          >
            {item.description.slice(0, 25)}...
          </Text>
        </Pressable>
        <Pressable onPress={() => onDelete(item.id)}>
          <FontAwesome name="trash" size={24} />
        </Pressable>
        <Portal>
          <Dialog visible={isVisibleDialog} onDismiss={hideDialog}>
            <Dialog.Icon icon="information-outline" size={34} color="red" />
            <Dialog.Title>Details</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyLarge">{item.description}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button mode="contained-tonal" onPress={hideDialog}>
                Close
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </GestureHandlerRootView>
  );
};

export default TodoItem;
