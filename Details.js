import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing icons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#000", // Black background
        justifyContent: 'space-between',
    },
    detailStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        backgroundColor: "#1c1c1c", // Darker shade for details
        shadowColor: "#fff",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#fff", // White text
    },
    text: {
        fontSize: 16,
        color: "#fff", // White text for details
        marginVertical: 5,
    },
    loadingText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
    },
    icon: {
        marginRight: 10,
    },
});

const Details = ({ route, navigation }) => {
    const { town, year, roomType, records } = route.params;

    // Find the selected data based on town, year, and roomType
    const selectedData = records.find(
        item => item.town === town && item.financial_year === year && item.room_type === roomType
    );

    if (!selectedData) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>No details available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.detailStyle}>
                <Text style={styles.title}>{roomType} in {town} ({year})</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="currency-usd" size={20} color="#fff" style={styles.icon} />
                    <Text style={styles.text}>Min Price: ${selectedData.min_selling_price}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="currency-usd" size={20} color="#fff" style={styles.icon} />
                    <Text style={styles.text}>Max Price: ${selectedData.max_selling_price}</Text>
                </View>
            </View>

            <View>
                <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
            <View>
                <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
};

export default Details;
