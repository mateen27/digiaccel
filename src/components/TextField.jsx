import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const TextField = ({ placeholder }) => {
  return (
    <>
        <TextInput style = { styles.textInputStyle } placeholder={placeholder} placeholderTextColor={'#B5B5C3'}/>
    </>
  )
}

export default TextField

const styles = StyleSheet.create({
    signInContainer: {
        backgroundColor: '#F2F3F7',
        borderTopLeftRadius: responsiveScreenHeight(4),
        borderTopRightRadius: responsiveScreenHeight(4),
        padding: 10,
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(50),
      },
      textInputStyle: {
        backgroundColor: '#fff', 
        padding: 10,
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10
      }
})