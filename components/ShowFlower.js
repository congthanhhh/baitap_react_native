
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { hoa } from "../assets/hoa";
import { useNavigation } from "@react-navigation/native";

export default function ShowFlower({ route }) {
  const { maloai, tenloai } = route.params;
  const navigation = useNavigation();
  const filteredFlowers = hoa.filter((flower) => flower.maloai === maloai);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("CThoa", {
        mahoa: item.mahoa,
        maloai: item.maloai,
        tenhoa: item.tenhoa,
        giaban: item.giaban,
        mota: item.mota,
        hinh: item.hinh
      })}>
        <Text style={styles.title02}>{item.tenhoa}</Text>
        <Image source={require("../assets/hinhhoa.jpg")} style={styles.logo} />
        <Text style={{ fontSize: 16, marginTop: 10, color: "#555", textAlign: "center" }}
        >Giá bán: {item.giaban}</Text>
      </TouchableOpacity>
    </View>

  );

  return (
    <View style={styles.itemContainer} >
      <Text style={styles.title01}>Mã hoa: {maloai}</Text>
      <Text style={styles.title01}>Loại hoa: {tenloai}</Text>
      <FlatList
        data={filteredFlowers}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#ffe4c4",
    width: 200,
    height: 200,
    marginTop: 0,
    resizeMode: "contain",
  },
  title01: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cd5c5c",
    marginBottom: 10,
  },
  title02: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#555",
    marginBottom: 20,
  },
});
