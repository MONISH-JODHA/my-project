import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function apppro(): JSX.Element {
    const darkmode = useColorScheme() ==='dark'

  return (
   
    <View style={styles.container}>
      <Text style={darkmode ? styles.whitetxt : styles.blacktxttxt }>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whitetxt:{
    color:'white'
  },
  blacktxt:{
    color:'black'
  }
});
export default apppro;
