import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Country from './screens/Country';
import { getCountryByName } from './api';


export default function App() {
  const [country, setCountry] = useState({})

  const getCountryData = async (data) => {
    const countryData = await getCountryByName(data);
    setCountry(countryData);
};

  return (
    <View style={styles.container}>
      {
        !Object.keys(country).length && 
        <Home
          getCountryData={getCountryData}
        />
      }
      {
        Object.keys(country).length && 
        <Country
          country={country}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
