import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";

const MobileShop = () => {

    const [isShow, setIsShow] = useState(true);
    const [allStock, setAllStock] = useState([]);
    const [mobileName, setMobileName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState();

    const clearFields = () => {
        setMobileName('');
        setCategory('');
        setPrice('');
        setQuantity('');
    }

    const addMobile = () => {
        const tempMobile = { name: mobileName, category: category, price: price, quantity: quantity }
        setAllStock([...allStock, tempMobile]);
        clearFields();
        console.log(allStock)

    }

    const deleteMobile = (mobileName) => {
        const mobileRemoved = allStock.find(mobile => mobile.name == mobileName)
        if (mobileRemoved) {
            const updateList = allStock.filter(mobile => mobile.name != mobileName)
            setAllStock(updateList)
        }
    }

    const showStock = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Name: {item.name}</Text>
                    <Text style={{ fontSize: 24 }}>Category: {item.category}</Text>
                    <Text style={{ fontSize: 24 }}>Price: {item.price}</Text>
                    <Text style={{ fontSize: 24 }}>Quantity: {item.quantity}</Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', height: 40, marginVertical: 10, width: 170, borderRadius: 15 }}
                    onPress={() => { deleteMobile(item.name) }}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>Delete Mobile</Text>
                </TouchableOpacity>


            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>

            {isShow &&
                <View>
                    <View style={{ backgroundColor: 'lightblue', height: 60, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Mobile Shop</Text>
                    </View>

                    <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 18 }}>Mobile Name</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderRadius: 5, marginVertical: 5 }}
                            onChangeText={setMobileName}
                        />
                        <Text style={{ fontSize: 18 }}>Category</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderRadius: 5, marginVertical: 5 }}
                            onChangeText={setCategory}
                        />
                        <Text style={{ fontSize: 18 }}>Price</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderRadius: 5, marginVertical: 5 }}
                            onChangeText={setPrice}
                        />
                        <Text style={{ fontSize: 18 }}>Quantity</Text>
                        <TextInput
                            style={{ borderWidth: 1, borderRadius: 5, marginVertical: 5 }}
                            onChangeText={setQuantity}
                        />
                    </View>

                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', height: 40, marginVertical: 10, width: 170, alignSelf: 'center', borderRadius: 15 }}
                        onPress={() => { addMobile() }}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Add</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', height: 40, marginVertical: 10, width: 170, alignSelf: 'center', borderRadius: 15 }}
                        onPress={() => { setIsShow(false) }}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Show Stock</Text>
                    </TouchableOpacity>
                </View>
            }
            {
                !isShow &&
                <View>
                    <View style={{ backgroundColor: 'lightblue', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>All Stock</Text>
                    </View>

                    <View>
                        <FlatList
                            data={allStock}
                            renderItem={showStock}
                        />
                    </View>


                    <TouchableOpacity
                        style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', height: 40, marginVertical: 10, width: 170, alignSelf: 'center', borderRadius: 15 }}
                        onPress={() => { setIsShow(true) }}
                    >
                        <Text style={{ fontSize: 20, color: 'white' }}>Go Back</Text>
                    </TouchableOpacity>

                </View>
            }
        </View>
    );
}
export default MobileShop;