import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* 1. AGREGAR screenOptions AQUÍ PARA ESTILO GLOBAL */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d82a2a90', // Tu color de fondo
          },
          headerTintColor: '#fff',       // Color de texto y flechas
          headerTitleStyle: {
            fontWeight: 'bold',          // Estilo de la fuente
          },
        }}
      >
        {/* 2. O BIEN, MODIFICAR SOLO UNA PANTALLA ESPECÍFICA ABAJO */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="modal" 
          options={{ 
            presentation: 'modal', 
            title: 'Configuración',
            headerShown: true // Asegúrate de que sea true si quieres verlo en el modal
          }} 
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}