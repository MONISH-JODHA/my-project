/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

function apppro(): JSX.Element {
  const darkmode = useColorScheme() === 'light';

  return (

    <View style={styles.container}>
      <Text style={darkmode ? styles.blacktxt : styles.whitetxt}>Testing Area</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whitetxt: {
    color: 'white',
  },
  blacktxt: {
    color: 'black',
  },
});
export default apppro;
