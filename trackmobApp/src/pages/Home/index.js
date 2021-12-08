import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = product => {
        let products = this.state.products ? [...this.state.products, product] : new Array(product);
        this.setState({ products });
    };

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() =>
                            navigation.navigate('Create', { callback: this.handleClick })
                        }>
                        <Text>+ Cadastrar</Text>
                    </TouchableOpacity>
                    <View>
                        
                        {
                            this.state.products
                                ? this.state.products.map(response => {
                                    return (
                                        <View style={styles.containerProd}>
                                            <Text>{response.nome}</Text>
                                            <Text>{response.valor}</Text>
                                            <Text>{response.categoria}</Text>
                                            <Text>Tags</Text>
                                        </View>
                                    )
                                })
                                : null
                        }
                    </View>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        backgroundColor: '#aaa',
        width: 100,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default Home;