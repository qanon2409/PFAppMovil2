import { homeStyles } from './home.style';
import { View } from 'react-native';
import { Msn } from './message/msn.components'; 
import { Recents } from './recents/recents.components'
import { Tags } from './tags/tags.components';
import {Places} from './places/places.components'
export function Home() {
  return (
    <View style={homeStyles.container}>
     <Recents style={homeStyles.items}></Recents>
      <Tags style={homeStyles.items}></Tags>
      <Places style={homeStyles.items}></Places>
      <Msn style={homeStyles.items}></Msn>
    </View>
  );
}
