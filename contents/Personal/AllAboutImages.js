import React, { useState } from 'react'
import { View, Image, ImageBackground } from 'react-native';

const Images = () => {
    return (
        <View>
            {/* How to Place Image */}

            {/* For Local Image Key word is "require" */}

            {/* For Other Image Key word is "uri" */}

            <ImageBackground
                source={require('../Images/car.jpg')}

                style={{ height: 930 }}
            >
                <Image
                    source={require('../Images/Silvi.jpg')}
                    style={{ width: 440, height: 200, margin: 10 }}
                />

                <Image
                    source={{ uri: 'https://wallup.net/wp-content/uploads/2017/11/23/504912-Nissan_Silvia_Spec-R-Japanese_cars-JDM-S15-Silvia_S15-Nissan_S15-Stanceworks-StanceNation.jpg' }}
                    style={{
                        width: 440, height: 200,
                        margin: 10
                    }}
                />
            </ImageBackground>

        </View>
    );
}
export default Images;