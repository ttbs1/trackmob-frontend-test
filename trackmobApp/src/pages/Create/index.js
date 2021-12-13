import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Create extends React.Component {

    constructor(props) {
        super(props);
        const { route } = this.props;
        this.state = {
            name: route.params.product.name,
            price: route.params.product.price,
            category: route.params.product.category,
            tags: route.params.product.tags.join(" ")
        }
    }


    render() {
        const { navigation } = this.props;
        const { route } = this.props;

        return (
            <>
                <View style={styles.header}>
                    <Text style={styles.title}>Trackmob Frontend Test</Text>
                    <Text>My Products</Text>
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.input} onChangeText={text => { this.setState({ name: text }) }} value={this.state.name} placeholder="Product name" />

                    <View style={{ borderWidth: 1, marginBottom: 15 }}>
                        <Picker
                            selectedValue={this.state.category}
                            onValueChange={(itemValue) =>
                                this.setState({ category: itemValue })
                            }>
                            <Picker.Item label="Category 1" value="category1" />
                            <Picker.Item label="Category 2" value="category2" />
                            <Picker.Item label="Category 3" value="category3" />
                        </Picker>
                    </View>

                    <TextInput style={styles.input} onChangeText={text => { this.setState({ price: text }) }} value={this.state.price} placeholder="100.00" keyboardType="numeric" />
                    <TextInput style={styles.input} onChangeText={text => { this.setState({ tags: text }) }} value={this.state.tags} placeholder="tag1 tag2 tag3" />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                            route.params.callback({
                                index: route.params.index,
                                name: this.state.name,
                                price: this.state.price,
                                category: this.state.category,
                                tags: this.state.tags.split(" ")
                            }); 
                            navigation.goBack(null);
                        }}>
                        <Text><Icon name="plus" color="#454545" /> Salvar</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    title: {
        fontSize: 26
    },
    container: {
        flex: 1,
        padding: 10,
    },
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

export default Create;