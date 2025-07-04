import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView, Modal, Image, TouchableOpacity, Dimensions } from "react-native";
import { products } from "../assets/products";
import ProductCard from "./ProductCard";

export default function ShowProduct() {
    const [items, setItems] = useState(products);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");

    const handleItemPress = (imageURL: string, title: string) => {
        setSelectedImage(imageURL);
        setSelectedTitle(title);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage("");
        setSelectedTitle("");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Product Store</Text>
            </View>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={() => handleItemPress(item.imageURL, item.title)}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false} // ẩn thanh scroll dọc
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={closeModal}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeModal}
                        >
                            <Text style={styles.closeButtonText}>✕</Text>
                        </TouchableOpacity>
                        <Image
                            source={{ uri: selectedImage }}
                            style={styles.modalImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.modalTitle}>{selectedTitle}</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9967a",
    },
    header: {
        padding: 20,
        paddingTop: 40,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    row: {
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    listContent: {
        paddingBottom: 100,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        margin: 20,
        alignItems: 'center',
        maxHeight: '80%',
        maxWidth: '90%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 15,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
        color: '#333',
    },
});