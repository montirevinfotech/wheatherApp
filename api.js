import React from 'react';
import { Alert } from 'react-native';

const countryBaseUrl = 'https://restcountries.eu';
const weatherBaseUrl = 'http://api.weatherstack.com';
const ACCESS_KEY = '8a55ab986f7b1e4d3e73da24a2f17870';

const getCountryByName = (country) => fetch(`${countryBaseUrl}/rest/v2/name/${country}`)
.then(res => res.json())
.catch(err => Alert.alert('Error: To get Country by Name ', err))


const getWeatherData = (country) => fetch(`${weatherBaseUrl}/current?access_key=${ACCESS_KEY}&query=${country}`)
.then(res => res.json())
.catch(err => Alert.alert('Error: To get Country weather ', err))

export {
    getCountryByName,
    getWeatherData
}