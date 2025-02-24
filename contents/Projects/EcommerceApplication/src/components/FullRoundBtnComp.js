import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


export default function FullRoundBtnComp({ image, bg }) {
    return (
        <TouchableOpacity>
            <View style={{
                backgroundColor: bg,
                width: 50,
                height: 50,
                justifyContent: 'center', alignItems: 'center',
                borderRadius: 25,
                marginLeft: 15
            }}>
                <Image
                    source={image}
                    style={{ width: 30, height: 30 }}
                />
            </View>
        </TouchableOpacity>
    )
}