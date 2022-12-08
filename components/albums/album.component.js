import { albumStyles } from './album.style';
import { View } from 'react-native';
import { AlbumGroup } from './albumGroup/albumGroup.component'; 
export function Album() {
  return (
    <View style={albumStyles.container}>
    <AlbumGroup></AlbumGroup>
    </View>
  );
}
