import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";


const EmployeesFlatList = () => {


    const [employees, setEmployees] = useState([
        { ID: 1, Name: "Jawad", Age: 20, City: 'Rawalpindi' },
        { ID: 2, Name: "Wahab", Age: 21, City: 'Rawalpindi' },
        { ID: 3, Name: "Moiz", Age: 22, City: 'Rawalpindi' },
        { ID: 4, Name: "Noman", Age: 23, City: 'Rajanpur' },
        { ID: 5, Name: "Zayab", Age: 24, City: 'Kashmir' },

    ]);

    const showAllEmployees = ({ item }) => {
        return (

            <View View style={{ margin: 10, backgroundColor: 'red', borderRadius: 12, borderWidth: 2, padding: 5, height: 180 }
            }>

                <View style={{ alignItems: 'center', height: 30, justifyContent: 'center', }}>
                    <Text style={{ fontSize: 24 }}>{item.Name}</Text>
                </View>

                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1, borderWidth: 2, margin: 2, padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 24 }}>{item.Age}</Text>
                        <Text style={{ fontSize: 24 }}>{item.City}</Text>

                    </View>
                    <View style={{ flex: 1, borderWidth: 2, margin: 2, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            mode="contained"
                            labelStyle={{ fontSize: 18 }}
                            onPress={() => { }}
                            style={{ marginVertical: 5 }}
                        >
                            ShowID
                        </Button>


                        <Button
                            mode="contained"
                            labelStyle={{ fontSize: 18 }}
                            onPress={() => { deleteEmployee(item.ID) }}
                            style={{ marginVertical: 5 }}
                        >
                            Delete
                        </Button>

                    </View>
                </View>

            </View >
        );
    }

    const deleteEmployee = (id) => {
        var fliteredEmployees = employees.filter(e => e.ID != id);
        setEmployees([...fliteredEmployees]);
        console.log(fliteredEmployees)
    }

    return (
        <View style={{ flex: 1, padding: 10, }}>

            <View style={{ height: 60, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                <Text style={{ fontSize: 24 }}> Employees Data</Text>
            </View>

            <FlatList
                data={employees}
                renderItem={showAllEmployees}
            ></FlatList>

        </View>
    );
}
export default EmployeesFlatList;