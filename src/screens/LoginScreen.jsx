import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LogoDesign from "../components/Logo";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import TextField from "../components/TextField";
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

  // router
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <LogoDesign />
        {/* Image Login Screen */}
        <View style={{ marginTop: -30 }}>
          <Image
            source={require("../images/bgImage.png")}
            style={styles.imageStyles}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* Sign In */}
      <View style={styles.signInContainer}>
        <Text style={[styles.signInText, { color: '#000' }]}>Sign-in</Text>
        {/* Email */}
        <TextField placeholder={"Enter email or user name"} />
        {/* Password */}
        <TextField placeholder={"Password"}/>

        {/* Forgot Password */}
        <Text style={styles.forgotPassword}>Forgot password?</Text>

        {/* Terms and Conditions */}
        <View style={{ flexDirection: 'row', width: 340, height: 34, marginTop: 98, marginLeft: 24, gap: 10 }}>
          <Checkbox/>
          <Text style = {{ width: 300, fontSize: 14, fontWeight: '600' }}>By signing up, you agree to our terms of services and privacy policy.</Text>
        </View>


        <TouchableOpacity style = { styles.buttonContainer } onPress={() => navigation.navigate('Home')}>
          <Text style = { styles.signInText }>Sign-in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  imageStyles: {
    width: responsiveScreenWidth(80),
    height: responsiveScreenHeight(40),
    alignSelf: "center",
  },
  signInContainer: {
    backgroundColor: "#F2F3F7",
    borderTopLeftRadius: responsiveScreenHeight(4),
    borderTopRightRadius: responsiveScreenHeight(4),
    padding: 10,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(50),
  },
  signInText: {
    marginTop: 24,
    marginLeft: 20,
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: "700",
    color: '#000'
  },
  textInputStyle: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  forgotPassword: {
    fontSize: responsiveScreenFontSize(1.5),
    fontWeight: "700",
    color: "#0469DE",
    marginTop: 12,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  buttonContainer: {
    marginTop: 20.5,
    backgroundColor: '#0469DE',
    paddingTop: 12, 
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginLeft: 24,
    marginRight: 24
  },
  signInText: {
    color: '#fff', fontSize: 18, fontWeight: '700', textAlign: 'center'
  }
});
