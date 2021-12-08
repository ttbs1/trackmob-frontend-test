import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            category: "",
            tags: []
        }
    }


    render() {
        const { navigation } = this.props;
        const { route } = this.props;

        return (
            <View>
                <TextInput style={styles.input} onChangeText={text => { this.setState({ name: text }) }} value={this.state.name} />
                <Text>
                    {this.state.name}
                </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { 
                        route.params.callback({
                            nome: this.state.name,
                            valor: "1 real"
                        })
                    }}>
                    <Text>+ Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1
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

export default Create;