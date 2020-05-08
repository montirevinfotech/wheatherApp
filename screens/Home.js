import React, { useState } from 'react';
import { Avatar, Button, Card, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Home = (props) => {
    const [country, setCountry] = useState('');
    
    const LeftContent = props => <Avatar.Icon {...props} icon="pinwheel" />

    return (
        <Card>
            <Card.Title
                title="Weather App"
                subtitle="Get weather information"
                left={LeftContent}
            />
            <Card.Content>
            <TextInput
                style={style.country}
                label="Country"
                placeholder="Enter country"
                mode="outlined"
                onChangeText={(v) => setCountry(v)}
                value={country}
            />
            </Card.Content>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1557170308-24e08d78ff53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
            <Card.Actions>
            <Button
                disabled={!country}
                icon="content-save"
                mode="contained"
                onPress={() => props.getCountryData(country)}
            >
            Save
            </Button>
            </Card.Actions>
        </Card>
    );
  }

  const style = StyleSheet.create({
    country: {
        marginBottom: '10px'
    }
  });

  export default Home;