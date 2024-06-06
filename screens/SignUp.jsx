import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from "react-native";
import { FirebaseAuth, FirebaseDB } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FirebaseAuth;

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user.uid) {
        await addDoc(collection(FirebaseDB, "users"), {
          name: name,
          email: email,
        })
          .then(() => {
            alert("Success!");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error.message);
      alert("Sign Up Failed! ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Name"
        autoCapitalize="none"
        onChange={(event) => setName(event.target.value)}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        onChange={(event) => setEmail(event.target.value)}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={password}
        placeholder="Set Password"
        autoCapitalize="none"
        onChange={(event) => setPassword(event.target.value)}
        secureTextEntry={true}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        placeholder="Confirm Password"
        autoCapitalize="none"
        onChange={(event) => setConfirmPassword(event.target.value)}
        secureTextEntry={true}
      ></TextInput>

      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={"#0000ff"}
          style={styles.loader}
        />
      ) : (
        <>
          <TouchableOpacity onPress={handleSignup} style={styles.btn}>
            <Text style={styles.btn}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Already have a account?</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: "auto",
    width: 400,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    outlineStyle: "none",
  },
  btn: {
    backgroundColor: "#334C8A",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    margin: 3,
    borderRadius: 10,
  },
  loader: {
    marginTop: 5,
  },
  link: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
