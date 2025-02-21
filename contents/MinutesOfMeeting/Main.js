import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    FlatList,
    Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons"; // For the edit icon


// Global state for users and meetings
let users = [
    {
        email: "jawad@gmail.com",
        password: "Jawad@123",
        fullName: "Muhammad Jawad",
        image: require("../Images/car.jpg"), // Local image
    },
    {
        email: "sirnoman@gmail.com",
        password: "Noman@123",
        fullName: "Sir Noman",
        image: "../Images/Silvi.jpg", // Remote image
    },
];
let meetings = [];

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            navigation.navigate("Dashboard", { loggedInUser: user });
        } else {
            Alert.alert("Error", "Invalid email or password");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerIcon}>🎤</Text>
                <Text style={styles.headerText}>Minutes of a Meeting</Text>
            </View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                    <Text style={[styles.tabText, styles.activeTabText]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, styles.inactiveTab]}>
                    <Text style={styles.tabText}>Register</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder="E-mail ID"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const Dashboard = ({ navigation, route }) => {
    const [allMeetings, setAllMeetings] = useState(meetings);
    const loggedInUser = route.params?.loggedInUser;

    // Refresh meetings when navigating back to Dashboard
    React.useEffect(() => {
        if (route.params?.refreshMeetings) {
            setAllMeetings([...meetings]);
        }
    }, [route.params?.refreshMeetings]);

    const handleDelete = (id) => {
        meetings = meetings.filter((meeting) => meeting.id !== id);
        setAllMeetings([...meetings]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Minutes of a Meeting</Text>
            </View>
            <TextInput style={styles.searchBar} placeholder="Search Meeting" />

            {allMeetings.length > 0 ? (
                <FlatList
                    data={allMeetings}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardDetails}>Date: {item.date}</Text>
                            <Text style={styles.cardDetails}>
                                Time: {item.startTime} - {item.endTime}
                            </Text>
                            <Text style={styles.cardDetails}>Description: {item.description}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[styles.button, styles.updateButton]}
                                    onPress={() => navigation.navigate("CreateMeeting", { meetingToUpdate: item })}
                                >
                                    <Text style={styles.buttonText}>Update</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, styles.deleteButton]}
                                    onPress={() => handleDelete(item.id)}
                                >
                                    <Text style={styles.buttonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noMeetingsText}>No meetings found</Text>
            )}

            <TouchableOpacity
                style={styles.createMeetingButton}
                onPress={() => navigation.navigate("CreateMeeting")}
            >
                <Text style={styles.createMeetingText}>Create Meeting</Text>
            </TouchableOpacity>

            {/* GO TO PROFILE Button */}
            <TouchableOpacity
                style={styles.profileButton}
                onPress={() => navigation.navigate("ProfileScreen", { loggedInUser })}
            >
                <Text style={styles.profileButtonText}>GO TO PROFILE</Text>
            </TouchableOpacity>
        </View>
    );
};

const CreateMeeting = ({ navigation, route }) => {
    const { meetingToUpdate } = route.params || {};
    const [date, setDate] = useState(meetingToUpdate?.date || "");
    const [day, setDay] = useState(meetingToUpdate?.day || "");
    const [startTime, setStartTime] = useState(meetingToUpdate?.startTime || "");
    const [endTime, setEndTime] = useState(meetingToUpdate?.endTime || "");
    const [title, setTitle] = useState(meetingToUpdate?.title || "");
    const [description, setDescription] = useState(meetingToUpdate?.description || "");

    const handleCreateMeeting = () => {
        const newMeeting = {
            id: meetingToUpdate?.id || Date.now(), // Generate unique ID for new meetings
            date,
            day,
            startTime,
            endTime,
            title,
            description,
        };

        if (meetingToUpdate) {
            // Update existing meeting
            const index = meetings.findIndex((meeting) => meeting.id === meetingToUpdate.id);
            if (index !== -1) {
                meetings[index] = newMeeting;
            }
        } else {
            // Add new meeting
            meetings.push(newMeeting);
        }

        // Navigate back to Dashboard and trigger a refresh
        navigation.navigate("Dashboard", { refreshMeetings: true });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{meetingToUpdate ? "Update Meeting" : "Create New Meeting"}</Text>
            <Text style={styles.label}>Meeting Date</Text>
            <TextInput style={styles.input} placeholder="YYYY-MM-DD" value={date} onChangeText={setDate} />
            <Text style={styles.label}>Meeting Day</Text>
            <TextInput style={styles.input} placeholder="Day" value={day} onChangeText={setDay} />
            <Text style={styles.label}>Meeting Time</Text>
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Start Time"
                    value={startTime}
                    onChangeText={setStartTime}
                />
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="End Time"
                    value={endTime}
                    onChangeText={setEndTime}
                />
            </View>
            <Text style={styles.label}>Meeting Title</Text>
            <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
            <Text style={styles.label}>Description (Optional)</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Description"
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.createButton} onPress={handleCreateMeeting}>
                <Text style={styles.createText}>{meetingToUpdate ? "UPDATE" : "CREATE"} Meeting</Text>
            </TouchableOpacity>
        </View>
    );
};

const ProfileScreen = ({ route }) => {
    // Add a default value for loggedInUser if it's undefined
    const loggedInUser = route.params?.loggedInUser || {
        email: "default@example.com",
        fullName: "Guest User",
        image: require("../Images/car.jpg"), // Add a default image
    };

    const [profileImage, setProfileImage] = useState(loggedInUser?.image);

    // Function to determine the correct source for the Image component
    const getImageSource = (image) => {
        if (typeof image === "string") {
            // Remote image (URI)
            return { uri: image };
        } else {
            // Local image (require)
            return image;
        }
    };

    // Function to open the phone gallery and pick an image
    const pickImage = () => {
        const options = {
            mediaType: "photo", // Only allow photos
            quality: 1, // Highest quality
            includeBase64: false, // Don't include base64 data
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorCode) {
                console.log("ImagePicker Error: ", response.errorMessage);
                Alert.alert("Error", "Failed to pick image. Please try again.");
            } else if (response.assets && response.assets.length > 0) {
                // Set the new image URI
                const source = { uri: response.assets[0].uri };
                setProfileImage(source);

                // Update the user's image in the global users list
                const userIndex = users.findIndex((u) => u.email === loggedInUser.email);
                if (userIndex !== -1) {
                    users[userIndex].image = source.uri; // Save the URI as a string
                }
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={getImageSource(profileImage)}
                        style={styles.profileImage}
                        onError={(e) => console.log("Image load error:", e.nativeEvent.error)}
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
                        <Text style={{ fontSize: 24 }}>✏️</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.profileFullName}>{loggedInUser?.fullName || "No Name"}</Text>
                <Text style={styles.profileEmail}>{loggedInUser?.email}</Text>
            </View>
        </View>
    );
};

const FirstScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="CreateMeeting" component={CreateMeeting} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { alignItems: "center", marginBottom: 30 },
    headerIcon: { fontSize: 40, color: "#2DB2AB", marginBottom: 10 },
    headerText: { fontSize: 20, fontWeight: "bold" },
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
    },
    loginButton: {
        backgroundColor: "#2DB2AB",
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
    },
    loginButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
    title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
    createMeetingButton: {
        backgroundColor: "#2DB2AB",
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
    },
    createMeetingText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    row: { flexDirection: "row", marginVertical: 10 },
    halfInput: { width: "48%" },
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
    card: {
        width: 300,
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 10,
        elevation: 2,
        margin: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cardDetails: {
        fontSize: 14,
        marginBottom: 5,
        color: "#555",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 5,
    },
    updateButton: {
        backgroundColor: "#4CAF50",
    },
    deleteButton: {
        backgroundColor: "#F44336",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    searchBar: {
        margin: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
    },
    noMeetingsText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#555",
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    profileButton: {
        backgroundColor: "#2DB2AB",
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
    },
    profileButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    profileHeader: {
        alignItems: "center",
        marginTop: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        backgroundColor: "#aaa",
    },
    profileFullName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: 280,
        padding: 10,
        textAlign: 'center'

    },
    profileEmail: {
        fontSize: 22,
        color: "#555",
    },
    profileImageContainer: {
        position: "relative",

    },
    editIcon: {
        position: "absolute",
        right: 0,
        bottom: 20,
        backgroundColor: "#2DB2AB",
        borderRadius: 20,
        padding: 8,
    },
});

export { LoginScreen, Dashboard, CreateMeeting, ProfileScreen, FirstScreen };