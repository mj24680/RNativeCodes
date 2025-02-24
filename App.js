import React from "react";
import { View, Text } from "react-native";
import { FirstScreen } from "./contents/MinutesOfMeeting/Main";
import SharedPrefrence from "./contents/SupervisedLabTask/Temp/SharedPrefrences";
import ProfileScreen from "./contents/MinutesOfMeeting/Profile";
import { MainScreen } from "./contents/SupervisedLabTask/Task(29Jan)";
import { SignUpScreen } from "./contents/SupervisedLabTask/Temp/NavigationTask";
import Maps from "./contents/SupervisedLabTask/Temp/GoogleMaps";
import Images from "./contents/Personal/AllAboutImages";
import SplashScreen from "./contents/Projects/EcommerceApplication/src/screens/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./contents/Projects/EcommerceApplication/src/screens/signIn";


const stack = createNativeStackNavigator();

const App = () => {
  // var ipAddress = '127.0.0.1'
  // global.url = `http://192.168.43.183:/MAPAPI/api/FYP/`;
  // global.imageURL = `http://localhost/MAPAPI/Images/`;

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name={'Splash'}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name={'SignIn'}
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      </stack.Navigator>


    </NavigationContainer>
  );
}

export default App;
