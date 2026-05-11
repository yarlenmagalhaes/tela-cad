import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useState } from 'react';

export default function TelaLogin() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }
    Alert.alert('Sucesso!', `Bem-vindo, ${email}`);
  }

  return (
    <View style={estilos.container}>

      <Image
        source={require('../assets/images/icon.png')}
        style={estilos.logo}
      />

      <Text style={estilos.titulo}>Bem-vindo!</Text>
      <Text style={estilos.subtitulo}>Faça login para continuar</Text>

      <TextInput
        style={estilos.campo}
        placeholder="seu@email.com"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={estilos.campo}
        placeholder="Sua senha"
        placeholderTextColor="#888"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={estilos.botao} onPress={handleLogin}>
        <Text style={estilos.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Recuperação', 'Email de recuperação enviado!')}>
      <Text style={estilos.link}>Esqueci minha senha</Text>
      </TouchableOpacity>


  <TouchableOpacity onPress={() => Alert.alert('Cadastro', 'Tela de cadastro em breve!')}>
  <Text style={estilos.linkCadastro}>Não tem conta? <Text style={estilos.linkDestaque}>Cadastre-se</Text></Text>
  </TouchableOpacity>

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
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 24,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitulo: {
    color: '#888',
    fontSize: 14,
    marginBottom: 32,
  },
  campo: {
    width: '100%',
    backgroundColor: '#252542',
    borderRadius: 12,
    padding: 14,
    color: '#fff',
    fontSize: 15,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#33335a',
  },
  botao: {
    width: '100%',
    backgroundColor: '#6c63ff',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
  color: '#6c63ff',
  fontSize: 13,
  marginBottom: 24,
},
linkCadastro: {
  color: '#888',
  fontSize: 13,
},
linkDestaque: {
  color: '#6c63ff',
  fontWeight: 'bold',
},
});