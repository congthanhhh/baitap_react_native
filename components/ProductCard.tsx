import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Product {
    id: number;
    title: string;
    price: number;
    imageURL: string;
}

interface ProductCardProps {
    product: Product;
    onPress?: () => void;
}

const ProductCard = ({ product, onPress }: ProductCardProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <Image
                source={{ uri: product.imageURL }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 1,
        maxWidth: '48%',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: '#2e8b57',
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default ProductCard;