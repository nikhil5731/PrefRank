import React, { Component, useEffect } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { FirebaseAuth } from "../firebaseConfig";
import HomeImage from "../assets/home2.png";
import Logo from "../assets/Logo.png";
import useFonts from "../hooks/useFonts";

export default function Home() {
  useEffect(() => {
    const loadFonts = async () => {
      await useFonts();
    };

    loadFonts();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={HomeImage} style={styles.backgroundImage}>
        <View style={styles.leftView}>
          <Image source={Logo} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.rightView}>
          <Text style={styles.titleText}>
            Fill the details and leave rest to us!
          </Text>
          <View style={styles.formDiv}>
            <View style={styles.inputGroup1}>
              <View style={styles.inputbox}>
                <Text style={styles.inputText}>Name:</Text>
                <TextInput style={styles.input} placeholder="" />
              </View>
              <View style={styles.inputbox}>
                <Text style={styles.inputText}>Email ID:</Text>
                <TextInput style={styles.input} placeholder="" />
              </View>
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.inputText}>JEE:</Text>
              <TextInput style={styles.input} placeholder="" />
            </View>
            <View style={styles.inputGroup1}>
              <View style={styles.inputbox}>
                <Text style={styles.inputText}>
                  Quota<Text style={{ fontSize: 13 }}>(for JEE Main only)</Text>
                  :
                </Text>
                <TextInput style={styles.input} placeholder="" />
              </View>
              <View style={styles.inputbox}>
                <Text style={styles.inputText}>Category:</Text>
                <TextInput style={styles.input} placeholder="" />
              </View>
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.inputText}>AIR:</Text>
              <TextInput style={styles.input} placeholder="" />
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={{
                  ...styles.inputText,
                  color: "white",
                  marginBottom: 0,
                }}
              >
                Predict College
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{}}>
              <Text
                style={{
                  textDecorationLine: "underline",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                SignOut
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={styles.btn}
            onPress={() => FirebaseAuth.signOut()}
          >
            <Text style={{ color: "white" }}>Sign Out</Text>
          </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: "40%",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#334C8A",
    color: "white",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 30,
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 1,
    margin: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  leftView: {
    flex: 1,
    height: "100%",
    paddingLeft: 120,
    paddingTop: 50,
  },
  rightView: {
    flex: 1,
    height: "100%",
    padding: 40,
    alignItems: "center",
  },
  image: {
    width: "25%",
    height: "10%",
  },
  titleText: {
    fontSize: 40,
    width: "60%",
    textAlign: "center",
    color: "#262626",
    fontFamily: "Sanchez",
    lineHeight: 50,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  formDiv: {
    marginTop: 25,
    backgroundColor: "#C4DAFF",
    width: "80%",
    height: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderRadius: 10,
    padding: 20,
  },
  inputGroup1: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    height: 10,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 5,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    outlineStyle: "none",
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.46)",
  },
  inputText: {
    fontFamily: "Sanchez",
    fontSize: 20,
    fontWeight: "semibold",
    color: "#334C8A",
  },
  inputbox: {
    flex: 1,
    flexDirection: "column",
  },
});
