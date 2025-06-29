import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SignInPhone() {
  return (
    <View style={styles.container}>
      <Text style={styles.title01}>Sign In</Text>

      <View style={styles.container01}>
        <View style={styles.phoneContainer}>
          <Image
            source={require("../assets/vn.png")}
            style={styles.flag}
          />
          <Text style={styles.countryCode}>+84</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Phone number"
            keyboardType="phone-pad"
            maxLength={9}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>OR</Text>
        <TouchableOpacity style={styles.button01}>
          <Text style={styles.buttonText}>Login With Facebook</Text>
        </TouchableOpacity>
        <Image source={require("../assets/gg.png")} style={styles.logo} />
        <TouchableOpacity style={styles.button04}>
          <Image
            source={require("../assets/apple.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText01}>Sign in With Apple</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button02}>
          <Text style={styles.buttonText02}>Sign in with E-mail</Text>
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
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 150,
    paddingHorizontal: 10,
    height: 35,
    width: 300,
    backgroundColor: "#f5f5dc",
    marginBottom: 10,
    marginTop: 70,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
    resizeMode: "contain",
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
  },
  container01: {
    marginTop: 0,
    backgroundColor: "#e9967a",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconVN: {
    width: 24,
    height: 16,
    marginRight: 8,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#0000cd",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 150,
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button01: {
    backgroundColor: "#6495ed",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 150,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "200",
  },
  buttonText01: {
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
    marginTop: 0,
  },
  buttonText02: {
    color: "#483d8b",
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
  button04: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 150,
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 260,
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
    fontWeight: "bold",
    alignItems: "left",
    justifyContent: "left",
    paddingRight: 200,
    marginTop: -100,
  },
  title02: {
    fontSize: 20,
    marginTop: 0,
    fontWeight: "bold",
  },
  title03: {
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "left",
    justifyContent: "left",
    paddingLeft: 180,
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
    width: 35,
    height: 35,
    marginTop: 0,
    resizeMode: "cover",
  },
});
