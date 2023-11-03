import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        fontFamily: 'poppins, sans-serif',
        padding: 15,
        gap: 20,
        color: '#282828',
    },
    imageHead: {
        flex: 0.5,
        alignSelf: 'center',
        padding: 14,
        width: '95%',
        borderRadius: 15
    },
    styleVerseDay: {
        width: '90%',
        padding: 20,
        backgroundColor: '#FFF',
        marginTop: -80,
        borderRadius: 15,
        elevation: 2,
        shadowColor: '#C9C9C9',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        fontSize: 16
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: "flex-start",
    },
    source: {
        alignSelf: "flex-end"
    }, 
    keepReading: {
        color: '#2B2195',
        fontSize: 12
    },
    testamentList: {
        marginTop: 10,
        width: '95%',
        backgroundColor: '#fff',
        padding: 14,
        paddingStart: 18,
        borderRadius: 15
    }
});

export default styles;