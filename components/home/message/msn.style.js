import { StyleSheet } from "react-native";
export const msnStyles = StyleSheet.create({
    container: {
     
      backgroundColor: '#fff',
      height:200
    },
    itemContainer:{
      flex:1,
     flexDirection:'row',
     alignItems:'center'
      
    },
    title:{
      paddingTop:20,
      paddingLeft:10
    },
    imageContainer:{
    flexGrow:1,
      
     alignItems:'center'
    },
    imageS:{
      height:150,
      width:200
    },
    info:{
      flexGrow:5,
      flexBasis:'10%',
      
      
    },
    content:{
    
      fontSize:12
    }
   
  });