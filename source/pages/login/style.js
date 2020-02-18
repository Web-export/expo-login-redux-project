import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent:'center'
    },
    emailinput: {
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 3,
    },
    button: {
        width: '80%',
        height: 20,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 0,
    }
});

