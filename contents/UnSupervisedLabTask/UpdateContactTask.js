import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const UpdateTask = () => {

    const [allContacts, setAllContacts] = useState([]);
    const getAllContacts = async () => {
        var response = await fetch(url + "getAllContacts");

        if (response.ok) {
            var ans = await response.json();
            setAllContacts(ans)
            console.log(ans)
        } else {
            console.log("Error Fetching Data")
        }
    }

    return (
        <View style={{ flex: 1 }}>

            <TouchableOpacity style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', margin: 20, height: 40 }}
                onPress={() => { getAllContacts() }}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>Get All Contacts</Text>
            </TouchableOpacity>

            <FlatList
                data={allContacts}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", margin: 20 }}>
                            <View>
                                <Text style={{ fontSize: 20 }}>{item.firstName}</Text>
                                <Text style={{ fontSize: 20 }}>{item.lastName}</Text>
                                <Text style={{ fontSize: 20 }}>{item.phoneNo}</Text>
                                <Text style={{ fontSize: 20 }}>{item.email}</Text>
                                <Text style={{ fontSize: 20 }}>{item.DOB}</Text>
                                <Text style={{ fontSize: 20 }}>{item.City}</Text>

                            </View>
                            <View>
                                <TouchableOpacity style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', margin: 20, height: 60, width: 120 }}
                                    onPress={() => { getAllContacts() }}
                                >
                                    <Text style={{ fontSize: 20, color: 'white' }}>Update Contacts</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    );
                }}
            />


        </View>
    );
}
export default UpdateTask;