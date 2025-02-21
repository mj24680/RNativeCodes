import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerIcon}>🎤</Text>
                <Text style={styles.headerText}>Minutes of a Meeting</Text>
            </View>

            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
                    <Text style={styles.tabText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                    <Text style={[styles.tabText, styles.activeTabText]}>Register</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="E-mail ID"
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#aaa"
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.signInText}>
                Already have an account? <Text style={styles.signInLink}>Sign in</Text>
            </Text>

            <Text style={styles.termsText}>
                By using Minutes of Meeting you agree to the{" "}
                <Text style={styles.link}>Term of Service</Text> and{" "}
                <Text style={styles.link}>Privacy Policy</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { alignItems: "center", marginBottom: 30 },
    headerIcon: { fontSize: 40, color: "#2DB2AB", marginBottom: 10 },
    headerText: { fontSize: 20, fontWeight: "bold", color: "#000" },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        marginHorizontal: 5,
    },
    activeTab: { backgroundColor: "#F0F0F0" },
    inactiveTab: { backgroundColor: "#fff" },
    tabText: { fontSize: 14, color: "#aaa" },
    activeTabText: { color: "#000", fontWeight: "bold" },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        fontSize: 14,
        color: "#000",
    },
    registerButton: {
        backgroundColor: "#2DB2AB",
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
    },
    registerButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
    signInText: { textAlign: "center", marginTop: 20, color: "#000" },
    signInLink: { color: "#2DB2AB", fontWeight: "bold" },
    termsText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 12,
        color: "#aaa",
    },
    link: { color: "#2DB2AB" },
});

export default RegisterScreen;
