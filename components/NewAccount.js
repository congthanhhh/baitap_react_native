import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function NewAccount() {
  const [name] = useState("");
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.button03}>
          <Text style={styles.buttonText03}>Back</Text>
        </TouchableOpacity> */}
      <Text style={styles.title01}>Create new account</Text>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/0c/96/70/0c967062f89b5d67733a57d625c106e3.jpg",
        }}
        style={styles.logo}
      />

      <View style={styles.container01}>
        <View style={styles.email}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={name}
          />
        </View>
        <View style={styles.email}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={name}
          />
        </View>
        <View style={styles.email}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={name}
          />
        </View>
        <View style={styles.email}>
          <TextInput
            style={styles.input}
            placeholder="+84"
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
       

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send code</Text>
        </TouchableOpacity>
        <Text>Or</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button02}>
          <Text style={styles.buttonText02}>Sign up with E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button03}>
          <Text style={styles.buttonText03}>By creating an account you agree with our</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button03}>
          <Text style={styles.buttonText04}>About us</Text>
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
   phoneInput: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#cd5c5c",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 150,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "200",

  },
  
  button02: {
    backgroundColor: "none",
    paddingVertical: 0,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText02: {
    color: "#00008b",
    fontSize: 17,
    fontWeight: "",
    textAlign: "center",
    marginBottom: 20,
  },
  button03: {
    backgroundColor: "none",
    paddingVertical: 0,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText03: {
    color: "#cd5c5c",
    fontSize: 11,
    fontWeight: "",
    textAlign: "center",
  },
  buttonText04: {
    color: "#00008b",
    fontSize: 11,
    fontWeight: "",
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
    fontSize: 23,
    fontWeight: "bold",
    alignItems: "left",
    justifyContent: "left",
    paddingRight: 80,
    marginTop: -30,
  },
  title02: {
    fontSize: 20,
    marginTop: 0,
    fontWeight: "bold",
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
    borderRadius: 150,
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
    borderRadius: 150,
    borderColor: "#ffe4c4",
    width: 150,
    height: 150,
    marginTop: 30,
  },
});
