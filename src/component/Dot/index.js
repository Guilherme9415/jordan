import React from 'react';
import { View,Text,StyleSheet,Dimensions} from 'react-native';

export default function Dot(props) {
 return (
   <View style={[styles.container, {backgroundColor:props.color}]}>
   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.050,
    height: Dimensions.get("window").width * 0.050,
    backgroundColor: 'red',
    borderRadius: Dimensions.get("window").width * 0.050 / 2,
    paddingHorizontal:'3%',
    elevation: 5,
    marginHorizontal:'2%'
  },
});