import { StyleSheet } from "react-native";

export const tagStyles = StyleSheet.create({
    container: {
      flexGrow:1,
      backgroundColor: '#fff',
    },
    itemScroll:{
    
      
      
    },
    itemContainer:{
      
     flexDirection:'row',
     alignItems:'center'
      
    },
    items:{
      
    
      height:60,
      width:70,
     
       margin:5,
       alignItems:'center',
       justifyContent:'center'


      
         
    },
    images:{
      width:50,
      height:50,
      borderRadius:20,
    },
    texto:{
      color:'white',
     zIndex:99,
     position:'absolute',
     fontSize:10,
    marginVertical:'60%'

    },
    title:{
      paddingTop:40,
      paddingLeft:15
    }
   
  });