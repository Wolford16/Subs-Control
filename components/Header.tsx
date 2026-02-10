import { Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={{ 
      backgroundColor: '#403d39', 
      padding: 20, 
      paddingTop: 50,
      alignItems: 'center',     // Centra horizontalmente
      justifyContent: 'center'  // Centra verticalmente 
    }}>
      <Text style={{ 
        color: 'white', 
        fontSize: 30,           // Tamaño de la letra
        fontWeight: 'bold',     // Para que resalte más
        textAlign: 'center'     // Centra el texto
      }}>
        Mis Suscripciones
      </Text>
    </View>
  );
}