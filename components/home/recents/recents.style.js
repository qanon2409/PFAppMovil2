import { StyleSheet } from "react-native";


export const recentStyles = StyleSheet.create({
    container: {
      flexGrow:1,
      backgroundColor: '#fff',
      
    },
    itemScroll:{ 
     
      
    },
    itemContainer:{
     
     flexDirection:'row',
     alignItems:'center',
     
      
    },
    items:{
      
      
      height:75,
      width:90,
      
      borderRadius:20,
       margin:5,
       alignItems:'center'
      
         
    },
    title:{
      paddingTop:40,
      paddingLeft:15
    },
    images:{
      width:75,
      height:75,
      opacity: 0.5,
      
      
    },
    texto:{
      color:'white',
     zIndex:99,
     position:'absolute',
     fontSize:10,
    marginVertical:'50%'

    }
   
  });