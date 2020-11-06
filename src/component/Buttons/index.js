import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';

export default function Buttons() {
 return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.title}>Comprar</Text>
    </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer:{
    width:'90%',
    height:50,
    backgroundColor:'#000',
    borderRadius: 10,
    marginVertical:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontSize:17,
    color:'#fff',
  }
});