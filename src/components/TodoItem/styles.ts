import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        // backgroundColor: "blue"
    },
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
    },

    redLayer: {
        position: "absolute",
        borderRadius: 15,
        backgroundColor: "red",
        right: 0,
        left: 0,
        bottom: 0,
        top: 0
        // width: "100%",
        // height: "100%"
    },

    deleteIconContainer: {
        position: "absolute",
        right: 20,
        top: 10
    }


});

export default styles;