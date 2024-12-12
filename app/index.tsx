import { Redirect } from 'expo-router';

export default function Index() {
  // Simulasi status login pengguna
  const isLoggedIn = false; // Ubah sesuai logika autentikasi Anda.

  return isLoggedIn ? <Redirect href="/(tabs)/dashboard" /> : <Redirect href="/auth/login" />;
}
