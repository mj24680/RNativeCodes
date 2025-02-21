import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, FlatList } from "react-native";
import { MyBtn } from "../../Components/allControls";




const TestCodes = () => {

    const [myArray, setMyArray] = useState([])
    const [ImageUri, setImageUri] = useState(null)
    const [modalVisibility, setModalVisibility] = useState(true)

    const addAuthor = async () => {
        try {
            var author = { "AuName": "Jawad", "DOB": "06-10-2002", "City": "RWP" }
            var formData = new FormData();

            formData.append('Author', JSON.stringify(author));
            formData.append('image', {
                uri: ImageUri,
                name: 'myPhoto.jpg',
                type: 'image/jpeg'
            })
            var addAuthorURL = url + 'addAuthor';
            var res = await fetch(addAuthorURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData,
                }
            )
            if (res.ok) {
                var text = await res.text();
                console.log('response = ' + text)
            }
            else
                console.log('Error in response');
        } catch (error) {
            console.log('catch Message' + error.message)
        }
    }

    const getAllAuthors = async () => {
        try {
            var response = await fetch(url + "getAllAuthors");
            console.log(url)
            if (response.ok) {
                var allAuthors = await response.json();
                for (var i = 0; i < allAuthors.length; i++) {
                    allAuthors[i].profilePic = imgURL + allAuthors[i].profilePic;
                }
                setMyArray(allAuthors)
                console.log(myArray)
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    const showAuthorsFlatList = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 1, margin: 5, }}>
                <View style={{ borderWidth: 1, margin: 5, }}>
                    <Image
                        resizeMode='stretch'
                        style={{ width: 100, height: 100, }}
                        source={{ uri: item.profilePic }} />
                </View>
                <View>
                    <Text>{item.authorName}</Text>
                    <Text>{item.City}</Text>
                </View>
            </View>
        );
    }


    return (
        <View style={{ flex: 1, padding: 10 }}>
            <MyBtn title="Click Picture" OnPress={
                () => {
                    ImagePicker.launchCamera({
                        'mediaType': 'photo',
                    }, (res) => {
                        if (!res.didCancel)
                            setImageUri(res.assets[0].uri);
                    });
                }} />
            <MyBtn title="Add Author" OnPress={addAuthor} />
            <MyBtn title="Get All Authors" OnPress={() => { }} />

            <FlatList
                style={{ margin: 10, }}
                data={myArray}
                renderItem={showAuthorsFlatList}
            />

        </View>
    );
}

export default TestCodes;