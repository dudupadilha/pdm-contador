import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(){
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (email === 'exemplo@email.com' && password === 'exemplo123') {
      navigation.replace('Counter');
    } 
    else {
      Alert.alert('Erro de Login', 'E-mail ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
        testID="input-email"
      />

      <TextInput style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        testID="input-senha"
      />
      <Button title="Entrar"
      testID="button-login"
      onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});