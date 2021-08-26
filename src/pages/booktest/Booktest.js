import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../../components/menus/Header';
import Menu from '../../components/menus/Menu';
import Overview from './Overview';
import Path from './Path';
import Banks from './Banks';
import Create from './Create';
import Rating from './Rating';

const Tab = createBottomTabNavigator();

function Booktest({ route, navigation }) {
  const { thm } = route.params
  return (
    <View style={{flex:1}}>
      <Header thm={thm} navigation={navigation} />
      <Tab.Navigator tabBar={(props) => <Menu {...props} thm={thm} />}
      screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="testOverview" component={Overview} initialParams={{thm}} />
        <Tab.Screen name="testPath" component={Path} initialParams={{thm}} />
        <Tab.Screen name="testBanks" component={Banks} initialParams={{thm}} />
        <Tab.Screen name="testCreate" component={Create} initialParams={{thm}} />
        <Tab.Screen name="testRating" component={Rating} initialParams={{thm}} />
      </Tab.Navigator>
    </View>
  )
}
const styles = StyleSheet.create({
  booktest: {
    backgroundColor: 'blue',
    height: 1000,
  }
})

export default Booktest