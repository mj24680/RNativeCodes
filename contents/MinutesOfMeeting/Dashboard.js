import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Minutes of a Meeting</Text>
            </View>

            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search Meeting"
            />

            <ScrollView>
                {/* Upcoming Section */}
                <Text style={styles.sectionTitle}>Upcoming</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>FYP-I Meeting</Text>
                        <Text style={styles.cardDetails}>Date: Aug 05, 2024</Text>
                        <Text style={styles.cardDetails}>Time: 12:00 PM - 12:15 PM</Text>
                        <TouchableOpacity style={styles.startButton}>
                            <Text style={styles.startButtonText}>Start</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Project Presentation</Text>
                        <Text style={styles.cardDetails}>Date: Aug 10, 2024</Text>
                        <Text style={styles.cardDetails}>Time: 02:00 PM - 02:30 PM</Text>
                        <TouchableOpacity style={styles.startButton}>
                            <Text style={styles.startButtonText}>Start</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Earlier Today Section */}
                <Text style={styles.sectionTitle}>Earlier Today</Text>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Project Planning</Text>
                    <Text style={styles.cardDetails}>10:56 AM : 1 min : Sir Ahsan</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Presenting Design Work</Text>
                    <Text style={styles.cardDetails}>10:56 AM : 10 min : Sir Ahsan</Text>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={styles.navbar}>
                <Text style={styles.navItem}>Home</Text>
                <Text style={styles.navItem}>Meetings</Text>
                <Text style={styles.navItem}>+</Text>
                <Text style={styles.navItem}>Feedback</Text>
                <Text style={styles.navItem}>Account</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBar: {
        margin: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
    },
    sectionTitle: {
        marginHorizontal: 15,
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        elevation: 2,
        width: '45%',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDetails: {
        fontSize: 14,
        marginBottom: 5,
        color: '#555',
    },
    startButton: {
        backgroundColor: '#0fa0a9',
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    startButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#d3f4f4',
        paddingVertical: 10,
    },
    navItem: {
        fontSize: 16,
        color: '#555',
    },
});

export default Dashboard;
