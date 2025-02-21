import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RadioButton, TextInput } from "react-native-paper";

const EmpForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [junior, setJunior] = useState(false);
    const [senior, setSenior] = useState(false);
    const [bs, setBS] = useState(false);
    const [ms, setMS] = useState(false);
    const [isGenderChecked, setIsGenderChecked] = useState('')
    const [isMaritalChecked, setIsMaritalChecked] = useState('')
    const [salary, setSalary] = useState();


    const calculateSalary = () => {
        const seniorSalary = 90000
        const juniorSalary = 50000

        if (senior == true && isMaritalChecked == 'Married') {
            const bonus = (15 / 100) * seniorSalary
            setSalary(seniorSalary + bonus)
        }
        else if (senior == true && isMaritalChecked == 'UnMarried') {
            setSalary(seniorSalary)
        }
        else if (junior == true && isMaritalChecked == 'Married') {
            const bonus = (10 / 100) * juniorSalary
            setSalary(juniorSalary + bonus)
        }
        else {
            setSalary(juniorSalary)
        }

    }


    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ backgroundColor: 'lightblue', height: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Employee Form</Text>
            </View>
            <View style={{ margin: 15 }}>
                <TextInput
                    placeholder="Enter Your Name"
                    style={{ borderWidth: 1, borderRadius: 5, marginVertical: 5 }}
                />
                <TextInput
                    placeholder="Enter Mobile Number"
                    style={{ borderWidth: 1, borderRadius: 5, marginVertical: 5 }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Job</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <RadioButton
                            value="junior"
                            status={junior ? 'checked' : 'unchecked'}
                            onPress={() => { setJunior(!junior) }}
                        />
                        <Text style={{ fontSize: 18 }}>Junior Lecturar</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <RadioButton
                            value="senior"
                            status={senior ? 'checked' : 'unchecked'}
                            onPress={() => { setSenior(!senior) }}
                        />
                        <Text style={{ fontSize: 18 }}>Senior Lecturar</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Select Qualification</Text>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <RadioButton
                            value="bs"
                            status={bs ? 'checked' : 'unchecked'}
                            onPress={() => { setBS(!bs) }}
                        />
                        <Text style={{ fontSize: 18 }}>BS</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <RadioButton
                            value="ms"
                            status={ms ? 'checked' : 'unchecked'}
                            onPress={() => { setMS(!ms) }}
                        />
                        <Text style={{ fontSize: 18 }}>MS</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Choose Gender</Text>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="Male"
                            status={isGenderChecked == 'Male' ? 'checked' : 'unchecked'}
                            onPress={() => { setIsGenderChecked('Male') }}
                        />
                        <Text style={{ fontSize: 18 }}>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="Female"
                            status={isGenderChecked == 'Female' ? 'checked' : 'unchecked'}
                            onPress={() => { setIsGenderChecked('Female') }}
                        />
                        <Text style={{ fontSize: 18 }}>Female</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Marital Status</Text>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="Married"
                            status={isMaritalChecked == 'Married' ? 'checked' : 'unchecked'}
                            onPress={() => { setIsMaritalChecked('Married') }}
                        />
                        <Text style={{ fontSize: 18 }}>Married</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="UnMarried"
                            status={isMaritalChecked == 'UnMarried' ? 'checked' : 'unchecked'}
                            onPress={() => { setIsMaritalChecked('UnMarried') }}
                        />
                        <Text style={{ fontSize: 18 }}>Un Married</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', height: 40, marginVertical: 10, width: 170, alignSelf: 'center', borderRadius: 15 }}
                onPress={() => { calculateSalary() }}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>Expected Salary</Text>
            </TouchableOpacity>

            <View style={{ marginVertical: 15 }}>
                <Text style={{ fontSize: 22 }}>Your Salary is RS.{salary}</Text>
            </View>

        </View>
    );
}
export default EmpForm;