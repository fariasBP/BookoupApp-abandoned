// import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from './src/pages/profile/Profile';
import Booktest from './src/pages/booktest/Booktest';
import Game from './src/pages/game/Game';
import Login from './src/pages/auth/Login';
import AppProvider from './src/context/AppContext';
import Signin from './src/pages/auth/Signin';

const Drawer = createDrawerNavigator()

function App() {
	const [thm, setThm] = useState({
		dark: false,
		background: '#FFFFFF',
		foreground: '#EBF2F7',
		medium: '#879CB7',
		primary: '#00BBD3',
		inverse: '#FFFFFF',
		btn: '#344356',
		text: '#344356',
		black: '#131D28', //1D2C3F
		colors: {
			red: '#F34236',
			pink: '#E81E62',
			purple: '#9B27AF',
			deeppurple: '#663AB6',
			indingo: '#3E50B4',
			lightblue: '#03A8F3',
			cyan: '#00BBD3',
			teal: '#009587',
			green: '#4BAE4F',
			lightgreen: '#8AC249',
			lime: '#CCDB39',
			yellow: '#FEEA3B',
			ambar: '#FEC007',
			orange: '#FE9700',
			deeporange: '#FE5622',
			brown: '#785447',
			gray: '#9D9D9D',
			bluegray: '#5F7C8A',
		},
	})
  return (
		<AppProvider>
			<StatusBar
        backgroundColor={thm.background}
				barStyle={thm.dark?'light-content':'dark-content'}
				/>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Booktest"
				drawerStyle={{
					backgroundColor: thm.foreground
				}}
				screenOptions={{
					activeTintColor: thm.primary,
					headerShown: false,
				}}>
					<Drawer.Screen name="Login" component={Login} options={{swipeEnabled:false}} />
					<Drawer.Screen name="Booktest" component={Booktest} initialParams={{thm}} />
					<Drawer.Screen name="Profile" component={Profile} initialParams={{thm}} />
					<Drawer.Screen name="Game" component={Game} />
					<Drawer.Screen name="Signin" component={Signin} options={{swipeEnabled:false}} />
				</Drawer.Navigator>
			</NavigationContainer>
		</AppProvider>
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'pink',
		flex: 1,
		alignItems: 'stretch'
  },
})

export default App