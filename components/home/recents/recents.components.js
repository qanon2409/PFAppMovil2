import { recentStyles } from './recents.style';
import { ScrollView, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';
import { useCallback, useContext, useEffect, useState } from 'react';
import { LoadAlbum,LoadAlbumById } from '../../servicio/APIservicio';
import { StoreContext } from '../../servicio/Store/StoreProvider';
import { types } from '../../servicio/Store/StoreReducer';
import { useNavigation } from '@react-navigation/native';

/*import Recent1 from '../../../assets/Recursos2/inicio/recentAlbum1.svg'
import Recent2 from '../../../assets/Recursos2/inicio/recentAlbum2.svg'
import Recent3 from '../../../assets/Recursos2/inicio/recentAlbum3.svg'
import Recent4 from '../../../assets/Recursos2/inicio/recentAlbum3.svg'*/

export function Recents() {


  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  const [store,dispatch] = useContext(StoreContext);
  const navigation = useNavigation();
  const onLayoutRootView = useCallback(async () => {
   
  }, [fontsLoaded]);
  const [album,setAlbum]=useState([])
  useEffect(()=>{
    LoadAlbum().then(response => response.json()).then((data)=>{
      let albumdata= getAlbum(data)
      setAlbum(albumdata)
    
    }).catch((e)=>(console.log(e.message))) 
  },[])

  const albumNavigate =(id)=>{
    dispatch({
      types: types.album,
      payload:id
    })
    
    navigation.navigate('Album')
  }
  const getAlbum =(data)=>{
    let id=1;
    let limit=10;
    let arreglo=[]
    for(let x=1; x<=limit;x++)
    {
      let temp=data.filter((item)=>item.albumId==id)[0]
      arreglo.push(temp)
      id++
    }

    return arreglo;

  }

  const showAlbum=(id)=>{

  }


  
  if (!fontsLoaded) {
    return null;
  }
  // {recentData.map((x)=>{ })}
  return (
    <View style={[recentStyles.container]} onLayout={onLayoutRootView}>

      <Text style={[recentStyles.title, { fontFamily: 'LexendGiga-Black' }]}>Recientes</Text>
      <ScrollView horizontal={true} style={recentStyles.itemScroll}>
        <View style={recentStyles.itemContainer}>
        {/*
          <View style={recentStyles.items}>
                <Recent1 style={recentStyles.images}  />

            <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}></Text>
          </View>
          <View style={recentStyles.items}>
          <Recent2 style={recentStyles.images}  />
            <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}></Text>

          </View>
        </View>
        <View style={recentStyles.items}>
        <Recent3 style={recentStyles.images}  />
          <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}></Text>

        </View>
        <View style={recentStyles.items}>
        <Recent4 style={recentStyles.images}  />
          <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}></Text>
        */}

        {album.map((item)=>(
          <View style={recentStyles.items} key={item.id}>
            <TouchableOpacity onPress={() =>  albumNavigate(item.albumId)}>
              <Image source={{uri:item.thumbnailUrl+".png"}} style={recentStyles.images}  />

            </TouchableOpacity>
            
            <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}>Hola</Text>
  
          </View>
        ))}

        </View>

        
      </ScrollView>

    </View>
  );
}
