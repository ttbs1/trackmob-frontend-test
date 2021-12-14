import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Form(props) {
    return (
        <>
            <TextInput style={styles.input} onChangeText={text => { props.callback("name", text) }} value={props.product.name} placeholder="Product name" />

            <View style={{ borderWidth: 1, marginBottom: 15 }}>
                <Picker
                    selectedValue={props.product.category}
                    onValueChange={(itemValue) =>
                        props.callback("category", itemValue)
                    }>
                    <Picker.Item label="Category 1" value="category1" />
                    <Picker.Item label="Category 2" value="category2" />
                    <Picker.Item label="Category 3" value="category3" />
                </Picker>
            </View>

            <TextInput style={styles.input} onChangeText={text => { props.callback("price", text) }} value={props.product.price} placeholder="100.00" keyboardType="numeric" />
            <TextInput style={styles.input} onChangeText={text => { props.callback("tags", text) }} value={props.product.tags} placeholder="tag1 tag2 tag3" />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingLeft: 18,
        marginBottom: 15
    },
    btn: {
        backgroundColor: '#aaa',
        width: 100,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    }
});