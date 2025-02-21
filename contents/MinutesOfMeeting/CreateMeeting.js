import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from "react-native";

const CreateMeeting = () => {
    const [members, setMembers] = useState([]);
    const [memberName, setMemberName] = useState("");

    const addMember = () => {
        if (memberName.trim()) {
            setMembers([...members, memberName.trim()]);
            setMemberName("");
        }
    };

    const removeMember = (index) => {
        setMembers(members.filter((_, i) => i !== index));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Meeting</Text>

            <Text style={styles.label}>Meeting Date</Text>
            <TextInput style={styles.input} placeholder="Oct 18, 2024" />

            <Text style={styles.label}>Meeting Day</Text>
            <TextInput style={styles.input} placeholder="Monday" />

            <Text style={styles.label}>Meeting Time</Text>
            <View style={styles.row}>
                <TextInput style={[styles.input, styles.halfInput]} placeholder="Start Time" />
                <TextInput style={[styles.input, styles.halfInput]} placeholder="End Time" />
            </View>

            <Text style={styles.label}>Meeting Title</Text>
            <TextInput style={styles.input} placeholder="Title" />

            <Text style={styles.label}>Members</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.flexInput]}
                    placeholder="Add Member"
                    value={memberName}
                    onChangeText={setMemberName}
                />
                <TouchableOpacity style={styles.addButton} onPress={addMember}>
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={members}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.memberChip}>
                        <Text style={styles.memberText}>{item}</Text>
                        <TouchableOpacity onPress={() => removeMember(index)}>
                            <Text style={styles.removeText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Text style={styles.label}>Description (Optional)</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Description"
                multiline
                numberOfLines={4}
            />

            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createText}>CREATE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
    label: { fontSize: 16, marginVertical: 5 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        fontSize: 14,
    },
    row: { flexDirection: "row", justifyContent: "space-between" },
    halfInput: { width: "48%" },
    flexInput: { flex: 1, marginRight: 10 },
    addButton: {
        backgroundColor: "#2DB2AB",
        borderRadius: 8,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    addText: { color: "#fff", fontWeight: "bold" },
    memberChip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginRight: 10,
    },
    memberText: { marginRight: 10 },
    removeText: { color: "red" },
    textArea: { height: 80, textAlignVertical: "top" },
    createButton: {
        backgroundColor: "#2DB2AB",
        borderRadius: 8,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    createText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default CreateMeeting;
