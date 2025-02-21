import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CPS = () => {
    const [vehNum, setVehNum] = useState('');
    const [vehType, setVehType] = useState('');
    const [allVeh, setAllVeh] = useState([]);
    const [earning, setEarning] = useState(0);
    const [filter, setFilter] = useState('all');
    const [parkedOutVeh, setParkedOutVeh] = useState([]);

    const addVeh = () => {
        const tempVeh = { type: vehType, number: vehNum };

        // Check if the vehicle already exists
        const vehicleExists = allVeh.some(vehicle => vehicle.number === vehNum);

        if (vehicleExists) {
            console.warn('Vehicle Already Exists');
        } else {
            console.log('Vehicle Added Successfully');
            setAllVeh([...allVeh, tempVeh]);
            setEarning(earning + 200);
        }
    };

    const deleteVeh = (num) => {
        const vehicleToParkOut = allVeh.find(vehicle => vehicle.number === num);
        if (vehicleToParkOut) {
            setParkedOutVeh([...parkedOutVeh, vehicleToParkOut]);
            const updatedVehList = allVeh.filter(vehicle => vehicle.number !== num);
            setAllVeh(updatedVehList);
            console.log(`Vehicle ${num} has been parked out.`);
        }
    };

    const displayAllVeh = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, margin: 10, borderWidth: 2, borderRadius: 5 }}>
                <View>
                    <Text>{item.number}</Text>
                    <Text>{item.type}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#d994e7', justifyContent: 'center', alignItems: 'center', margin: 10, width: 80, height: 40, borderRadius: 20 }}
                        onPress={() => deleteVeh(item.number)}
                    >
                        <Text>Park Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    // Filter the vehicles based on the selected filter
    let filteredVeh = [];
    if (filter === 'all') {
        filteredVeh = allVeh;
    } else if (filter === 'car') {
        filteredVeh = allVeh.filter(vehicle => vehicle.type === 'car');
    } else if (filter === 'bike') {
        filteredVeh = allVeh.filter(vehicle => vehicle.type === 'bike');
    } else if (filter === 'parkedOut') {
        filteredVeh = parkedOutVeh; // Show only parked-out vehicles
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#d994e7', padding: 10, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>Car Parking System</Text>
            </View>
            <View style={{ borderWidth: 2, borderRadius: 5, margin: 15 }}>
                <TextInput
                    placeholder="Enter Vehicle Number"
                    onChangeText={setVehNum}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="car"
                            status={vehType === 'car' ? 'checked' : 'unchecked'}
                            onPress={() => setVehType('car')}
                        />
                        <Text>Car</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="bike"
                            status={vehType === 'bike' ? 'checked' : 'unchecked'}
                            onPress={() => setVehType('bike')}
                        />
                        <Text>Bike</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: '#d994e7', justifyContent: 'center', alignItems: 'center', margin: 10, width: 80, height: 40, borderRadius: 20 }}
                    onPress={addVeh}
                >
                    <Text>Park IN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: filter === 'all' ? '#d994e7' : '#9c9ba0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        width: 50,
                        height: 40,
                        borderRadius: 20
                    }}
                    onPress={() => setFilter('all')}
                >
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: filter === 'car' ? '#d994e7' : '#9c9ba0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        width: 50,
                        height: 40,
                        borderRadius: 20
                    }}
                    onPress={() => setFilter('car')}
                >
                    <Text>Cars</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: filter === 'bike' ? '#d994e7' : '#9c9ba0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        width: 60,
                        height: 40,
                        borderRadius: 20
                    }}
                    onPress={() => setFilter('bike')}
                >
                    <Text>Bikes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: filter === 'parkedOut' ? '#d994e7' : '#9c9ba0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 10,
                        width: 80,
                        height: 40,
                        borderRadius: 20
                    }}
                    onPress={() => setFilter('parkedOut')}
                >
                    <Text>Parked Out</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <Text>Total Parked In: {allVeh.length}</Text>
                <Text>Total Earnings: RS {earning}</Text>
            </View>
            <View>
                <FlatList
                    data={filteredVeh} // Pass the filtered vehicles here
                    renderItem={displayAllVeh}
                />
            </View>
        </View>
    );
};

export default CPS;
