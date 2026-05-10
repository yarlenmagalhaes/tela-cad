import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function TelaLogin() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={estilos.container}>
      <Text>Olá!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});