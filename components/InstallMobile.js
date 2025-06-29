import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function InstallMobile() {
  const [name] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require("../assets/rocket.png")} style={styles.logo} />
      <Text style={styles.title01}>Rocketmobile</Text>
      <Text style={styles.title02}>Use this codebase to start a new Firebase Mobile app in minutes</Text>
      <View style={styles.container01}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button01}>
          <Text style={styles.buttonText01}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9967a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container01: {
    marginTop: 0,
    backgroundColor: "#e9967a",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  button: {
    backgroundColor: "#cd5c5c",
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 60,
    marginTop: 10,
    width: "300",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button01: {
    backgroundColor: "#e9967a",
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 60,
    marginTop: 10,
    width: "300",
    borderWidth: 2,
    borderColor: "#cd5c5c",
  },
  buttonText01: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },

  email: {
    marginTop: 10,
    backgroundColor: "#e9967a",
    justifyContent: "center",
    padding: 0,
    width: "200%",
  },
  title01: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: "bold",
  },
  title02: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    backgroundColor: "#f5f5dc",
    height: 40,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 6,
    width: "300",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 15,
    fontSize: 18,
    color: "green",
  },
  logo: {
    borderRadius: 200,
    borderWidth: 0,
    borderColor: "#ffe4c4",
    width: 350,
    height: 200,
    marginTop: 0,
    resizeMode: "contain",
  },
});
