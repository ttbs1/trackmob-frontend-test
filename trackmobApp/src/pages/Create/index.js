import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Form from '../../components/Form';

class Create extends React.Component {

    constructor(props) {
        super(props);
        const { route } = this.props;
        this.state = {
            product: {
                name: route.params.product.name,
                price: route.params.product.price,
                category: route.params.product.category,
                tags: route.params.product.tags.join(" ")
            }
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (name, value) => {
        let { product } = this.state;
        product[name] = value;
        this.setState({ product });
    }

    handleClick = () => {
        const { route } = this.props;
        const { navigation } = this.props;
        route.params.callback({
            index: route.params.index,
            name: this.state.product.name,
            price: this.state.product.price,
            category: this.state.product.category,
            tags: this.state.product.tags.split(" ")
        }); 
        navigation.goBack(null);
    }

    render() {

        return (
            <>
                <Header title="Trackmob Frontend Test" subtitle="My Products"></Header>
                <View style={{ flex: 1, padding: 10 }}>
                    <Form product={this.state.product} callback={this.handleChange}></Form>
                    <Button click={this.handleClick}>Save</Button>
                </View>
            </>
        )
    }
}

export default Create;