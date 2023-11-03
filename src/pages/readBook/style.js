import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        fontFamily: 'poppins, sans-serif',
        color: '#282828',
    },
    bookName: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center"
    },
    cap: {
        fontSize: 12,
        alignSelf: "center",
        padding: 10
    },
    scrollRead: {
        flex: 0.6,
        marginBottom: '20%'
    },
    containerButtonsGuide: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingStart: 15,
        paddingEnd: 15
    },
    button: {
        backgroundColor: '#16151B',
        padding: 10,
        borderRadius: 15,
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    }
})

export default styles;