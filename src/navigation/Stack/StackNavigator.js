import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
// icons import
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MainScreen from '../../screens/MainScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: 'Learning Hub',
          headerStyle: {
            backgroundColor: '#1E1E2D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
                  headerLeft: () => (
            <Feather
              name="menu"
              size={24}
              color="white"
              style={{ marginLeft: "auto", marginRight: 20, }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerRight: () => (
            <View style = {{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <Feather
                name="bell"
                size={24}
                color="white"
                style={{ marginLeft: "auto", marginRight: 'auto', }}
                onPress={() => {
                  navigation.goBack();
                }}
                />
                <FontAwesome5
                name="user-circle"
                size={24}
                color="white"
                style={{ marginLeft: "auto", marginRight: 'auto', }}
                onPress={() => {
                  navigation.goBack();
                }}
                />

            </View>
          )
        }}/>
        <Stack.Screen name='Main' component={MainScreen} options={{
          headerTitle: 'Learning Hub',
          headerStyle: {
            backgroundColor: '#1E1E2D',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
                  headerLeft: () => (
            <Feather
              name="menu"
              size={24}
              color="white"
              style={{ marginLeft: "auto", marginRight: 20, }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
          headerRight: () => (
            <View style = {{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <Feather
                name="bell"
                size={24}
                color="white"
                style={{ marginLeft: "auto", marginRight: 'auto', }}
                onPress={() => {
                  navigation.goBack();
                }}
                />
                <FontAwesome5
                name="user-circle"
                size={24}
                color="white"
                style={{ marginLeft: "auto", marginRight: 'auto', }}
                onPress={() => {
                  navigation.goBack();
                }}
                />

            </View>
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;