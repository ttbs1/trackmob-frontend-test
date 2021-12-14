import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Products(props) {
    return (
        <View>
            {
                props.products
                    ? props.products.map((response, i) => {
                        return (
                            <View style={styles.containerProd} key={i}>
                                <View>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={require("./../util/notitle.png")}
                                    />
                                </View>
                                <View style={{ paddingTop: 3, paddingLeft: 3 }}>
                                    <Text style={{ fontWeight: '900', fontSize: 16 }} >{response.name}</Text>
                                    <Text>{response.price}</Text>
                                    <Text>{response.category}</Text>
                                    <Text>{response.tags.map(x => { return ("#" + x + " ") })}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1 }}>
                                    <Icon.Button style={{ paddingRight: 0 }} onPress={() => props.clickDelete(i)} name="trash-alt" size={15} color="#454545" backgroundColor="#f2f2f2" />
                                    <Icon.Button style={{ paddingRight: 0 }} onPress={() => props.navigation.navigate('Create', { callback: props.clickUpdate, product: response, index: i })} name="edit" size={15} color="#454545" backgroundColor="#f2f2f2" />
                                </View>
                            </View>
                        )
                    })
                    : console.log(props.products)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerProd: {
        marginTop: 15,
        flexDirection: 'row',
        borderWidth: 1
    }
});