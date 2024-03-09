import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },
    message: {
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    }
})