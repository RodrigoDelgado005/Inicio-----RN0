import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    // Muestra el texto HOLA MUNDO
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo! 😎</Text>
    </View>
  );
}
// Estilos para el contenido
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
});
