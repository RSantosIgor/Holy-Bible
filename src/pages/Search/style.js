import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        fontFamily: 'poppins, sans-serif',
        color: '#282828',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center"
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#CCC',
        backgroundColor: '#F2F2F2',
        height: 35,
        marginTop: 10,
        padding: 5,
        textAlign: 'center',
        width: '180%',
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7
    },
    button: {
        backgroundColor: '#16151B' ,
        borderRadius: 5,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        elevation: 5,
        shadowColor: '#A1938E',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5
      },
})

export default styles;