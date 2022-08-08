import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "./utils/index";

const {PRIMARY_COLOR,SECONDARY_COLOR,BORDER_COLOR} = colors;

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon,description,main } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
      <Text style={styles.textPrimary}>{temp}</Text>
      <Text style={styles.weatherDesc}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDesc:{
    textTransform:"capitalize" 
  },
  textPrimary:{
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary:{
    fontSize:20,
    fontWeight:500,
    color: SECONDARY_COLOR,
    marginTop:10,
  }
});

