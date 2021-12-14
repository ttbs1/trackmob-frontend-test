import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Button(props) {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={ props.click }>
            <Text><Icon name="plus" color="#454545" /> {props.children} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#aaa',
        width: 100,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    }
});