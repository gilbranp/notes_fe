// app/auth/register.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    // Logika register, misalnya simpan data ke server
    console.log('Register data:', { username, email, password });

    // Setelah register berhasil, arahkan ke halaman login
    router.push('/auth/login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
      
      {/* Link ke halaman login */}
      <TouchableOpacity onPress={() => router.push('/auth/login')}>
        <Text style={styles.loginText}>
          Sudah punya akun? Login
        </Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '80%',
  },
  loginText: {
    marginTop: 20,
    color: '#007BFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Register;
