import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../App'; // Asegúrate de que la ruta de importación sea correcta

type LoginScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar la lógica de inicio de sesión aquí
    console.log(`Login attempt with email: ${email}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Register')}>
        Don't have an account? Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
});

export default LoginScreen;
