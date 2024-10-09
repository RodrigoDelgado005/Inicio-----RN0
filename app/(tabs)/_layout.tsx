import { Tabs } from 'expo-router';
/* @tutinfo Import <CODEIonicons</CODE> icon set.*/
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      /* damos los estilos a la barra de navegacion */
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
      }}
    >

      <Tabs.Screen
      /* definimos el estilo, icono y titulo de cada boton*/
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo The <CODE>focused</CODE> param allows us to change a tab's icon and label behavior when it is active and inactive.*/
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'code-slash' : 'code-slash-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused }) => (
            /* @tutinfo */
            <Ionicons name={focused ? 'call' : 'call-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}