import React, { Component } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FirebaseAuth } from "../firebaseConfig";

export default function Home() {
  return (
    <View>
      <Text> Home </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => FirebaseAuth.signOut()}
      >
        <Text style={{ color: "white" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#334C8A",
    color: "white",
    textAlign: "center",
    fontSize: 40,
    margin: 3,
    borderRadius: 10,
  },
});
