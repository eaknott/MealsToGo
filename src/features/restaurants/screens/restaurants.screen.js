import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder='search' />
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>list</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flexGrow: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
  text: {
    fontWeight: 'bold',
  },
});
