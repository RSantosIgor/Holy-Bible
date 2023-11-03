import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingEnd: 14,
        paddingStart: 14,

    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
        padding: 15,
        borderRadius: 15,
        elevation: 2,
        shadowColor: '#C9C9C9',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    areaButton: {
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#282828',
        alignItems: 'flex-end'
    }
});

export default styles;