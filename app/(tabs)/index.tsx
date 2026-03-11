import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import FilterMenu from '@/components/FilterMenu';
import SectionHeader from '@/components/SectionHeader';

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSearch = (text: string) => {
    console.log('Buscando:', text);
  };

  const handleMenuOption = (option: string) => {
    console.log('Opción seleccionada:', option);
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>

      {/* Botón hamburguesa */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Menú hamburguesa */}
      {menuVisible && (
        <View style={styles.menuContainer}>
          <FilterMenu onSelectOption={handleMenuOption} />
        </View>
      )}

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Título de sección */}
      <SectionHeader title="Todas las suscripciones" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuButton: {
    padding: 10,
    alignSelf: 'flex-start',
  },
  menuText: {
    fontSize: 24,
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: '70%',
    height: '100%',
    zIndex: 10,
  },
});