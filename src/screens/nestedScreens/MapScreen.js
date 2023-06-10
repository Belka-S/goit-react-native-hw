import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = ({ route }) => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    if (!route.params) return;

    const { locationCoords } = route.params.item;
    setCoords(locationCoords);
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{ ...coords, latitudeDelta: 0.1, longitudeDelta: 0.05 }}
      >
        <Marker title="Image" coordinate={coords} description="Hello" />
      </MapView>
    </View>
  );
};
