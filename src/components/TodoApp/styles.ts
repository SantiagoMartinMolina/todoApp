import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        paddingHorizontal: 16,
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: "#6F87C8",
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    mb: {
        marginBottom: 16,
    },

    taskText: {
        fontSize: 20,
    },

    addTaskButton:{
        backgroundColor: "#6F87C8",
        padding: 10,
        alignItems: "center",
        borderColor: "black",
        // borderWidth: 1,
        borderRadius: 10
    },

    addTaskButtonText: {
        fontSize: 18,
    },

    completed: {
        textDecorationLine: "line-through",
        color: "tomato"
    },

    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
    

});

export default styles;