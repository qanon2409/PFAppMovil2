import { StyleSheet } from "react-native";


export const albumItemStyles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'row',

    width:380,
    flexWrap:'wrap',
    alignItems:'flex-start',
   
    padding:5,
    borderWidth:1,
   
    
  },
  itemContainer: {

  },
  itemScroll: {
    flexGrow: 7
  },
  titleContainer: {
   flexGrow:1,
   
    flexDirection:'row',
    height:100,
   

  },

  title: {

    paddingLeft: 15
  },

  cuadro: {

   
    flexGrow: 1,
   

  },
  cuadrop:{
    backgroundColor: 'lightblue',
    borderRadius:20,
    height: 80,
    width:80,
    margin:5
  },
  textContainer: {
    flexGrow: 1
  },
  subTittle: {
    fontSize: 13,
    width:'60%'
  },
  subTittle2: {
    fontSize: 8,
    width:'60%'
  },
  pictureContainer: {
    flex:1,
    flexDirection: 'row',
 
  

  },
  pictureSubContainer1: {
    flexGrow: 1,
   
    height: 200,
    justifyContent:'center'
  },
  pictureSubContainer2: {
    flexGrow: 1,
   
    height: 200,
    flexDirection:'row',
    flexWrap:'wrap',
    width:150

  },
  bigImgContainer:{
    flexGrow: 2,
    height: 170,
   justifyContent:'center',
 alignItems:'center',
   
  },
  bigImg:{
    height:170,
    width:170,
    borderRadius:20,
  },
  smallImgContainer:{
    flexGrow: 1,
    height: 90,
    margin:5,
    width:60,
    borderRadius:20
  },
  smallImg:{
    height:80,
    width:80
  }

});