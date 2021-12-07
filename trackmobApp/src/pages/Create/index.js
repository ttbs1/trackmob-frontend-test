import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function Create({navigation}) {
  const route = useRoute();

  return (
    <View>
      <Text>
        {route.params.callback({
          nome: 'produto ruim',
          valor: 'caro',
        })}
      </Text>
    </View>
  );
}
