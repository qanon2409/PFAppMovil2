import { imageViewStyles } from './imageView.style';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useContext, useState,useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {LoadPic} from '../servicio/APIservicio'
import { StoreContext } from '../servicio/Store/StoreProvider';
export function ImageView() {
 

  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../assets/fonts/LexendGiga-Black.ttf'),
  });
  const [pic,setPic]=useState({})
  const [store,dispatch] = useContext(StoreContext);
  const {albumId,photoId}=store;

  useEffect(()=>{
    LoadPic(photoId).then(response => response.json()).then((data)=>{
      
      setPic(data)
    
    }).catch((e)=>(console.log(e.message))) 
  },[])

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[imageViewStyles.container]} onLayout={onLayoutRootView}>
      <View style={imageViewStyles.textContainer}>
        <Text style={[imageViewStyles.title, { fontFamily: 'LexendGiga-Black' }]}>
        <Ionicons name="arrow-back" size={32} color="black" />
            </Text>
        <Text style={[imageViewStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}>Instagram album</Text>

      </View>

      <View style={imageViewStyles.photoContainer}>
     
        <Image source={{uri:pic.thumbnailUrl}} style={imageViewStyles.photo} />
      </View>


    </View>
  );
}
