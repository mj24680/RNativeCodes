import React from "react";
import { Touchable, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

const Task = () => {

    var contact = { firstName: "Ali", lastName: "Raza", phoneNo: "32158211", email: "jawad@gmail.com", DOB: "01/01/2001", City: "RWP" };
    return (
        <View>
            <View>

            </View>
            <View>
                <TouchableOpacity style={{ backgroundColor: 'blue' }}>
                    <Text>Capture</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default Task;