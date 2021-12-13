import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                id: "",
                name: "product 1",
                price: "U$ 50.01",
                category: "category1",
                tags: ["tag1", "tag2"]
            }]
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = product => {
        let products = this.state.products ? [...this.state.products, product] : new Array(product);
        this.setState({ products });
    };

    handleUpdate = (product) => {
        let products = [...this.state.products];
        products[product.index] = product;
        this.setState({ products });
    };

    handleDelete = key => {
        const { products } = this.state;
        this.setState({
            products: products.filter((item, i) => i !== key)
        })
    }

    render() {
        const { navigation } = this.props;

        return (
            <>
                <View style={styles.header}>
                    <Text style={styles.title}>Trackmob Frontend Test</Text>
                    <Text>My Products</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() =>
                            navigation.navigate('Create', { callback: this.handleClick, product: {
                                name: "",
                                price: "",
                                category: "category1",
                                tags: []
                            } })
                        }>
                        <Text><Icon name="plus" color="#454545" /> Cadastrar</Text>
                    </TouchableOpacity>
                    <View>

                        {
                            this.state.products
                                ? this.state.products.map((response, i) => {
                                    return (
                                        <View style={styles.containerProd} key={i}>
                                            <View>
                                                <Image
                                                    style={styles.tinyLogo}
                                                    source={require("./../../util/notitle.png")}
                                                />
                                            </View>
                                            <View style={{ paddingTop: 3, paddingLeft: 3 }}>
                                                <Text style={{ fontWeight: '900', fontSize: 16 }} >{response.name}</Text>
                                                <Text>{response.price}</Text>
                                                <Text>{response.category}</Text>
                                                <Text>{response.tags.map(x => { return ("#" + x + " ") })}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1 }}>
                                                <Icon.Button onPress={() => this.handleDelete(i)} name="trash-alt" size={15} color="#454545" backgroundColor="none" />
                                                <Icon.Button onPress={() => navigation.navigate('Create', { callback: this.handleUpdate, product: response, index: i })} name="edit" size={15} color="#454545" backgroundColor="none" />
                                            </View>
                                        </View>
                                    )
                                })
                                : null
                        }
                    </View>
                </View>
            </>
        )
    };
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
        padding: 10
    },
    containerProd: {
        marginTop: 15,
        flexDirection: 'row',
        borderWidth: 1
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