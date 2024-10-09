import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';

//funcion para recibir el formulario, mostrar una alerta al ser enviado y limpiar la entrada
export default function Contact() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const envioMensaje = () => {
    Alert.alert("Gracias por contactarnos, te responderemos lo antes posible");

    setNombre('');
    setCorreo('');
    setMensaje('');

};
// muestra por pantalla un formulario de contacto
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="call-outline" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contáctanos</ThemedText>
      </ThemedView>

      <ThemedText>¡Estamos para ayudarte! Contáctanos a través del siguiente medio:</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe tu mensaje"
        value={mensaje}
        onChangeText={setMensaje}
        multiline={true}
      />

      <TouchableOpacity style={styles.button} onPress={envioMensaje}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

// estilo para los elementos del formulario
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,

    backgroundColor: '#FFF',
    color: '#535151',
  },
  textArea: {
    height: 95,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#4F8EF7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width:'50%',
    alignSelf:'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
