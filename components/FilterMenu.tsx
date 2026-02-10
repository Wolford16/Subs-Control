import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type MenuOption =
  | 'ALL'
  | 'ACTIVE'
  | 'EXPIRING'
  | 'FINANCES'
  | 'SETTINGS'
  | 'LOGOUT';

interface FilterMenuProps {
  onSelectOption: (option: MenuOption) => void;
}

export default function FilterMenu({ onSelectOption }: FilterMenuProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>

      <TouchableOpacity onPress={() => onSelectOption('ALL')} style={styles.item}>
        <Text>Todas las suscripciones</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelectOption('ACTIVE')} style={styles.item}>
        <Text>Suscripciones activas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelectOption('EXPIRING')} style={styles.item}>
        <Text>Próximas a vencer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelectOption('FINANCES')} style={styles.item}>
        <Text>Finanzas</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity onPress={() => onSelectOption('SETTINGS')} style={styles.item}>
        <Text>Configuración</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelectOption('LOGOUT')} style={styles.item}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#eee', // temporal
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  item: {
    paddingVertical: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
