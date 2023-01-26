import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker, Geojson} from 'react-native-maps';

const Map = () => {

  var one = {
        "lat": "38.9009792",
        "long": "-77.5687683",
        "image_link": "https://lh5.googleusercontent.com/p/AF1QipO6iB747ch3Y7bXjlEmny6Jtk-wak-Wt6_pOL8J=w408-h544-k-no",
        "title": " Taberna del Alabardero  ",
        "intro": " Refined Spanish cuisine & extensive wine list served in an opulent space with an outdoor patio. ",
        "rating": "4.5",
        "num_reviews": "931 reviews",
        "address": "1776 I St NW, Washington, DC 20006, United States",
        "image": "./assets/1.jpeg"
    }
  
  // const transitLayer = new google.maps.TransitLayer();
  // transitLayer.setMap(map);
  const data = require('./data.json');
  const delta = { 
    "latitudeDelta": 0.0922,
    "longitudeDelta": 0.0421,
  }
  const washington = {
    latitude: 38.89511,
    longitude: -77.03637,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const test = { 
    latitude:  38.9393619,
    longitude: -77.31451768359373,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const test2 = { 
    latitude:  Number(one['lat']),
    longitude: Number(one['long']),
    latitudeDelta: delta['latitudeDelta'],
    longitudeDelta: delta['longitudeDelta'],
  }
  
  return (

    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={
      washington 
      }  >
      <Marker
        // title={typeof(delta['latitudeDelta'])}
        title={delta['latitudeDelta'].toString()}
        coordinate={
          // washington 
          test2
          } />
          <Geojson
      geojson={data} 
      strokeColor="red"
      fillColor="green"
      strokeWidth={2}
    />
    <Marker
        // title={typeof(delta['latitudeDelta'])}
        title={"2"}
        coordinate={
          // washington 
          test
          } />
          <Geojson
      geojson={data} 
      strokeColor="red"
      fillColor="green"
      strokeWidth={2}
    />
      </MapView>
    </View>
  )
}
export default function App() {
  const data = require('./data.json');
  // console.log(data);
  // console.log(one["lat"])
  return (
    <Map/>
    // <img src="https://lh5.googleusercontent.com/p/AF1QipMT4JB3fgwniJk0VX70lQdDDQKdste0EdSfN_6n=w408-h306-k-no"/> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});