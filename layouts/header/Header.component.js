import { headerStyle } from "./Header.style";
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export function Header() {
  
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../assets/fonts/LexendGiga-Black.ttf'),
});

const onLayoutRootView = useCallback(async () => {

}, [fontsLoaded]);

if (!fontsLoaded) {
    return null;
}
  return (
    <View style={headerStyle.container}  onLayout={onLayoutRootView}>
     
      <Text style={[headerStyle.logo,{ fontFamily: 'LexendGiga-Black' }]}>Logo</Text>
      
    </View>
  );

}
