import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, TextInput } from 'react-native';

const Calculator = () => {
    const [value, setValue] = useState('');


    var clearText = () => {
        setValue('')
    }

    return (
        <View style={myStyle.main}>

            <View style={myStyle.heading}>
                <Text style={{ fontSize: 30, color: 'red' }}>CALCULATOR</Text>
            </View>

            <View style={myStyle.myDisplay}>
                <Text style={myStyle.displayText}>{value}</Text>
            </View>

            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(7)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setValue(8)
                        }}
                        style={myStyle.button}>
                        <Text style={myStyle.buttonText}>8</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(9)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue('+')
                    }} style={myStyle.operatorButton}>
                        <Text style={myStyle.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(4)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>4</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(5)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>5</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(6)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue('-')
                    }} style={myStyle.operatorButton}>
                        <Text style={myStyle.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(1)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>1</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(2)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>2</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(3)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue('x')
                    }} style={myStyle.operatorButton}>
                        <Text style={myStyle.buttonText}>x</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={clearText} style={myStyle.clearButton}>
                        <Text style={myStyle.buttonText}>C</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue(0)
                    }} style={myStyle.button}>
                        <Text style={myStyle.buttonText}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity style={myStyle.operatorButton}>
                        <Text style={myStyle.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <TouchableOpacity onPress={() => {
                        setValue('/')
                    }} style={myStyle.operatorButton}>
                        <Text style={myStyle.buttonText}>/</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const myStyle = StyleSheet.create({
    main: {
        flex: 1, padding: 20,
        alignItems: 'center'
    },
    heading: {
        height: 60,
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        // alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    operatorButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    clearButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    myDisplay: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        width: 250,
        height: 50,
        padding: 9,
        margin: 15
    },
    displayText: {
        fontSize: 20,
    },
});

export default Calculator;