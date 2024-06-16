import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const Badge = () => {
  return (
    <View style = { styles.badgeContainer }>
        <Text style = { styles.badgeText }>In Progress</Text>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
    badgeContainer: {
        marginTop: 16,
        backgroundColor: '#D8EAFF',
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(5),
        marginLeft: 20,
        padding: 14,
        borderRadius: 10
    },
    badgeText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: '#0469DE',
        fontSize: 12, 
        fontWeight: '700'
    }
})