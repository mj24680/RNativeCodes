import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';


const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Profile</Text>
            </View>

            {/* User Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('../Images/Silvi.jpg')}
                    style={styles.userImage}
                />
                <TouchableOpacity style={styles.editIcon} onPress={() => { }}>
                    <Text style={styles.editText}>✎</Text>
                </TouchableOpacity>
            </View>

            {/* Personal Information */}
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}

                    />
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.deleteButton} onPress={() => { }}>
                <Text style={styles.deleteText}>Add User</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    header: { marginBottom: 20 },
    title: { fontSize: 26, fontWeight: 'bold' },
    imageContainer: { alignItems: 'center', marginBottom: 20 },
    userImage: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' },
    editIcon: {
        position: 'absolute',
        right: 120,
        bottom: 10,
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 20,
    },
    editText: { color: '#fff', fontSize: 16 },
    sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    infoContainer: { marginBottom: 20 },
    infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    label: { flex: 1, fontSize: 20 },
    input: { flex: 2, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5 },
    deleteButton: { backgroundColor: '#2DB2AB', padding: 15, borderRadius: 5, alignItems: 'center' },
    deleteText: { color: '#fff', fontSize: 22 },
});

export default ProfileScreen;
