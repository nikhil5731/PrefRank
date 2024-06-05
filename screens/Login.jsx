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
import { FirebaseAuth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FirebaseAuth;

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Login Failed! ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
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
        placeholder="Password"
        autoCapitalize="none"
        onChange={(event) => setPassword(event.target.value)}
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
          <TouchableOpacity onPress={handleLogin} style={styles.btn}>
            <Text style={styles.btn}>LogIn</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Create an account?</Text>
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
