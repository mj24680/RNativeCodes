import React from "react";
import { View, Text } from "react-native";
import { FirstScreen } from "./contents/MinutesOfMeeting/Main";
import SharedPrefrence from "./contents/SupervisedLabTask/Temp/SharedPrefrences";
import ProfileScreen from "./contents/MinutesOfMeeting/Profile";
import { MainScreen } from "./contents/SupervisedLabTask/Task(29Jan)";
import { SignUpScreen } from "./contents/SupervisedLabTask/Temp/NavigationTask";
import Maps from "./contents/SupervisedLabTask/Temp/GoogleMaps";



const App = () => {
  var ipAddress = '127.0.0.1'
  global.url = `http://192.168.43.183:/MAPAPI/api/FYP/`;
  global.imageURL = `http://localhost/MAPAPI/Images/`;

  return (
    // <View style={{ flex: 1 }}>
    //   <SharedPrefrence />

    // </View>
    <MainScreen />
  );
}

export default App;
