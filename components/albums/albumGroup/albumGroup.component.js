import { albumGroupStyles } from './albumGroup.style';
import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useContext, useState, useEffect } from 'react';
import { LoadAlbumById } from '../../servicio/APIservicio';
import { Dimensions } from 'react-native';
import { recentData } from '../../../data/default.data';
import { StoreContext } from '../../servicio/Store/StoreProvider';
import { types } from '../../servicio/Store/StoreReducer';
import { useNavigation } from '@react-navigation/native';

export function AlbumGroup() {
  const cantidad=[1];

  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const [windowWidth,setwindowWidth] = useState(Dimensions.get('window').width)
  const [windowHeight,setwindowHeight] = useState(Dimensions.get('window').height)

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  const [albums,setAlbum]=useState([])
  const [store,dispatch] = useContext(StoreContext);
  const {albumId,photoId}=store;
  const navigation = useNavigation();

  useEffect(()=>{
    LoadAlbumById(albumId).then(response => response.json()).then((data)=>{
      
      setAlbum(data)
    
    }).catch((e)=>(console.log(e.message))) 
  },[])

  const recentAlbum=({item})=>(
    <TouchableOpacity key={item.id} onPress={() =>  albumGroupNavigate(item.id)}>
      <Image style={{
        height: windowHeight/4,
        width:windowWidth/2,
        borderRadius: 10, margin:2

      }}
      
      source={{
        uri:item.thumbnailUrl+".png"
      }}/>


    </TouchableOpacity>
  )
  const albumGroupNavigate =(id)=>{
    dispatch({
      types: types.photo,
      payload:id
    })
    
    navigation.navigate('ImageView')
  }    
  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={[albumGroupStyles.container]} onLayout={onLayoutRootView}>
      <View style={albumGroupStyles.textContainer}>
        <Text style={[albumGroupStyles.title, { fontFamily: 'LexendGiga-Black' }]}>Albumes</Text>
        <Text style={[albumGroupStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}>album #{albumId}</Text>

      </View>

      <View style={albumGroupStyles.scrollContainer}>
      <FlatList style={albumGroupStyles.Scroll} numColumns={2} data={albums} renderItem={recentAlbum }>

       
       </FlatList>
      </View>


    </View>
  );
}
