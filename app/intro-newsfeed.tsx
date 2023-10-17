import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import IntroLayout from "./intro/_layout";

export default function IntroNewsFeed() {
  return (
    <View style={styles.container}>
      <IntroLayout>
        <Text style={styles.header}>News Feed</Text>
        <View style={styles.innercontainer}>
          <Text style={styles.text}>
            Staying informed goes beyond crisis alerts. That's why we've
            included a local news dashboard for your saved locales. OurSOS keeps
            you up-to-date with relevant news and developments, helping you
            navigate through any situation effectively.
          </Text>
          <Link href="/intro-map">
            <Pressable style={styles.button}>
              <Text style={styles.text}>Continue</Text>
            </Pressable>
          </Link>
        </View>
      </IntroLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  innercontainer: {
    padding: 36,
    transparent: true,
    alignItems: "center",
    backgroundColor: "rgba(125, 125, 125, .3)",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "rgba(125, 125, 125, .6)",
    marginTop: 24,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
});