import {placeStyles } from './places.style'
import { Text, View,ScrollView,Image } from 'react-native';
import { testData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import Image1 from '../../../assets/Recursos2/inicio/LaAltagracia.svg'
import Image2 from '../../../assets/Recursos2/inicio/LaRomana.svg'
import Image3 from '../../../assets/Recursos2/inicio/HatoMayor.svg'

export function Places() {
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
  
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={placeStyles.container} onLayout={onLayoutRootView}>
        <Text  style={[placeStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Lugares visitados</Text>
      <ScrollView horizontal={true} style={placeStyles.itemScroll}>
        <View style={placeStyles.itemContainer}>
       
          <View  style={placeStyles.items}>
        
        <Image1  style={placeStyles.images} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>La Altagracia</Text>
          </View>

          <View  style={placeStyles.items}>
          <Image2  style={placeStyles.images} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>La Romana</Text>
          </View>

          <View  style={placeStyles.items}>
          <Image3  style={placeStyles.images} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Hato Mayor</Text>
          </View>

         



        </View>
      
      </ScrollView>
      
    </View>
  );
}
