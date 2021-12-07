import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  const [produtos, setProdutos] = useState();

  const handleClick = produto => {
    setProdutos(() => [produtos, produto]);
  };

  useEffect(() => {
    setProdutos(produtos);
  }, [produtos]);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('Create', {callback: handleClick})
          }>
          <Text>+ Cadastrar</Text>
        </TouchableOpacity>
        <View>
          <Text>{console.log(produtos)}</Text>
        </View>
      </View>
    </View>
  );
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
