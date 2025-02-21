import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { RadioButton, TextInput } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSignUp = async () => {
        if (pass !== confirmPass) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        const newUser = { userName: name, password: pass, rememberMe: false };

        try {
            // Get existing users from AsyncStorage
            const usersJSON = await AsyncStorage.getItem('users');
            const users = usersJSON ? JSON.parse(usersJSON) : [];

            if (users.some(user => user.userName === name)) {
                Alert.alert("Error", "User already exists");
                return;
            }

            users.push(newUser);

            // Save the updated list back to AsyncStorage
            await AsyncStorage.setItem('users', JSON.stringify(users));

            Alert.alert("Success", "User registered successfully");
            navigation.navigate("Login");
        } catch (error) {
            console.error("Error saving user:", error);
        }
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <TextInput
                placeholder="User Name"
                onChangeText={setName}
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TextInput
                placeholder="Password"
                onChangeText={setPass}
                secureTextEntry
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TextInput
                placeholder="Confirm Password"
                onChangeText={setConfirmPass}
                secureTextEntry
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TouchableOpacity onPress={handleSignUp} style={{ height: 50, width: 160, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center' }}>
                <Text style={{ fontSize: 24, color: 'white' }}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const Login = ({ navigation }) => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [remCheck, setRemCheck] = useState(false);

    useEffect(() => {
        const loadRememberedUser = async () => {
            try {
                const usersJSON = await AsyncStorage.getItem('users');
                if (usersJSON) {
                    const users = JSON.parse(usersJSON);
                    const rememberedUser = users.find(user => user.rememberMe);
                    if (rememberedUser) {
                        setName(rememberedUser.userName);
                        setPass(rememberedUser.password);
                        setRemCheck(true);
                    }
                }
            } catch (error) {
                console.error("Error loading remembered user:", error);
            }
        };

        loadRememberedUser();
    }, []);

    const handleLogin = async () => {
        try {
            const usersJSON = await AsyncStorage.getItem('users');
            if (usersJSON) {
                const users = JSON.parse(usersJSON);
                const user = users.find(user => user.userName === name && user.password === pass);

                if (user) {
                    if (remCheck) {
                        // Update the user's rememberMe status
                        const updatedUsers = users.map(u => ({
                            ...u,
                            rememberMe: u.userName === name ? true : false,
                        }));
                        await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
                    }

                    navigation.navigate("Home", { user });
                } else {
                    Alert.alert("Error", "Invalid credentials");
                }
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <TextInput
                placeholder="User Name"
                onChangeText={setName}
                value={name}
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TextInput
                placeholder="Password"
                onChangeText={setPass}
                value={pass}
                secureTextEntry
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                <RadioButton
                    status={remCheck ? 'checked' : 'unchecked'}
                    onPress={() => setRemCheck(!remCheck)}
                />
                <Text style={{ fontSize: 24 }}>Remember</Text>
            </View>

            <TouchableOpacity onPress={handleLogin} style={{ height: 50, width: 160, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center' }}>
                <Text style={{ fontSize: 24, color: 'white' }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={{ alignSelf: 'center', margin: 10 }}>
                <Text style={{ fontSize: 20, color: 'blue' }}>New User?</Text>
            </TouchableOpacity>
        </View>
    );
};

const Home = ({ navigation, route }) => {
    const { user } = route.params;
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleChangePassword = async () => {
        if (oldPass !== user.password) {
            Alert.alert("Error", "Old password is incorrect");
            return;
        }

        if (newPass !== confirmPass) {
            Alert.alert("Error", "New passwords do not match");
            return;
        }

        try {
            const usersJSON = await AsyncStorage.getItem('users');
            if (usersJSON) {
                const users = JSON.parse(usersJSON);
                const updatedUsers = users.map(u => ({
                    ...u,
                    password: u.userName === user.userName ? newPass : u.password,
                }));
                await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
                Alert.alert("Success", "Password changed successfully");
            }
        } catch (error) {
            console.error("Error changing password:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const usersJSON = await AsyncStorage.getItem('users');
            if (usersJSON) {
                const users = JSON.parse(usersJSON);
                const updatedUsers = users.filter(u => u.userName !== user.userName);
                await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
                navigation.navigate("Login");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: 26, color: 'green', alignSelf: 'center' }}>Welcome {user.userName}</Text>

            <TextInput
                placeholder="Old Password"
                onChangeText={setOldPass}
                secureTextEntry
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TextInput
                placeholder="New Password"
                onChangeText={setNewPass}
                secureTextEntry
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TextInput
                placeholder="Confirm Password"
                onChangeText={setConfirmPass}
                secureTextEntry
                style={{ borderWidth: 1, fontSize: 20, margin: 10 }}
            />

            <TouchableOpacity onPress={handleChangePassword} style={{ height: 50, width: 160, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 10, alignSelf: 'center', margin: 10 }}>
                <Text style={{ fontSize: 24, color: 'white' }}>Change Password</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <TouchableOpacity onPress={handleDelete} style={{ margin: 10, height: 50, width: 160, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogout} style={{ margin: 10, height: 50, width: 160, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontSize: 24, color: 'white' }}>LogOut</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export {SignUp, Login, Home, MainScreen};