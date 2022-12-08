import { tagStyles } from './tags.style'; 
import { Text, View, ScrollView,Image } from 'react-native';
import { testData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import Image1 from '../../../assets/Recursos2/inicio/Nature.svg'
import Image2 from '../../../assets/Recursos2/inicio/Tag faces.svg'
import Image3 from '../../../assets/Recursos2/inicio/Fastfood.svg'
import Image4 from '../../../assets/Recursos2/inicio/Pets.svg'

export function Tags() {
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
   
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={tagStyles.container} onLayout={onLayoutRootView}>
   
      <Text  style={[tagStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Tags</Text>
      <ScrollView horizontal={true} style={tagStyles.itemScroll}>
        <View style={tagStyles.itemContainer}>
      
        <View  style={tagStyles.items}>
      
        <Image1  style={tagStyles.images}/>
          </View>
          <View  style={tagStyles.items}>
      
        <Image2  style={tagStyles.images}/>
          </View>
          <View  style={tagStyles.items}>
       
        <Image3 style={tagStyles.images}/>
          </View>
          <View  style={tagStyles.items}>
       
       
        
        
        <Image4  style={tagStyles.images}/>
          </View>
        </View>
      
      </ScrollView>
    </View>
  );
}
