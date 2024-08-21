import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mb: {
        marginBottom: 16,
    },
    taskText: {
        fontSize: 20,
    },
    completed: {
        textDecorationLine: "line-through",
        color: "tomato"
    }

});

export default styles;