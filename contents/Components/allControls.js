import { Pressable, StyleSheet, Text, View } from "react-native";

export const MyBtn = ({ title, OnPress, style, txtStyle }) => {
    return (
        <Pressable
            android_ripple={{ color: 'gray', foreground: true, borderless: false }}
            onPress={OnPress}>
            <View style={[myStyles.btn, style]}>
                <Text style={[myStyles.txt, txtStyle]}>{title}</Text>
            </View>
        </Pressable>
    )
}

const myStyles = StyleSheet.create({
    btn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    txt: {
        color: 'white'
    }
});
