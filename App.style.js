import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor:'#f2f2f2',
      alignItems: 'flex-start',
      justifyContent: 'center',

    },
    header:{
      flexGrow:1,
      width:'100%'
    },
    body:{
      flexGrow:8,
      backgroundColor:'#f2f2f2',
      width:'100%'
    },
    footer:{
      flexGrow:1,
      width:'100%'
    }
  });