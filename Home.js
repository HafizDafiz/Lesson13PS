import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#000", // Set background to black
        justifyContent: "space-between",
    },
    listStyle: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginVertical: 8,
        backgroundColor: "#1c1c1c", // Darker shade for cards
        shadowColor: "#fff",
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#fff", // White text for better visibility
    },
    loadingText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_2d493bdcc1d9a44828b6e71cb095b88d")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setMyData(json.result.records); // API response adjustment
            })
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);

    // Get unique towns from data
    const towns = [...new Set(myData.map(item => item.town))];

    return (
        <View style={styles.container}>
            <StatusBar/> {/* Hide status bar for full-screen black look */}

            {loading ? (
                <>
                    <ActivityIndicator size="large" color="#fff" />
                    <Text style={styles.loadingText}>Loading data...</Text>
                </>
            ) : (
                <FlatList
                    data={towns}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.listStyle}
                            onPress={() => navigation.navigate("Years", { town: item, records: myData })}
                        >
                            <Icon name="map-marker" size={24} color="#FF5733" />
                            <Text style={styles.title}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

export default Home;


