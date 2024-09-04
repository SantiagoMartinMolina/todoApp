import { View, Pressable, Animated } from "react-native";
import React, { useState } from "react";
import { ToDo } from "../../types/types";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
// import { useSafeAreaFrame } from "react-native-safe-area-context";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";

interface Props {
  item: ToDo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// definir el umbral de desplazamiento para decidir cuando activar las acciones asignadas al swipe (swipe to delete, swipe top toggle)

const TODO_SWIPE_THRESHOLD = 100;

const TodoItem = ({ onDelete, onToggle, item }: Props) => {
  //   const frame = useSafeAreaFrame();
  //   const textWidth = frame.width - 16 - 16 - 24 - 20 - 20; // ver como mejorar la definicion de esta constante
  const [isVisibleDialog, setIsVisibleDialog] = useState<boolean>(false);
  const hideDialog = () => setIsVisibleDialog(!isVisibleDialog);
  const showDialog = () => setIsVisibleDialog(true);

  // Vamos a declarar un valor animado (Animated.Value). --> controla la posicion horizontal del elemento (cada Todo) durante el swipe. Lo vamos a inicializar en 0 (posicion original)
  // Se actualiza el valor de forma autonoma durante el gesto

  const translateX = new Animated.Value(0);

  /** el evento que maneja el movimiento del swipe en tiempo real se llama 'onGestureEvent' --> va a ir actualizando el valor de translateX durante el gesto.
   */

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  /**
   * 'onHandlerStateChange' va a ser crucial para definir que sucede cuando se completa el gesto de swipe
   */

  const onHandlerStateChange = (event: any) => {
    // Solamente se actuara cuando el swipe haya finalizado.
    if (event.nativeEvent.state === State.END) {
      const { translationX } = event.nativeEvent;
      // Si el desplazamiento hacia la izquierda supera el umbral que definimos para este movimiento concreto, se considera una accion de eliminacion
      if (translationX < -TODO_SWIPE_THRESHOLD * 2.5) {
        onDelete(item.id);
      }

      // Si el desplazamiento hacia la derecha supera el umbral que definimos para este movimiento concreto, se considera una accion de toggleCompleted
      else if (translationX > TODO_SWIPE_THRESHOLD) {
        onToggle(item.id);
      }

      Animated.spring(translateX, {
        toValue: 0, //volver a la posicion inicial
        useNativeDriver: true,
        friction: 5,
      }).start();
    }
  };

  const animatedStyle = {
    transform: [{ translateX }],
  };

  const redLayerOpacity = translateX.interpolate({
    inputRange: [-TODO_SWIPE_THRESHOLD * 2.5, 0],
    outputRange: [1, 0],
  });

  return (
    <GestureHandlerRootView>
      <View style={[styles.mb, styles.container]}>
        {/* Una capa de presentacion que aparece detras del Todo en color rojo */}
        <Animated.View style={[styles.redLayer, { opacity: redLayerOpacity }]}>
          <Animated.View style={styles.deleteIconContainer}>
            <FontAwesome name="trash" size={24} />
          </Animated.View>
        </Animated.View>

        {/* Este contenedor maneja el swipe y aplica las transformaciones animadas definidas en animatedStyle */}
        <PanGestureHandler
          onGestureEvent={onGestureEvent} // Vincula el movimiento del gesto a la actualizacion de la variable translateX
          onHandlerStateChange={onHandlerStateChange} // Maneja el estado final del gesto para determinar si borramos, marcamos o no hacemos nada
        >
          <Animated.View style={[styles.itemContainer, animatedStyle]}>
            <Pressable
              onLongPress={() => onToggle(item.id)}
              onPress={showDialog}
            >
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
          </Animated.View>
        </PanGestureHandler>
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
