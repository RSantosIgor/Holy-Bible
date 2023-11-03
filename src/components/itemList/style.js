import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        fontFamily: 'poppins, sans-serif',
        color: '#282828',
        width: '100%'
    },
    itemList: {
        backgroundColor: '#FFF',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        borderBottomColor: '#16151B',
        borderBottomWidth: 0.5,
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        width: '100%'
    },
    numberVerse: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    verseText: {
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
        fontSize: 16
    },
    favorite: {
        padding: 10
    }
});

export default styles;