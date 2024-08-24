import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Switch, Text } from 'react-native-paper';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../App'; // Asegúrate de que la ruta de importación sea correcta

type RegisterScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChef, setIsChef] = useState(false);

  const handleRegister = () => {
    // Implementar la lógica de registro aquí
    console.log(`Registration attempt for ${name}, email: ${email}, isChef: ${isChef}`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
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
      <View style={styles.switchContainer}>
        <Text>Register as a Chef?</Text>
        <Switch value={isChef} onValueChange={setIsChef} />
      </View>
      <Button mode="contained" onPress={handleRegister} style={styles.button}>
        Register
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
});

export default RegisterScreen;
