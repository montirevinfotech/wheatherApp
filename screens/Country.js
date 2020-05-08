import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { getWeatherData } from '../api';

import Constants from 'expo-constants';

const Item = ({ name }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const Country = (props) => {
    useEffect(() => {
        // const weatherData = getWeatherData();
    }, []);

    return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.country}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.alpha2Code}
      />
    </SafeAreaView>
    );
  }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default Country;