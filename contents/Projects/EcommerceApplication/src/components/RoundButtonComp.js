import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButtonComp({ label, border }) {
    return (
        <TouchableOpacity>
            <View style={{
                backgroundColor: border ? 'white' : '#034ef7',
                width: 120,
                paddingHorizontal: 10, paddingVertical: 10,
                borderRadius: 25,
                borderColor: 'black',
                borderWidth: border ? 1 : 0,
                marginLeft: 15
            }}>
                <Text style={{
                    color: border ? 'black' : 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 20
                }}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}