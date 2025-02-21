import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TextInput, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';



const SignUpScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 60 }}>
            <TextInput
                style={{ borderWidth: 1, margin: 5, borderRadius: 5, padding: 5, height: 50, fontSize: 20 }}
                placeholder='User Name'


            />
            <TextInput
                style={{ borderWidth: 1, margin: 5, borderRadius: 5, padding: 5, height: 50, fontSize: 20 }}
                placeholder='Enter Password'
            />
            <TextInput
                style={{ borderWidth: 1, margin: 5, borderRadius: 5, padding: 5, height: 50, fontSize: 20 }}
                placeholder='Enter Confirm Password'
            />
            <TouchableOpacity style={{ backgroundColor: 'blue', marginVertical: 20, height: 50, width: 120, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => { navigation.navigate("LogInScreen") }}
            >
                <Text style={{ fontSize: 24, color: 'white' }}>Save</Text>
            </TouchableOpacity>

        </View>
    );
}

const LogInScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, padding: 60 }}>
            <TextInput
                placeholder='Enter User Name'
                style={{ borderWidth: 1, margin: 5, borderRadius: 5, padding: 5, height: 50, fontSize: 20 }}
            />
            <TextInput
                placeholder='Enter Password'
                style={{ borderWidth: 1, margin: 5, borderRadius: 5, padding: 5, height: 50, fontSize: 20 }}
            />
            <TouchableOpacity style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', margin: 20, height: 50, width: 120, alignSelf: 'center', borderRadius: 15 }}
                onPress={() => { navigation.navigate("HomeScreen") }}
            >
                <Text style={{ fontSize: 24, color: 'white' }}>LogIn</Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }}
            >
                <RadioButton
                    status='unchecked'
                />
                <Text style={{ fontSize: 20 }}>Remember Me</Text>

            </View>


        </View>
    );
}


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

            <Text style={{ fontSize: 28, justifyContent: 'center', alignItems: 'center' }}>Home</Text>

            <TouchableOpacity style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', margin: 20, height: 40, width: 150, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
                onPress={() => { }}
            >
                <Text style={{ fontSize: 22, color: 'white', }}>Get All Users</Text>
            </TouchableOpacity>
            <FlatList />

            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Log In Count: 3</Text>


        </View>
    );
}


const Start_Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Start_Navigation, HomeScreen, LogInScreen, SignUpScreen };
