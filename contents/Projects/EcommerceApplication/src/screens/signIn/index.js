import { View, Text, Image } from 'react-native'
import React from 'react'
import RoundButtonComp from '../../components/RoundButtonComp'
import FullRoundBtnComp from '../../components/FullRoundBtnComp'


export default function SignInScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.5, paddingTop: 50 }}>
                <Image
                    source={require('../../assets/logIn.png')}
                    resizeMode={'cover'}
                    style={{ height: 280, width: 390 }}
                />

            </View>
            <View style={{ flex: 0.5 }}>
                <Text
                    style={{ textAlign: 'center', fontSize: 30, color: 'black', fontWeight: 'bold' }}
                >Hello!</Text>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Welcome to .10x Ecommerce Store</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                    <RoundButtonComp label={'LogIn'} border={false} />
                    <RoundButtonComp label={'SignUp'} border={true} />
                </View>

                <View style={{ marginTop: 20, flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 20 }}>Or Via Social Media Account</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <FullRoundBtnComp
                            image={require('../../assets/google.png')}
                            bg={'#e54545'}
                        />
                        <FullRoundBtnComp
                            image={require('../../assets/facebook.png')}
                            bg={'#2d75e8'}
                        />
                        <FullRoundBtnComp
                            image={require('../../assets/linkedIn.png')}
                            bg={'#2d75e8'}
                        />
                    </View>

                </View>
            </View>
        </View>
    )
}