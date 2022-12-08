import { StyleSheet} from 'react-native';

export const footerStyle = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row',
    
      alignItems: 'center',
      backgroundColor:'white',
      borderTopEndRadius:100,
      borderTopStartRadius:100
    },
    options:{
      flexGrow:1,
      height:80,
      width:30,
     
     
      justifyContent:'center',
      alignItems:'center'
         
    },
    images:{
      width:50,
      height:50,
      borderRadius:20,
      marginTop:5
      
    },
  });