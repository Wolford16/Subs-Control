import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

import SearchBar from '@/components/SearchBar';
import FilterMenu from '@/components/FilterMenu';

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSearch = (text: string) => {
    console.log('Buscando:', text);
  };

  const handleMenuOption = (option: string) => {
    console.log('Opción seleccionada:', option);
    setMenuVisible(false); //Aqui es para cuando seleccionamos una opcion del menu nomas
  };

  return (
    <View style={styles.container}>
      {/* Boton hamburguesa del menu*/}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Menú hamburguesa, las opciones basicamente */}
      {menuVisible && (
        <View style={styles.menuContainer}>
          <FilterMenu onSelectOption={handleMenuOption} />
        </View>
      )}

      {/* nota de cesar: de momento es que esten, ya luego haremos el dise;o esperado */}
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />
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
