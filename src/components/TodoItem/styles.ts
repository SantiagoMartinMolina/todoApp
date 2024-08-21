import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#E3F4FF",
    },
    mb: {
        marginBottom: 16,
    },
    taskText: {
        fontSize: 18,
    },
    completed: {
        textDecorationLine: "line-through",
        color: "tomato"
    }

});

export default styles;