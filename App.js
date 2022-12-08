import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Header } from './layouts/header/Header.component'
import { Footer } from './layouts/footer/Footer.component';
import { styles } from './App.style';
import { Home } from './components/home/home.components';
import { Album } from './components/albums/album.component';
import { ImageView } from './components/imageView/imageView.component';
import StoreProvider from './components/servicio/Store/StoreProvider';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <View style={[styles.container]}>
      <StoreProvider>
      <NavigationContainer>
      <View style={styles.header}>

        <Header></Header>
      </View>
      <View style={styles.body}>
       
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Album" component={Album} />
            <Stack.Screen name="ImageView" component={ImageView} />

          </Stack.Navigator>

        

      </View>

      <View style={styles.footer}>
        <Footer></Footer>
      </View>
      <StatusBar style="auto" />
      </NavigationContainer>
      </StoreProvider>  
      
    </View>
  );
}
