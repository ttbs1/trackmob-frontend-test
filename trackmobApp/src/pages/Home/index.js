import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Products from '../../components/Products';

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
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        const { navigation } = this.props;
        navigation.navigate('Create', {
            callback: this.handleCreate,
            product: {
                name: "",
                price: "",
                category: "category1",
                tags: []
            }
        })
    }

    handleCreate = product => {
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
                <Header title="Trackmob Frontend Test" subtitle="My Products" ></Header>
                <View style={{ flex: 1, padding: 10 }}>
                    <Button click={this.handleClick} >Create</Button>
                    <Products products={this.state.products} clickDelete={this.handleDelete} clickUpdate={this.handleUpdate} navigation={navigation} ></Products>
                </View>
            </>
        )
    };
}



export default Home;