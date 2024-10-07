# Inicio---RN0

Para comenzar con el proyecto, es importante ejecutar los siguientes comandos:

Instalación del CLI de React Native
```bash
npm install -g react-native-cli
```

Crear un Nuevo Proyecto
```bash
npx create-expo-app@latest
```

Navegar al Directorio del Proyecto
```bash
cd MiProyecto
```

Ejecutar la Aplicación en un Emulador o Dispositivo(En este caso utilizaremos Expo Go para Android) y lo iniciaremos con:
```bash
npx expo start
```

Debemos escaneaer el codigo QR con la aplicacion para acceder al proyecto
Es importante saber que ante cualquier problema, podemos acceder a la documentacion oficial de expo donde nos proporcionan la solucion a cualquier error(https://docs.expo.dev/tutorial/create-your-first-app/)


Problema a Resolver:
Crear nuestro primer proyecto en React Native con Expo
Generar una pantalla limpia con un hola mundo y sumarle un nuevo tab con diferente estilo

Solucion:
Creamos en la carpeta '(tabs)' un archivo el cual sera una nueva "pestaña", iremos a 'layout' donde indicaremos la ruta de esta "pestaña" y su correspondiente icono
Luego desarrollaremos el diseño.

Es importante importar todo lo que usaremos para evitar problemas.
