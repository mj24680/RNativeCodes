import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";


const LoginForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [messageColor, setMessageColor] = useState('')

    const [allUsers, setAllUsers] = useState([]);

    const addUser = () => {
        if (name == '' || password == '') {
            setMessageColor('red')
            setMessage('Please Fill all Fields First')
        } else {
            const tempUser = { UserName: name, Password: password, }
            allUsers.push(tempUser)
            setName('')
            setPassword('')
            setMessageColor('green')
            setMessage('User Login Succesfully')

        }

        console.log(allUsers)
    }

    return (
        <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>

            <TextInput
                placeholder="Enter Name"
                style={{ borderWidth: 1, borderRadius: 5, marginVertical: 10, fontSize: 20 }}
                onChangeText={setName}
            />

            <TextInput
                placeholder="Enter Password"
                style={{ borderWidth: 1, borderRadius: 5, marginVertical: 10, fontSize: 20 }}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Text style={{ alignSelf: 'center', fontSize: 20, color: messageColor }}>{message}</Text>

            <TouchableOpacity
                style={{ backgroundColor: 'blue', width: 120, borderRadius: 20, alignItems: 'center', padding: 10, margin: 20, alignSelf: 'center' }}
                onPress={() => { addUser() }}
            >
                <Text style={{ fontSize: 24, color: 'white' }}>LogIn</Text>
            </TouchableOpacity>

        </View>

    );

}
export default LoginForm