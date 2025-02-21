import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import from react-native-vector-icons

const SettingsAndPrivacy = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={24} color="#0fa0a9" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings and Privacy</Text>
            </View>

            {/* Content */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account</Text>
                <TouchableOpacity style={styles.option}>
                    <Ionicons name="person-outline" size={20} color="#000" />
                    <Text style={styles.optionText}>My Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Workspace</Text>
                <TouchableOpacity style={styles.option}>
                    <Ionicons name="archive-outline" size={20} color="#000" />
                    <Text style={styles.optionText}>Archived Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Ionicons name="swap-horizontal-outline" size={20} color="#000" />
                    <Text style={styles.optionText}>Import & Export Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Ionicons name="card-outline" size={20} color="#000" />
                    <Text style={styles.optionText}>Billing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Ionicons name="document-text-outline" size={20} color="#000" />
                    <Text style={styles.optionText}>Terms and Conditions</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.navbar}>
                <Text style={styles.navItem}>Home</Text>
                <Text style={styles.navItem}>Projects</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    section: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#d3f4f4',
        paddingVertical: 10,
        marginTop: 'auto',
    },
    navItem: {
        fontSize: 16,
        color: '#555',
    },
});

export default SettingsAndPrivacy;
