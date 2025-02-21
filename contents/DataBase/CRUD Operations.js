import React, { useEffect, useState } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage'

let db = openDatabase({ name: 'userDataBase.db' })

const CRUDOP = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAddress, setUserAddress] = useState('');


    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                (tx, res) => {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                            []
                        );
                    }
                }
            );
        });
    }, []);

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: '#51AEB3', }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 800 }}>

                <TextInput
                    placeholder='Enter User Name'
                    style={{ borderWidth: 2, borderRadius: 15, width: 350, padding: 15, margin: 15 }}
                    onChangeText={(txt) => { setUserName(txt) }}
                    value={userName}
                ></TextInput>

                <TextInput
                    placeholder='Enter User Email'
                    style={{ borderWidth: 2, borderRadius: 15, width: 350, padding: 15, margin: 15 }}
                    keyboardType='email-address'
                    onChangeText={(txt) => { setUserEmail(txt) }}
                    value={userEmail}
                ></TextInput>

                <TextInput
                    placeholder='Enter User Address'
                    style={{ borderWidth: 2, borderRadius: 15, width: 350, padding: 15, margin: 15 }}
                    onChangeText={(txt) => { setUserAddress(txt) }}
                    value={userAddress}
                ></TextInput>

                <TouchableOpacity style={{ backgroundColor: '#8904a2', borderRadius: 15, width: 350, padding: 15, margin: 15, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => { }}
                >
                    <Text style={{ fontSize: 20 }}>Save</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

export default CRUDOP