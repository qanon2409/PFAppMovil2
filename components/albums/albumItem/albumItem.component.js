import { View, Text, Image } from 'react-native';
import { albumItemStyles } from './albumItem.style';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import Cover from '../../../assets/Recursos2/listaAlbumes/coverAlbum1.svg'
import Imagen1 from '../../../assets/Recursos2/listaAlbumes/previewPhoto1.svg'
import Imagen2 from '../../../assets/Recursos2/listaAlbumes/previewPhoto2.svg'
import Imagen3 from '../../../assets/Recursos2/listaAlbumes/previewPhoto3.svg'
import Imagen4 from '../../../assets/Recursos2/listaAlbumes/previewPhoto4.svg'
export function AlbumItem() {


    const [fontsLoaded] = useFonts({
        'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {

    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={albumItemStyles.container} onLayout={onLayoutRootView}>

            <View style={[albumItemStyles.titleContainer]}>
                <View style={albumItemStyles.cuadro}>
                    <View style={albumItemStyles.cuadrop}>
                    </View>
                </View>
                <View style={albumItemStyles.textContainer}>
                    <Text style={[albumItemStyles.subTittle, { fontFamily: 'LexendGiga-Black' }]}>Instagram Ciudad  </Text>
                    <Text style={[albumItemStyles.subTittle2, { fontFamily: 'LexendGiga-Black' }]}>Ultima modificacion Hace 1h </Text>
                </View>
            </View>
            <View style={[albumItemStyles.pictureContainer]}>

                <View style={albumItemStyles.pictureSubContainer1}>
                    <View style={albumItemStyles.bigImgContainer}>
                        <Cover style={albumItemStyles.bigImg} />
                    </View>

                </View>
                <View style={albumItemStyles.pictureSubContainer2}>
                    <View style={[albumItemStyles.smallImgContainer]}>
                        <Imagen1 style={albumItemStyles.smallImg} />
                    </View>
                    <View style={[albumItemStyles.smallImgContainer]}>
                        <Imagen2 style={albumItemStyles.smallImg} />
                    </View>
                    <View style={[albumItemStyles.smallImgContainer]}>
                        <Imagen3 style={albumItemStyles.smallImg} />
                    </View>
                    <View style={[albumItemStyles.smallImgContainer]}>
                        <Imagen4 style={albumItemStyles.smallImg} />
                    </View>
                </View>
            </View>
        </View>

        
    );
    /*
     <View style={[albumItemStyles.titleContainer]}>
                <View style={albumItemStyles.cuadro}>

                </View>
                <View style={albumItemStyles.textContainer}>
                    <Text style={[albumItemStyles.subTittle, { fontFamily: 'LexendGiga-Black' }]}>Lorem Ipsum is </Text>
                    <Text style={[albumItemStyles.subTittle2, { fontFamily: 'LexendGiga-Black' }]}>Lorem Ipsum is simply dummy. </Text>
                </View>
            </View>
            <View style={albumItemStyles.pictureContainer}>
                <View style={albumItemStyles.pictureSubContainer1}>
                    <Text>Primero</Text>
                </View>
                <View style={albumItemStyles.pictureSubContainer2}>
                    <Text>Primero</Text>
                </View>
            </View>
    */
}
