import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function ProfileScreen() {
  const router = useRouter();

  // Simulasi username pengguna yang sedang login
  const name = 'Radenta Gilbran Salsyarizki'; // Anda dapat mengganti ini dengan data dari konteks atau API.
  const username = 'radenta'; // Anda dapat mengganti ini dengan data dari konteks atau API.

  // Animasi untuk masuknya elemen profile
  const profileOpacity = useSharedValue(0);
  const profileTranslateY = useSharedValue(30);

  useEffect(() => {
    profileOpacity.value = withSpring(1, { damping: 15 });
    profileTranslateY.value = withSpring(0, { damping: 15 });
  }, []);

  const animatedProfileStyle = useAnimatedStyle(() => ({
    opacity: profileOpacity.value,
    transform: [{ translateY: profileTranslateY.value }],
  }));

  const handleLogout = () => {
    // Proses logout (sementara hanya mengarahkan ke login)
    router.push('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedProfileStyle]}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.name}>Name: {name}</Text>
        <Text style={styles.username}>Username: {username}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    padding: 20,
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  username: {
    fontSize: 18,
    marginBottom: 30,
    color: '#555',
  },
  logoutButton: {
    backgroundColor: '#e63946',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
