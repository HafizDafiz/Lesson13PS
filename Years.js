import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#000", // Black background
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
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#fff", // White text
    },
    loadingText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginTop: 20,
    },
});

const Years = ({ route, navigation }) => {
    const { town, records } = route.params;

    const years = [...new Set(records.filter(item => item.town === town).map(item => item.financial_year))];

    return (
        <View style={styles.container}>
            <FlatList
                data={years}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listStyle}
                        onPress={() => navigation.navigate("RoomTypes", { town, year: item, records })}
                    >
                        <Text style={styles.title}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <Button title="Back" onPress={() => navigation.goBack()} />
            </View>
            <View>
                <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
};

export default Years;
