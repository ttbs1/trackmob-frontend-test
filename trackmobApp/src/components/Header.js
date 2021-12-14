import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> {props.title} </Text>
            <Text> {props.subtitle} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    title: {
        fontSize: 26
    }
});