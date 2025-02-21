import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Picker,
    ScrollView,
} from 'react-native';

const ScheduleScreen = () => {
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [fromTime, setFromTime] = useState('2:30 PM');
    const [toTime, setToTime] = useState('4:00 PM');

    const scheduleData = [
        { day: 'Monday', from: '2:30 PM', to: '4:00 PM' },
        { day: 'Tuesday', from: '2:00 PM', to: '6:00 PM' },
        { day: 'Wednesday', from: '9:30 AM', to: '2:30 PM' },
        { day: 'Thursday', from: '2:30 PM', to: '2:30 PM' },
        { day: 'Friday', from: '5:30 PM', to: '6:30 PM' },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.backButton}>&lt;</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Schedule</Text>
            </View>

            {/* Time Picker Section */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedDay}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}>
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                </Picker>
                <TextInput
                    style={styles.timeInput}
                    value={fromTime}
                    onChangeText={(text) => setFromTime(text)}
                />
                <TextInput
                    style={styles.timeInput}
                    value={toTime}
                    onChangeText={(text) => setToTime(text)}
                />
            </View>

            {/* Schedule Table */}
            <ScrollView style={styles.scheduleContainer}>
                <Text style={styles.scheduleTitle}>Your schedule</Text>
                {scheduleData.map((item, index) => (
                    <View key={index} style={styles.scheduleRow}>
                        <Text style={styles.scheduleDay}>{item.day}</Text>
                        <Text style={styles.scheduleTime}>
                            From: {item.from} To: {item.to}
                        </Text>
                    </View>
                ))}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    backButton: {
        fontSize: 18,
        color: '#4CAF50',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    picker: {
        height: 50,
        width: 120,
    },
    timeInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: 100,
        textAlign: 'center',
    },
    scheduleContainer: {
        flex: 1,
        margin: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
    scheduleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scheduleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    scheduleDay: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scheduleTime: {
        fontSize: 14,
    },
    addButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        padding: 10,
    },
    addButtonText: {
        fontSize: 18,
        color: '#fff',
    },
    saveButton: {
        alignSelf: 'center',
        backgroundColor: '#4CAF50',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    saveButtonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default ScheduleScreen;
