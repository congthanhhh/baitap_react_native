
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function CThoa({ route }) {
    const { mahoa, maloai, tenhoa, giaban, mota, hinh } = route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.itemContainer}>
            <Image source={require("../assets/hinhhoa.jpg")} style={styles.logo} />
            <Text style={styles.title}>Tên loại hoa: "{maloai}"</Text>
            <Text style={styles.title}>Mã hoa: {mahoa}</Text>
            <Text style={styles.title}>Tên hoa: "{tenhoa}"</Text>
            <Text style={styles.title}>Đơn giá: {giaban}</Text>
            <Text style={styles.title}>Mô tả: {mota}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoaiHoa")}>
                <Text style={styles.button}>Về trang các loại hoa</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.button}>Trở lại</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 50,
        alignItems: "center",
    },
    logo: {
        borderRadius: 10,
        borderWidth: 0,
        borderColor: "#ffe4c4",
        width: 250,
        height: 250,
        marginBottom: 10,
        resizeMode: "contain",
    },
    title: {
        fontSize: 15,
        fontWeight: 500,
        color: "#555",
        marginBottom: 5,
    },
    button: {
        fontSize: 15,
        fontWeight: 500,
        color: "#00bfff",
        marginBottom: 5,
    },
});
