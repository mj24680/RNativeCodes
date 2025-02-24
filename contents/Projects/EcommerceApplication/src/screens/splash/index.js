import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('SignIn')
  }, 2000)
  return (
    <ImageBackground
      source={require('../../assets/splashBg.jpg')}
      resizeMode='cover'
      style={{ flex: 1, height: 800, padding: 18 }}
    >
      <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>ECOMMERCE APPLICATION</Text>
    </ImageBackground>
  )
}