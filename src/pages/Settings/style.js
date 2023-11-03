import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'poppins, sans-serif',
        color: '#282828',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center"
    },
    selectContainer: {
        padding: 15
    }, 
    select: {
        width: 100,
        height: 20,
        fontSize: 20,
        borderWidth: 0,
        borderRadius: 15,
        fontWeight: 'bold' 
    },
    option: {
        fontSize: 15,
        fontWeight: 'bold' 
    }
})

export default styles;