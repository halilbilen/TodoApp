import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    header: {
        height: 64,
        backgroundColor: '#fdfdfd',
        justifyContent: 'center',
        marginBottom: 5,
        borderColor: '#fdfdfd',
        borderWidth: 2,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#008080'
    },
    itemBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderColor: 'skyblue',
        borderWidth: 1,
        borderRadius: 15,
        padding: 15
    },
    itemText: {
        flex: 1,
        fontSize: 14,
        color: '#000'
    },
    itemTextTrue: {
        flex: 1,
        fontSize: 14,
        color: '#ccc',
        textDecorationLine: 'line-through'
    },
    itemCheckTrue: {
        flex: 0,
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 0,
        backgroundColor: 'green'
    }
    ,
    itemCheckFalse: {
        flex: 0,
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 0,
        backgroundColor: 'red'
    },
    itemContainer: {
        flex: 1
    },
    createButton: {
        alignSelf: 'center',
        backgroundColor: '#008080',
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginBottom: 15
    }, createButtonText: {
        fontSize: 40,
        color: '#FFF'
    }
});