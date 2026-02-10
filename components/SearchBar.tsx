import { View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

type SearchBarProps = {
  onSearch?: (text: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (text: string) => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar..."
        value={searchText}
        onChangeText={handleChange}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});
