import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import Pin from "../components/pin";

export default function Pins() {
  return (
    <View style={styles.pinsContent}>
      <Pin imageUrl={"https://www.google.com"} pinName={"Vancouver"}/>
      <Pin imageUrl={"https://www.google.com"} pinName={"Vancouver"}/>
      <Pin imageUrl={"https://www.google.com"} pinName={"Vancouver"}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  pin: {
    width: 200, // Set the width to 50% to fit 2 items in a row
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    elevation: 3,
  },
  pinImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  pinName: {
    color: "black",
    fontSize: 24,
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  pinsContent: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
